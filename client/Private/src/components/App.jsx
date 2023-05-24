import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import '../assets/main.css';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import Login from './Login/Login';
import Signup from './SignUp/SignUp';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  resetErrorMessage,
  resetSuccessMessage,
} from '../CommonActions/action';

import { setData } from '../service';
import Dashboard from './Dashboard/Dashboard';
import Contact from './Contacts/Contact';
import ChangePassword from './ChangePassword/ChangePassword';
import Profile from './Profile/Profile';
import Modal from './Common/PopUp';
import Consultaion from './Consultation/Consultaion';
import Vaccination from './Vaccination/Vaccination';
import Transaction from './Transaction/Transaction';
import DiseaseList from './Disease/DiseaseList';
import DiseaseAdd from './Disease/DiseaseAdd';
import ConsultaionAdd from './Consultation/ConsultaionAdd';
import PatientList from './Patient/Patient';
import CertificateList from './Certificate/Certificate';
import VaccinationAdd from './Vaccination/VaccineAdd';
import VaccinationList from './Vaccination/Vaccination';
const App = () => {
  const { successMessage, errorMessage } = useSelector(
    (state) => state.commonReducer
  );
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const [checkToken, setcheckToken] = useState(false);
  const [role, setrole] = useState(localStorage.getItem('role'));
  const GetProfile = async () => {
    if (!localStorage.getItem('tokenss')) {
      setcheckToken(false);
      navigate('/');
    } else {
      const { data } = await setData('/auth/login/GetProfile', {
        token: localStorage.getItem('tokenss'),
      });

      setcheckToken(data.success);
      if (data.success) {
        if (data?.data?.SignUpData?.MedicalId && data.data?.Role === 'Patient')
          dispatch({
            type: 'MedicalId_False',
          });
        else if (data.data?.Role === 'Admin')
          dispatch({
            type: 'MedicalId_False',
          });
        else
          dispatch({
            type: 'MedicalId_True',
          });

        if (
          pathname === '/' ||
          pathname === '/Login' ||
          pathname === '/signup'
        ) {
          navigate('/dashboard');
        } else {
          navigate(pathname);
        }
      } else navigate('/');
    }
  };
  useEffect(() => {
    GetProfile();
  }, [localStorage.getItem('tokenss')]);
  useEffect(() => {
    setrole(localStorage.getItem('role'));
  }, [localStorage.getItem('role')]);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <ToastContainer />
      <Header checkToken={checkToken} role={role} />
      <Modal />
      <div style={{ flex: '1' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          {role === 'Admin' ? (
            <>
              <Route path="/PatientList" element={<PatientList />} />
              <Route path="/Contact" element={<Contact />} />
            </>
          ) : null}
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/Profile" element={<Profile role={role} />} />
          <Route path="/Consultaion" element={<Consultaion />} />
          <Route path="/Vaccination" element={<Vaccination />} />
          <Route path="/Transaction" element={<Transaction />} />
          <Route path="/ConsultaionAdd" element={<ConsultaionAdd />} />
          <Route path="/VaccinationAdd" element={<VaccinationAdd />} />
          <Route path="/VaccinationList" element={<VaccinationList />} />

          {role === 'Patient' ? (
            <>
              <Route path="/DiseaseList" element={<DiseaseList />} />
              <Route path="/DiseaseAdd" element={<DiseaseAdd />} />
              <Route path="/CertificateList" element={<CertificateList />} />
            </>
          ) : null}
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
