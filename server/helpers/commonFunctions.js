const commonFunctions = {
  SuccessMessageWithData: (res, data, message) => {
    res.json({ success: true, data, message });
  },
  SuccessMessageWithOutData: (res, message) => {
    res.json({ success: true, message });
  },
  ErrorMessage: (res, message) => {
    res.json({ success: false, message });
  },
  GetData: (schema, filters) => schema.find(filters),
  PostData: (model, data) => model.create(data),
  EditData: async (model, id, data) => {
    await model.findByIdAndUpdate({ _id: id }, data);
  },
  DeleteData: async (model, id) => {
    await model.findByIdAndDelete({ _id: id });
  },
};
module.exports = commonFunctions;
