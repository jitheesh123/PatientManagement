import React, { useEffect } from 'react';
import { setData } from '../../service';
import { useDispatch, useSelector } from 'react-redux';
import { getPatient } from './action';
import Loader from '../Common/loader';
import DataTable from 'react-data-table-component';

const PatientList = () => {
  const dispatch = useDispatch();

  const columns = [
    {
      name: 'Name',
      selector: (row) => row.Name,
      sortable: true,
      filter: true,
    },
    {
      name: 'AadharNo',
      selector: (row) => row.AadharNo,
      sortable: true,
      filter: true,
    },
    {
      name: 'Address',
      selector: (row) => row.Address,
      sortable: true,
      filter: true,
    },
    {
      name: 'Role',
      selector: (row) => row.Role,
      sortable: true,
      filter: true,
    },
    {
      name: 'Country',
      selector: (row) => row.Country,
      sortable: true,
      filter: true,
    },
    {
      name: 'PhoneNumber',
      selector: (row) => row.PhoneNumber,
      sortable: true,
      filter: true,
    },
  ];
  useEffect(() => {
    dispatch(getPatient());
  }, []);
  const { Patient } = useSelector((state) => state.PatientReducer);
  const { loader } = useSelector((state) => state.commonReducer);
  let data = Patient.filter((e) => e.Role !== 'Admin');
  return (
    <div className="container contact-form">
      <h1 style={{ textAlign: 'center', fontWeight: 'bolder' }}>Patient</h1>
      {loader ? (
        <Loader />
      ) : (
        <DataTable
          pagination
          columns={columns}
          data={data}
          onSearch={(text) => setSearchText(text)}
        />
      )}
    </div>
  );
};

export default PatientList;
