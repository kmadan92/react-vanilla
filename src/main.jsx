import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login, Signup } from './pages/index.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'signin',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
    </ThemeProvider>
  </StrictMode>
);
