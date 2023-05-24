import React, { useEffect } from 'react';
import '../assets/main.css';
import MainHome from './Home/Home';
import Header from './Common/Header';
import Footer from './Common/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  resetErrorMessage,
  resetSuccessMessage,
} from '../CommonActions/action';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const { successMessage, errorMessage } = useSelector(
    (state) => state.commonReducer
  );
  const dispatch = useDispatch();

  const handleButtonClick = (params) => {
    const contactSection = document.getElementById(params);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = window.location.href.slice(
        window.location.href.lastIndexOf('#') + 1
      );
      handleButtonClick(params);
    }, 400);

    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(resetSuccessMessage());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(resetErrorMessage());
    }
  }, [successMessage, errorMessage]);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <ToastContainer />
      <Header />
      <div style={{ flex: '1' }}>
        <MainHome />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
