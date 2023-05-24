import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Joi from 'joi';
import { Input, TextArea } from '../Common/Input';
import { handleChange, handleBlur, handleSubmit } from '../Common/Validation';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { PostSignUp } from './action';

const schema = Joi.object({
  Email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label('Email'),
  Password: Joi.string().required().label('Password'),
  PhoneNumber: Joi.string()
    .pattern(/^\d{1,3}\s?\d{3,14}$/)
    .required(),
  Name: Joi.string().alphanum().min(3).max(30).required(),
});

const SignUp = () => {
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

  return (
    <Container id="contact">
      <div className="contact-form">
        <h1 className="text-center fw-bold">SIGNUP</h1>
        <div className="form-content mt-4">
          <div className="image-container contact-form">
            <img
              src="https://media.istockphoto.com/id/1171808258/vector/group-of-six-happy-friends-holding-big-banner-vith-join-us-title.jpg?s=170667a&w=0&k=20&c=6xAN36rp4rNuRdMT9lOnokP5Eh_wTh-2OiPpGqiIXT8="
              alt="signup-image"
            />
          </div>
          <div className="input-container contact-form">
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
              name="Password"
              value={formState?.Password}
              handleChange={(e) =>
                handleChange(schema, setErrors, setFormState, e)
              }
              handleBlur={(e) => handleBlur(schema, setErrors, e)}
              error={errors?.Password}
            />
            <div className="text-center mt-3">
              Already have an account? <Link to="/Login">Login</Link>
            </div>
            <button
              className="login-button"
              onClick={(e) =>
                handleSubmit(
                  newObj,
                  dispatch,
                  PostSignUp,
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
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
