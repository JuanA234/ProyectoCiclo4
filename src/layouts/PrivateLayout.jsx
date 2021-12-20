import React from 'react'
import NavbarComponent from 'components/shared/NavbarComponent';
import { useNavigate, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAuth } from 'context/AuthContext';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REFRESH_TOKEN } from 'graphql/auth/mutations';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

const PrivateLayout = ({children}) => {
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const [loadingAuth, setLoadingAuth] = useState(true);

  const [refreshToken, { data: dataMutation, loading: loadingMutation }] =
  useMutation(REFRESH_TOKEN);

  useEffect(() => {
    refreshToken();
  }, [refreshToken]);

  useEffect(() => {
    if (dataMutation) {
      if (dataMutation.refreshToken.token) {
        setToken(dataMutation.refreshToken.token);
      } else {
        setToken(null);
        navigate('/auth/login')    
      }
      setLoadingAuth(false);
    }
  }, [dataMutation, setToken, loadingAuth, navigate]);

  if (loadingMutation || loadingAuth) return <div>Loading...</div>;

    return (
        <div className='flex flex-col md:flex-initial flex-no-wrap h-screen'>
          <NavbarComponent />
        <div className='flex w-full h-full '>
          <div className='w-full h-full'>
            <Outlet />
          </div>
        </div>
        <ToastContainer />|
      </div>
    )
}

export default PrivateLayout
