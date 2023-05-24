import React from 'react';
import Modal from 'react-bootstrap/Modal';
const ConsultaionView = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="card">
          <div className="card-content">
            <h2 className="card-title">{props?.viewdetails?.Name}</h2>
            <p className="card-text">
              <strong>Email:</strong> {props?.viewdetails?.Email}
            </p>
            <p className="card-text">
              <strong>Message:</strong> {props?.viewdetails?.Message}
            </p>
            <p className="card-text">
              <strong>Status:</strong> {props?.viewdetails?.status}
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConsultaionView;
