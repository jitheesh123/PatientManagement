import { setData } from '../../service';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { CertificateCreation, getConsultResult } from './action';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import Web3 from 'web3';
import IssueConsultation from '../blockChain/IssueConsultation';
import Loader from '../Common/loader';
const Consultaion = () => {
  const dispatch = useDispatch();
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
  const { listConsult, eachUser } = useSelector(
    (state) => state.hospitalReducer
  );
  const [filteredConsult, setFilteredConsult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  useEffect(() => {
    dispatch(getConsultResult());
  }, []);

  useEffect(() => {
    setFilteredConsult(listConsult);
  }, [listConsult]);

  const handleCertificateIssue = async (item) => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const address = accounts[0];
      console.log(eachUser);
      const decodedData = await IssueConsultation({
        web3,
        address,
        values: {
          patientName: eachUser.Name,
          patientUUID: eachUser.AadharNo,
          patientRegId: eachUser.LoginId,
          doctorName: item.doctorId.doctorName,
          consultationTime: new Date(
            `${item.date.slice(0, 10)} ${
              item.date.slice(0, 2) + ':' + item.date.slice(3, 5) + ':00'
            }`
          ).getTime(),
          departmentName: item.departmentId.departmentName,
          hospitalName: item.hospitalId.hospitalName,
          issuerName: item.hospitalId.hospitalName,
          issuerId: item.hospitalId._id.slice(0, 32),
          issuedDateTime: new Date().getTime(),
        },
      });
      dispatch(CertificateCreation(decodedData));
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value.toLowerCase());
    applyFilters(e.target.value.toLowerCase(), dateFilter);
  };

  const handleDateFilter = (e) => {
    const selectedDate = e.target.value;
    setDateFilter(selectedDate);
    applyFilters(searchValue, selectedDate);
  };

  const applyFilters = (searchText, selectedDate) => {
    const filteredData = listConsult.filter((row) => {
      const rowDate = new Date(row.date);
      const rowDateOnly = `${rowDate.getDate()}/${
        rowDate.getMonth() + 1
      }/${rowDate.getFullYear()}`;

      const searchTextMatch =
        row.hospitalId?.hospitalName.toLowerCase().includes(searchText) ||
        row.departmentId?.departmentName.toLowerCase().includes(searchText) ||
        row.doctorId?.doctorName.toLowerCase().includes(searchText) ||
        row.status.toLowerCase().includes(searchText);

      const selectedDateOnly = new Date(selectedDate);
      const formattedSelectedDate = `${selectedDateOnly.getDate()}/${
        selectedDateOnly.getMonth() + 1
      }/${selectedDateOnly.getFullYear()}`;

      const dateMatch =
        selectedDate === '' || rowDateOnly === formattedSelectedDate;

      return searchTextMatch && dateMatch;
    });

    setFilteredConsult(filteredData);
  };

  const columns = [
    {
      name: 'Hospital',
      selector: (row) => row.hospitalId?.hospitalName,
      sortable: true,
    },
    {
      name: 'Department',
      selector: (row) => row.departmentId?.departmentName,
      sortable: true,
    },
    {
      name: 'Doctor',
      selector: (row) => row.doctorId?.doctorName,
      sortable: true,
    },
    {
      name: 'Date',
      selector: (row) => {
        const date = new Date(row.date);
        const dateOnly = date.toLocaleDateString();
        return dateOnly;
      },
      sortable: true,
    },
    {
      name: 'Time',
      selector: (row) => row.time,
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: 'Action',
      selector: (row) => {
        return localStorage.getItem('role') === 'Admin' ? (
          <button
            className="btn btn-success btn-sm"
            onClick={() => handleCertificateIssue(row)}
          >
            Issue Certificate
          </button>
        ) : null;
      },
    },
  ];
  const { loader } = useSelector((state) => state.commonReducer);
  return (
    <div>
      <div className="container ">
        {localStorage.getItem('role') === 'Admin' ? null : (
          <Link className="login-link mb-4" to="/ConsultaionAdd">
            Add
          </Link>
        )}
        <div className="contact-form" style={{ padding: '6%' }}>
          <h3 className="mb-5 text-center">Consultation List</h3>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Search"
              className="form-control"
              value={searchValue}
              onChange={handleSearch}
            />
          </div>
          <div className="mb-3">
            <input
              type="date"
              className="form-control"
              value={dateFilter}
              onChange={handleDateFilter}
            />
          </div>
          {loader ? (
            <Loader />
          ) : (
            <DataTable
              columns={columns}
              data={filteredConsult}
              pagination
              paginationPerPage={10}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Consultaion;
