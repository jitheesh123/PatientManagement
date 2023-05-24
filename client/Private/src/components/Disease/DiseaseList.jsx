import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { GetDisease, DeleteDiseases } from './action';
import Loader from '../Common/loader';
import { Link } from 'react-router-dom';
import DiseaseView from './DiseaseView';
import { setData } from '../../service';
function DiseaseList() {
  const GetProfile = async () => {
    if (!localStorage.getItem('tokenss')) {
      setcheckToken(false);
      navigate('/');
    } else {
      const { data } = await setData('/auth/login/GetProfile', {
        token: localStorage.getItem('tokenss'),
      });

      if (data.success) {
        if (
          data?.data?.SignUpData?.MedicalId &&
          data.data?.Role === 'Patient'
        ) {
          dispatch({
            type: 'MedicalId_False',
          });
        } else if (data.data?.Role === 'Admin') {
          dispatch({
            type: 'MedicalId_False',
          });
        } else {
          dispatch({
            type: 'MedicalId_True',
          });
        }
      }
    }
  };
  useEffect(() => {
    GetProfile();
  }, []);
  const [modalShow, setModalShow] = useState({
    modalShow: false,
    ViewDetails: '',
  });
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const columns = [
    {
      name: 'DiseaseName',
      selector: (row) => row.DiseaseName,
      sortable: true,
      filter: true,
    },
    {
      name: 'StartedDate',
      selector: (row) => row.StartedDate,
      sortable: true,
      filter: true,
    },
    {
      name: 'Remarks',
      selector: (row) => row.Remarks,
      sortable: true,
      filter: true,
    },

    {
      name: 'View',
      selector: (row) => (
        <button
          className="btn btn-success"
          onClick={() => setModalShow({ modalShow: true, ViewDetails: row })}
        >
          View
        </button>
      ),
      filter: false,
    },
    {
      name: 'Delete',
      selector: (row) => (
        <button
          className="btn btn-danger"
          onClick={() => dispatch(DeleteDiseases(row._id))}
        >
          Delete
        </button>
      ),
      filter: false,
    },
  ];

  useEffect(() => {
    dispatch(GetDisease());
  }, []);

  const { Disease } = useSelector((state) => state.DiseaseReducer);
  const { loader } = useSelector((state) => state.commonReducer);

  const filteredData = Disease.filter((item) => {
    return (
      item.DiseaseName.toLowerCase().includes(searchText.toLowerCase()) ||
      item.StartedDate.toLowerCase().includes(searchText.toLowerCase()) ||
      item.Remarks.toLowerCase() === searchText.toLowerCase()
    );
  });

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', fontWeight: 'bolder' }}>Diseases</h1>
      <DiseaseView
        show={modalShow.modalShow}
        onHide={() => setModalShow({ modalShow: false })}
        viewdetails={modalShow.ViewDetails}
      />
      <Link className="login-link ms-auto" to="/DiseaseAdd">
        Add
      </Link>
      <div className="contact-form mt-5">
        <input
          placeholder="Enter Keyword"
          className="form-control  w-25 mb-5"
          onChange={(e) => setSearchText(e.target.value)}
        ></input>

        {loader ? (
          <Loader />
        ) : (
          <DataTable
            pagination
            columns={columns}
            data={filteredData}
            onSearch={(text) => setSearchText(text)}
          />
        )}
      </div>
    </div>
  );
}

export default DiseaseList;
