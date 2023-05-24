import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteMessages, PutMessages, getMessages } from './action';
import Loader from '../Common/loader';
import ContactView from './ContactView';

function Contact() {
  const [modalShow, setModalShow] = useState({
    modalShow: false,
    ViewDetails: '',
  });
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const columns = [
    {
      name: 'Name',
      selector: (row) => row.Name,
      sortable: true,
      filter: true,
    },
    {
      name: 'Message',
      selector: (row) => row.Message,
      sortable: true,
      filter: true,
    },
    {
      name: 'Email',
      selector: (row) => row.Email,
      sortable: true,
      filter: true,
    },
    {
      name: 'Status',
      selector: (row) => (
        <div>
          {row.status === 'unread' ? (
            <button
              className="btn btn-warning text-white"
              onClick={() => dispatch(PutMessages(row._id))}
            >
              Unread
            </button>
          ) : (
            <button className="btn btn-warning text-white">Read</button>
          )}
        </div>
      ),
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
          onClick={() => dispatch(DeleteMessages(row._id))}
        >
          Delete
        </button>
      ),
      filter: false,
    },
  ];

  useEffect(() => {
    dispatch(getMessages());
  }, []);

  const { Messages } = useSelector((state) => state.MessageReducer);
  const { loader } = useSelector((state) => state.commonReducer);

  const filteredData = Messages.filter((item) => {
    return (
      item.Name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.Message.toLowerCase().includes(searchText.toLowerCase()) ||
      item.status.toLowerCase() === searchText.toLowerCase() ||
      item.Email.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', fontWeight: 'bolder' }}>Messages</h1>
      <ContactView
        show={modalShow.modalShow}
        onHide={() => setModalShow({ modalShow: false })}
        viewdetails={modalShow.ViewDetails}
      />
      <div className="contact-form mt-5 ">
        <div className="d-flex mb-5">
          <input
            placeholder="Enter Keyword"
            className="form-control w-25"
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <select
            className="form-control ms-3  w-25"
            onChange={(e) => setSearchText(e.target.value)}
          >
            <option value="">SelectOne</option>
            <option value="read">Read</option>
            <option value="unread">unread</option>
          </select>
        </div>
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

export default Contact;
