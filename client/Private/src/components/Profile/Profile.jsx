import styled from 'styled-components';
import Profilecard from './ProfileCard';
import PersonalDetails from './PersonalDetails';
import MedicalDetails from './MedicalDetails';
import Joi from 'joi';
import React, { useEffect, useState } from 'react';
import { handleSubmit } from '../Common/Validation';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetProfile, ProfilePost } from './action';
const schema = Joi.object({
  Name: Joi.string().required().min(2).max(20).messages({
    'string.empty': `Name is  required `,
  }),
  Email: Joi.string()
    .required()
    .email({ tlds: { allow: false } })
    .messages({
      'string.empty': `Email is required `,
    }),
  PhoneNumber: Joi.string()
    .required()
    .min(10)
    .max(10)
    .regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
    .messages({
      'string.empty': `Phone number is required `,
      'string.pattern.base': `Invalid phone number format`,
    }),
  AadharNo: Joi.string()
    .pattern(/^\d{4}\s\d{4}\s\d{4}$/)
    .required()
    .messages({
      'string.empty': 'Aadhaar number is required',
      'string.pattern.base': 'Invalid Aadhaar number format',
    }),
  Dob: Joi.string().required().messages({
    'string.empty': `Date of birth is  required `,
  }),
  Address: Joi.string().required().messages({
    'string.empty': `Address of   required `,
  }),
  Country: Joi.string().required().messages({
    'string.empty': `Country of required `,
  }),
  State: Joi.string().required().messages({
    'string.empty': `State of  required `,
  }),
  PinCode: Joi.string()
    .pattern(/^\d{6}$/)
    .required()
    .messages({
      'string.empty': `Pincode of   required `,
    }),
  Blood: Joi.string().required().min(2).max(20).messages({
    'string.empty': `Blood is  required `,
  }),
  Height: Joi.string().required().messages({
    'string.empty': `Height is required `,
  }),
  Weight: Joi.string().required().messages({
    'string.empty': `Weight is required `,
  }),
  Gender: Joi.string().required().messages({
    'string.empty': 'Gender is required',
  }),
});

const ProfileCardContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px auto;
  border-radius: 5px;
  transition: box-shadow 0.3s;
`;

const ProfileInfo = styled.div`
  text-align: center;
  flex: 1;
  margin-right: 20px;
`;

const UpdateForm = styled.div`
  flex: 1;
  margin-left: 20px;
  margin-top: 20px;
`;

const Profile = ({ role }) => {
  const newObj = {};
  const keys = [];
  schema.$_terms.keys.forEach((key) => {
    keys.push(key.key);
  });
  keys.forEach((key) => {
    newObj[key] = '';
  });
  const [formState, setFormState] = useState(newObj);
  const { Profile } = useSelector((e) => e.ProfileReducer);
  useEffect(() => {
    setFormState({
      Name: Profile?.Name,
      Email: Profile?.LoginId?.Email,
      PhoneNumber: Profile?.PhoneNumber,
      AadharNo: Profile?.AadharNo,
      Dob: Profile?.Dob,
      Address: Profile?.Address,
      Country: Profile?.Country,
      State: Profile?.State,
      PinCode: Profile?.PinCode,
      Blood: Profile?.MedicalId?.Blood,
      Height: Profile?.MedicalId?.Height,
      Weight: Profile?.MedicalId?.Weight,
      Gender: Profile?.MedicalId?.Gender,
    });
  }, [Profile]);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setstate] = useState(false);
  useEffect(() => {
    dispatch(GetProfile());
  }, []);
  return (
    <>
      <h1 className="text-center fw-bold">Profile</h1>
      <ProfileCardContainer className="contact-form container">
        <ProfileInfo className="contact-form">
          <Profilecard />
        </ProfileInfo>
        {role !== 'Admin' ? (
          <UpdateForm className="contact-form">
            {!state ? (
              <PersonalDetails
                formState={formState}
                schema={schema}
                setErrors={setErrors}
                setFormState={setFormState}
                errors={errors}
              />
            ) : (
              <MedicalDetails
                formState={formState}
                schema={schema}
                setErrors={setErrors}
                setFormState={setFormState}
                errors={errors}
              />
            )}
            <div className="d-flex mt-3 ">
              <button
                onClick={() => setstate(!state)}
                className={`login-button w-100 `}
              >
                {!state ? 'Next' : 'Back'}
              </button>
              {state ? (
                <button
                  className="login-button w-100 ms-2  "
                  onClick={(e) =>
                    handleSubmit(
                      newObj,
                      dispatch,
                      ProfilePost,
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
              ) : null}
            </div>
          </UpdateForm>
        ) : null}
      </ProfileCardContainer>
    </>
  );
};

export default Profile;
