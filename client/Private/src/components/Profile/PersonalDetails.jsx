import React from 'react';
import { handleChange, handleBlur } from '../Common/Validation';
import { Input, TextArea } from '../Common/Input';
const PersonalDetails = ({
  formState,
  schema,
  setErrors,
  setFormState,
  errors,
}) => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div className="w-100 ">
          <Input
            name="Name"
            value={formState?.Name}
            handleChange={(e) =>
              handleChange(schema, setErrors, setFormState, e)
            }
            handleBlur={(e) => handleBlur(schema, setErrors, e)}
            error={errors?.Name}
          />
          <Input
            name="Email"
            value={formState?.Email}
            handleChange={(e) =>
              handleChange(schema, setErrors, setFormState, e)
            }
            handleBlur={(e) => handleBlur(schema, setErrors, e)}
            error={errors?.Email}
          />
          <Input
            name="PhoneNumber"
            value={formState?.PhoneNumber}
            handleChange={(e) =>
              handleChange(schema, setErrors, setFormState, e)
            }
            handleBlur={(e) => handleBlur(schema, setErrors, e)}
            error={errors?.PhoneNumber}
          />
          <Input
            name="AadharNo"
            value={formState?.AadharNo}
            handleChange={(e) =>
              handleChange(schema, setErrors, setFormState, e)
            }
            handleBlur={(e) => handleBlur(schema, setErrors, e)}
            error={errors?.AadharNo}
          />
          <Input
            name="Dob"
            value={formState?.Dob}
            handleChange={(e) =>
              handleChange(schema, setErrors, setFormState, e)
            }
            handleBlur={(e) => handleBlur(schema, setErrors, e)}
            error={errors?.Dob}
            type="date"
          />
        </div>
        <div className="w-100 ms-3">
          <TextArea
            name="Address"
            value={formState?.Address}
            handleChange={(e) =>
              handleChange(schema, setErrors, setFormState, e)
            }
            handleBlur={(e) => handleBlur(schema, setErrors, e)}
            error={errors?.Address}
          />
          <Input
            name="Country"
            value={formState?.Country}
            handleChange={(e) =>
              handleChange(schema, setErrors, setFormState, e)
            }
            handleBlur={(e) => handleBlur(schema, setErrors, e)}
            error={errors?.Country}
          />
          <Input
            name="State"
            value={formState?.State}
            handleChange={(e) =>
              handleChange(schema, setErrors, setFormState, e)
            }
            handleBlur={(e) => handleBlur(schema, setErrors, e)}
            error={errors?.State}
          />
          <Input
            name="PinCode"
            value={formState?.PinCode}
            handleChange={(e) =>
              handleChange(schema, setErrors, setFormState, e)
            }
            handleBlur={(e) => handleBlur(schema, setErrors, e)}
            error={errors?.PinCode}
          />
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
