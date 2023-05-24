import React from 'react';

const Input = ({ type, name, value, handleChange, handleBlur, error }) => {
  return (
    <div style={{ height: '85px' }}>
      <label htmlFor="brand">{name}:</label>
      <input
        placeholder={name}
        className="form-control "
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <small style={{ color: 'red' }}>{error}</small>}
    </div>
  );
};
const Select = ({ name, value, handleChange, handleBlur, error, options }) => {
  return (
    <div>
      <label htmlFor="status">Status:</label>
      <select
        className="form-control "
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option value=""></option>
        {options.map((e, index) => (
          <option key={index} value={e}>
            {e}
          </option>
        ))}
      </select>
      {error && <small style={{ color: 'red' }}>{error}</small>}
    </div>
  );
};
const TextArea = ({ type, name, value, handleChange, handleBlur, error }) => {
  return (
    <div style={{ height: '85px' }}>
      <label htmlFor="brand">{name}:</label>
      <textarea
        placeholder={name}
        className="form-control"
        type={type}
        name={name}
        id={name}
        onChange={handleChange}
        onBlur={handleBlur}
        rows="3"
        cols="50"
        value={value}
      ></textarea>
      {error && <small style={{ color: 'red' }}>{error}</small>}
    </div>
  );
};
export { Input, Select, TextArea };
