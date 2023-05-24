import React from 'react';
import Modal from 'react-bootstrap/Modal';
const DiseaseView = (props) => {
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
            <h2 className="card-title">{props?.viewdetails?.DiseaseName}</h2>

            <p className="card-text">
              <strong>StartedDate:</strong> {props?.viewdetails?.StartedDate}
            </p>
            <p className="card-text">
              <strong>Remarks:</strong> {props?.viewdetails?.Remarks}
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DiseaseView;
