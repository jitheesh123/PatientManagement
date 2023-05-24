import React, { useEffect, useState } from 'react';
import { getVaccineTableList, issueVaccinationCertificate } from './action';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import Web3 from 'web3';
import IssueVaccinationCert from '../blockChain/IssueVaccinationCert';
import { Link } from 'react-router-dom';
import { setData } from '../../service';

const VaccinationList = () => {
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
  const { vaccinelist } = useSelector((state) => state.vaccineReducer);
  const { eachUser } = useSelector((state) => state.hospitalReducer);
  const [filteredVaccinations, setFilteredVaccinations] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  useEffect(() => {
    dispatch(getVaccineTableList());
  }, []);

  useEffect(() => {
    setFilteredVaccinations(eachUser);
  }, [eachUser]);

  const handleCertificateIssue = async (item) => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const address = accounts[0];
      const validUser = eachUser?.find((e) => e.loginId === item.loginId);
      const decodedData = await IssueVaccinationCert({
        web3,
        address,
        values: {
          patientName: validUser.name,
          patientUUID: validUser.aadharNo,
          patientRegId: validUser.loginId,
          vaccineName: item.vaccineId?.name,
          vaccineTakenDatetime: new Date(
            `${item.date.slice(0, 10)} ${
              item.date.slice(0, 2) + ':' + item.date.slice(3, 5) + ':00'
            }`
          ).getTime(),
          disease: item.vaccineId.disease,
          antigen: item.vaccineId.antigen,
          issuerName: item.hospitalId.hospitalName,
          issuerId: item.hospitalId._id.slice(0, 32),
          issuedDateTime: new Date().getTime(),
        },
      });
      console.log(decodedData);
      dispatch(issueVaccinationCertificate(decodedData));
    } catch (err) {
      dispatch(setErrorMessage(err.message));
    }
  };

  // Define columns
  const columns = [
    {
      name: 'Hospital',
      selector: (row) => row.hospitalId?.hospitalName,
      sortable: true,
    },
    {
      name: 'Vaccine',
      selector: (row) => row.vaccineId?.name,
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
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: 'Action',
      selector: (row) => {
        return (
          <button
            className="btn btn-outline-success btn-sm"
            onClick={() => handleCertificateIssue(row)}
          >
            Issue Certificate
          </button>
        );
      },
    },
  ];

  const handleSearch = (e) => {
    setSearchValue(e.target.value.toLowerCase());
    applyFilters(e.target.value.toLowerCase(), dateFilter);
  };

  const handleDateFilter = (e) => {
    setDateFilter(e.target.value);
    applyFilters(searchValue, e.target.value);
  };

  const applyFilters = (searchText, dateText) => {
    const filteredData = listVaccinations.filter(
      (row) =>
        row.hospitalId?.hospitalName.toLowerCase().includes(searchText) ||
        row.vaccineId?.name.toLowerCase().includes(searchText) ||
        row.status.toLowerCase().includes(searchText)
    );

    if (dateText) {
      const filteredByDate = filteredData.filter((row) => {
        const rowDate = new Date(row.date);
        const filterDate = new Date(dateText);
        return (
          rowDate.getFullYear() === filterDate.getFullYear() &&
          rowDate.getMonth() === filterDate.getMonth() &&
          rowDate.getDate() === filterDate.getDate()
        );
      });

      setFilteredVaccinations(filteredByDate);
    } else {
      setFilteredVaccinations(filteredData);
    }
  };

  return (
    <div>
      {localStorage.getItem('role') === 'Admin' ? null : (
        <Link className="login-link" to="/VaccinationAdd">
          Add
        </Link>
      )}

      <h1>Vaccination</h1>
      <div className="container contact-form" style={{ padding: '6%' }}>
        <h3 className="mb-5 text-center">Vaccination List</h3>
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
        <DataTable
          columns={columns}
          data={filteredVaccinations}
          pagination
          paginationPerPage={10}
        />
      </div>
    </div>
  );
};

export default VaccinationList;
