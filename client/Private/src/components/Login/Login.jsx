import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Joi from 'joi';
import { Input, TextArea } from '../Common/Input';
import { handleChange, handleBlur, handleSubmit } from '../Common/Validation';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { PostLogin } from './action';
const schema = Joi.object({
  Email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label('Email'),
  Password: Joi.string().required().label('Password'),
});

const Login = () => {
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
      <div className="contact-form ">
        <h1 className="text-center fw-bold">LOGIN</h1>
        <div className="form-content mt-4">
          <div className="loginImage contact-form">
            <img
              src="https://img.freepik.com/free-photo/pills-stick-notes_23-2148519809.jpg"
              alt="signup-image"
            />
          </div>
          <div className="input-container contact-form">
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
              name="Password"
              value={formState?.Password}
              handleChange={(e) =>
                handleChange(schema, setErrors, setFormState, e)
              }
              handleBlur={(e) => handleBlur(schema, setErrors, e)}
              error={errors?.Password}
            />
            <div className="text-center mt-3">
              Don't have an account? <Link to="/signup">Signup</Link>
            </div>
            <button
              className="login-button"
              onClick={(e) =>
                handleSubmit(
                  newObj,
                  dispatch,
                  PostLogin,
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

export default Login;
