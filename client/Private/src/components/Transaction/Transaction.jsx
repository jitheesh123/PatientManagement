import React, { useEffect } from 'react';
import { setData } from '../../service';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from './action';
import Loader from '../Common/loader';
import DataTable from 'react-data-table-component';

const Transaction = () => {
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
        if (data?.data?.SignUpData?.MedicalId && data.data?.Role === 'Patient')
          dispatch({
            type: 'MedicalId_False',
          });
        else if (data.data?.Role === 'Admin')
          dispatch({
            type: 'MedicalId_False',
          });
        else
          dispatch({
            type: 'MedicalId_True',
          });
      }
    }
  };
  const columns = [
    {
      name: 'appointmentType',
      selector: (row) => row.appointmentType,
      sortable: true,
      filter: true,
    },
    {
      name: 'amount',
      selector: (row) => row.amount,
      sortable: true,
      filter: true,
    },
    {
      name: 'transactionHash',
      selector: (row) => row.transactionHash,
      sortable: true,
      filter: true,
    },
    {
      name: 'loginId',
      selector: (row) => row.loginId,
      sortable: true,
      filter: true,
    },
  ];
  useEffect(() => {
    GetProfile();
    dispatch(getTransactions());
  }, []);
  const { Transactions } = useSelector((state) => state.TransactionsReducer);
  const { loader } = useSelector((state) => state.commonReducer);
  return (
    <div className="container contact-form">
      <h1 style={{ textAlign: 'center', fontWeight: 'bolder' }}>Transaction</h1>
      {loader ? (
        <Loader />
      ) : (
        <DataTable
          pagination
          columns={columns}
          data={Transactions}
          onSearch={(text) => setSearchText(text)}
        />
      )}
    </div>
  );
};

export default Transaction;
