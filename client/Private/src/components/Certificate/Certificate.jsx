import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCertificate } from './action';
import Loader from '../Common/loader';
import DataTable from 'react-data-table-component';

const CertificateList = () => {
  const dispatch = useDispatch();

  const columns = [
    {
      name: 'certificateNumber',
      selector: (row) => row.certificateNumber,
      sortable: true,
      filter: true,
    },
    {
      name: 'consultationTime',
      selector: (row) => row.consultationTime,
      sortable: true,
      filter: true,
    },
    {
      name: 'departmentName',
      selector: (row) => row.departmentName,
      sortable: true,
      filter: true,
    },
    {
      name: 'doctorName',
      selector: (row) => row.doctorName,
      sortable: true,
      filter: true,
    },
    {
      name: 'hospitalName',
      selector: (row) => row.hospitalName,
      sortable: true,
      filter: true,
    },
    {
      name: 'issuedDateTime',
      selector: (row) => row.issuedDateTime,
      sortable: true,
      filter: true,
    },
    {
      name: 'issuerId',
      selector: (row) => row.issuerId,
      sortable: true,
      filter: true,
    },
    {
      name: 'issuerName',
      selector: (row) => row.issuerName,
      sortable: true,
      filter: true,
    },
    {
      name: 'patientName',
      selector: (row) => row.patientName,
      sortable: true,
      filter: true,
    },
    {
      name: 'patientRegId',
      selector: (row) => row.patientRegId,
      sortable: true,
      filter: true,
    },
    {
      name: 'patientUUID',
      selector: (row) => row.patientUUID,
      sortable: true,
      filter: true,
    },
  ];
  useEffect(() => {
    dispatch(getCertificate());
  }, []);
  const { Certificate } = useSelector((state) => state.CertificateReducer);
  const { loader } = useSelector((state) => state.commonReducer);
  return (
    <div className="container contact-form">
      <h1 style={{ textAlign: 'center', fontWeight: 'bolder' }}>Certificate</h1>
      {loader ? (
        <Loader />
      ) : (
        <DataTable
          pagination
          columns={columns}
          data={Certificate}
          onSearch={(text) => setSearchText(text)}
        />
      )}
    </div>
  );
};

export default CertificateList;
