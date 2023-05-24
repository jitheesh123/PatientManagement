import React, { useState } from 'react';
import Web3 from 'web3';
import consultationCertificateVerificationFunction from '../blockchain/certificateVerificationFunction';
import certificateVerificationFunction from '../blockchain/vaccinationCertificateVerify';
import Modals from '../Modal/modal';

const Certificate = () => {
  const [certificateNumber, setCertificateNumber] = useState('');
  const [vaccineCert, setVaccineCert] = useState('');
  const [open, setopen] = useState({ status: false, data: {} });
  const verifyConsultation = async (e) => {
    e.preventDefault();
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();

    let result = await consultationCertificateVerificationFunction({
      web3,
      certificateNumber,
    });
    const certificatenumber = result.certificateNumber;
    const patientName = web3.utils.hexToUtf8(result.patientName);
    const patientUUID = web3.utils.hexToUtf8(result.patientUUID);
    const patientRegId = result.patientRegId;
    const doctorName = web3.utils.hexToUtf8(result.doctorName);
    const endTimestamp = result.consultationTime;
    const startTimestamp = result.issuedDateTime;
    const startDate = new Date(startTimestamp * 1000);
    const startHours = startDate.getHours();
    const startAMPM = startHours >= 12 ? 'PM' : 'AM';

    const endDate = new Date(endTimestamp * 1000);
    const endHours = endDate.getHours();
    const endAMPM = endHours >= 12 ? 'PM' : 'AM';
    const consultationTime = endHours + ':00' + endAMPM;
    const departmentName = web3.utils.hexToUtf8(result.departmentName);
    const issuerName = web3.utils.hexToUtf8(result.issuerName);
    const issuerId = web3.utils.hexToUtf8(result.issuerId);
    const issuedDateTime = startAMPM;
    const hospitalName = web3.utils.hexToUtf8(result.hospitalName);

    const decoded = {
      certificatenumber,
      patientName,
      patientUUID,
      patientRegId,
      doctorName,
      consultationTime,
      departmentName,
      hospitalName,
      issuerName,
      issuerId,
      issuedDateTime,
    };
    setopen({ status: true, data: decoded });
  };

  const handleCertificateNumberChange = (e) => {
    setCertificateNumber(e.target.value);
  };

  const verifyVaccination = async (e) => {
    e.preventDefault();
    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    const accounts = await web3.eth.getAccounts();

    await certificateVerificationFunction({
      web3,
      certificateNumber: vaccineCert,
    });
  };

  const handleVaccinationChange = (e) => {
    setVaccineCert(e.target.value);
  };

  return (
    <div id="certificate" className="p-5 mt-5 mb-5">
      <Modals open={open} close={() => setopen({ status: false, data: {} })} />;
      <div className="text-center text-green">
        <h2 className="text-decoration-underline">CERTIFICATE</h2>
      </div>
      <form className="form-search" onSubmit={verifyVaccination}>
        <div className="mt-5">
          <h3 className="fw-bold">Verify vaccine certification</h3>
        </div>
        <input
          className="mt-3 form-control"
          type="search"
          name="search"
          placeholder="search your certificate no.."
          onChange={handleVaccinationChange}
          value={vaccineCert}
        />
        <button className="login-link mt-3" type="submit">
          Search
        </button>
      </form>
      <form className="form-search" onSubmit={verifyConsultation}>
        <div className="mt-5">
          <h3 className="fw-bold">Verify consultation certificate</h3>
        </div>
        <input
          className="mt-3 form-control"
          type="search"
          name="search"
          placeholder="search your certificate no.."
          value={certificateNumber}
          onChange={handleCertificateNumberChange}
        />
        <button className="login-link mt-3" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Certificate;
