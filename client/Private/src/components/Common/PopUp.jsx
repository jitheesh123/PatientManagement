import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CustomModal = () => {
  const { ModalOpen } = useSelector((state) => state.commonReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <Modal isOpen={ModalOpen} ariaHideApp={false}>
        <h2>Message</h2>
        <p>You have to update your profile to continue</p>
        <Link
          onClick={() =>
            dispatch({
              type: 'MedicalId_False',
            })
          }
          to="/Profile"
        >
          UpdateProfile
        </Link>
      </Modal>
    </div>
  );
};

export default CustomModal;
