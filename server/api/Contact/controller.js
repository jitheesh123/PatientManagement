const contact = require('../../model/enquiry');
const {
  SuccessMessageWithOutData,
  PostData,
  ErrorMessage,
  SuccessMessageWithData,
  EditData,
  DeleteData,
  GetData,
} = require('../../helpers/commonFunctions');
const { sendMail } = require('../../modules/NodeMailer');

const createContact = async (req, res) => {
  try {
    const data = await PostData(contact, req.body);
    if (data) {
      // let mailData = {
      //   to: 'jitheesh@spericorn.com',
      //   from: req.body.Email,
      //   cc: 'jitheesh@spericorn.com',
      //   subject: 'Contactmessage',
      //   content: req.body.Message,
      // };
      // await sendMail(mailData, res);
      SuccessMessageWithOutData(res, 'Submit successfully');
    }
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};
const listContact = async (req, res) => {
  try {
    const data = await GetData(contact);
    SuccessMessageWithData(res, data);
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};
const PatchMessage = async (req, res) => {
  try {
    await EditData(contact, req.params.id, { status: 'read' });
    SuccessMessageWithOutData(res, 'Updated successfully');
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};
const DeleteMessage = async (req, res) => {
  try {
    await DeleteData(contact, req.params.id);
    SuccessMessageWithOutData(res, 'Deleted successfully');
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};
module.exports = { createContact, listContact, PatchMessage, DeleteMessage };
