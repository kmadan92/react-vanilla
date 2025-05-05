import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import auth from './services/auth.js';
import Header from './components/Header.jsx';
import { login, logout } from './store/authSlice.js';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    
       auth.getCurrentUser().then(
        (userData)=> {if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      }).finally(()=>setLoading(false));

  }, []);

  return !loading ? (
    <>
      <Header />
      <div>This is the page</div>
    </>
  ) : null;
}

export default App;
