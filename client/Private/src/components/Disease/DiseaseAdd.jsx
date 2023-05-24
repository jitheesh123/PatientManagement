import { TextArea, Input } from '../Common/Input';
import Joi from 'joi';
import React, { useEffect, useState } from 'react';
import { handleChange, handleBlur, handleSubmit } from '../Common/Validation';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DiseasePost } from './action';
import { setData } from '../../service';

const schema = Joi.object({
  DiseaseName: Joi.string().required().messages({
    'string.empty': `Disease is  required `,
  }),
  StartedDate: Joi.string().required().messages({
    'string.empty': `Date is  required `,
  }),
  Remarks: Joi.string().required().messages({
    'string.empty': `Remarks is  required `,
  }),
});
const DiseaseAdd = () => {
  const newObj = {};
  const keys = [];
  schema.$_terms.keys.forEach((key) => {
    keys.push(key.key);
  });
  keys.forEach((key) => {
    newObj[key] = '';
  });
  const [formState, setFormState] = useState(newObj);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const GetProfile = async () => {
    if (!localStorage.getItem('tokenss')) {
      setcheckToken(false);
      navigate('/');
    } else {
      const { data } = await setData('/auth/login/GetProfile', {
        token: localStorage.getItem('tokenss'),
      });

      if (data.success) {
        if (data.data?.Role === 'Patient' && data?.SignUpData?.MedicalId) {
          dispatch({
            type: 'MedicalId_False',
          });
        }
        if (data.data?.Role === 'Admin') {
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
  return (
    <div className="container contact-form">
      <Input
        name="DiseaseName"
        value={formState?.DiseaseName}
        handleChange={(e) => handleChange(schema, setErrors, setFormState, e)}
        handleBlur={(e) => handleBlur(schema, setErrors, e)}
        error={errors?.DiseaseName}
      />
      <Input
        name="StartedDate"
        value={formState?.StartedDate}
        handleChange={(e) => handleChange(schema, setErrors, setFormState, e)}
        handleBlur={(e) => handleBlur(schema, setErrors, e)}
        error={errors?.StartedDate}
        type="date"
      />
      <TextArea
        name="Remarks"
        value={formState?.Remarks}
        handleChange={(e) => handleChange(schema, setErrors, setFormState, e)}
        handleBlur={(e) => handleBlur(schema, setErrors, e)}
        error={errors?.Remarks}
      />
      <button
        className="login-button"
        onClick={(e) =>
          handleSubmit(
            newObj,
            dispatch,
            DiseasePost,
            formState,
            schema,
            setErrors,
            setFormState,
            e,
            navigate
          )
        }
      >
        Submit
      </button>
      <button
        className="login-link ms-2"
        onClick={() => navigate('/DiseaseList')}
      >
        Cancel
      </button>
    </div>
  );
};

export default DiseaseAdd;
