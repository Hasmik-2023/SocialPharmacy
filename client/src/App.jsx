import React, { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import ShopCartPage from './components/pages/ShopCartPage';
import axiosInstance, { setAccessToken } from '../axiosInstance';
import ProtectedRouteForAuth from './components/hoc/ProtectedRouteForAuth';

function App() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]); // Add cartItems state

  useEffect(() => {
    axiosInstance('/tokens/refresh')
      .then((res) => {
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
      })
      .catch(() => {
        setUser(null);
        setAccessToken('');
      });
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const res = await axiosInstance.post('/auth/signup', data);
      if (res.status === 200) {
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const res = await axiosInstance.post('/auth/signin', data);
    if (res.status === 200) {
      setUser(res.data.user);
      setAccessToken(res.data.accessToken);
    }
  };

  const handleLogout = async () => {
    try {
      await axiosInstance.post('/auth/logout');
      setUser(null);
      setAccessToken('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleCheckout = () => {
    // Implement checkout logic here
    alert('Proceeding to checkout...');
  };

  const routes = [
    {
      element: <Layout user={user} handleLogout={handleLogout} />,
      children: [
        {
          path: '/',
          element: <MainPage user={user} />, // Pass user prop here
        },
        {
          path: '/signup',
          element: (
            <ProtectedRouteForAuth isAllowed={!user} redirectPath="/">
              <SignUpPage handleSignUp={handleSignUp} />
            </ProtectedRouteForAuth>
          ),
        },
        {
          path: '/signin',
          element: (
            <ProtectedRouteForAuth isAllowed={!user} redirectPath="/">
              <LoginPage handleLogin={handleLogin} />
            </ProtectedRouteForAuth>
          ),
        },
        {
          path: '/shopcart',
          element: (
            <ProtectedRouteForAuth isAllowed={user !== null} redirectPath="/">
              <ShopCartPage cartItems={cartItems} handleCheckout={handleCheckout} />
            </ProtectedRouteForAuth>
          ),
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
