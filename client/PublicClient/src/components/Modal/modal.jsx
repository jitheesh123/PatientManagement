import React from 'react';
import Modal from 'react-modal';

const Modals = ({ open, close }) => {
  return (
    <div>
      <Modal isOpen={open.status} ariaHideApp={false}>
        <p>{open.data.certificatenumber}</p>
        <p>{open.data.consultationTime}</p>
        <p>{open.data.departmentName}</p>
        <p>{open.data.doctorName}</p>
        <p>{open.data.hospitalName}</p>
        <p>{open.data.issuedDateTime}</p>
        <p>{open.data.issuerId}</p>
        <p>{open.data.issuerName}</p>
        <p>{open.data.patientName}</p>
        <p>{open.data.patientRegId}</p>
        <p>{open.data.patientUUID}</p>
        <button className="login-button" onClick={close}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Modals;
