import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import auth from './services/auth.js';
import { Header, Image } from './components/index.js';
import { login, logout } from './store/authSlice.js';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    auth
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <Image src="https://i.gifer.com/8CLc.gif" className="h-25" />
      </div>
    );
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
