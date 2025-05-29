import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { Image } from './index.js';

export default function ProtectedRoute({ children, authentication = true }) {
  const navigate = useNavigate();
  const location = useLocation();
  const authCheck = useSelector((state) => state.auth.isUserLoggedIn);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (authentication && authCheck !== authentication) {
      navigate('/signin');
    } else if (!authentication && authCheck !== authentication) {
      navigate('/dashboard');
    }
    setLoader(false);
  }, [authCheck, navigate, dispatch, authentication]);

  return loader ? (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Image src="https://i.gifer.com/8CLc.gif" className="h-25" />
    </div>
  ) : (
    <>{children}</>
  );
}
