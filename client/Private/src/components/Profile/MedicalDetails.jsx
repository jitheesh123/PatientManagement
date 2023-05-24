import React from 'react';
import { Input, Select, TextArea } from '../Common/Input';
import { handleChange, handleBlur } from '../Common/Validation';

const MedicalDetails = ({
  formState,
  schema,
  setErrors,
  setFormState,
  errors,
}) => {
  return (
    <div>
      <Select
        name="Blood"
        value={formState?.Blood}
        handleChange={(e) => handleChange(schema, setErrors, setFormState, e)}
        handleBlur={(e) => handleBlur(schema, setErrors, e)}
        error={errors?.Blood}
        options={['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']}
      />
      <Input
        name="Height"
        value={formState?.Height}
        handleChange={(e) => handleChange(schema, setErrors, setFormState, e)}
        handleBlur={(e) => handleBlur(schema, setErrors, e)}
        error={errors?.Height}
      />
      <Input
        name="Weight"
        value={formState?.Weight}
        handleChange={(e) => handleChange(schema, setErrors, setFormState, e)}
        handleBlur={(e) => handleBlur(schema, setErrors, e)}
        error={errors?.Weight}
      />
      <Select
        name="Gender"
        value={formState?.Gender}
        handleChange={(e) => handleChange(schema, setErrors, setFormState, e)}
        handleBlur={(e) => handleBlur(schema, setErrors, e)}
        error={errors?.Gender}
        options={['male', 'female', 'other']}
      />
    </div>
  );
};

export default MedicalDetails;
