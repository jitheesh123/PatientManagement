import React, { useState } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import Joi from 'joi';
import { Input } from '../Common/Input';
import { useDispatch } from 'react-redux';
import { PostChangePassword } from './action';
const schema = Joi.object({
  CurrentPassword: Joi.string().required().label('CurrentPassword'),
  NewPassword: Joi.string()
    .min(8)
    .max(30)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/
    )
    .required()
    .label('NewPassword'),
  confirmPassword: Joi.string().required().label('confirmPassword'),
});
const ChangePassword = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    CurrentPassword: '',
    NewPassword: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
    validateField(name, value);
  };
  const validateField = (name, value) => {
    const fieldSchema = schema.extract(name);
    const { error } = fieldSchema.validate(value);

    if (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error.message,
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    }
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldSchema = schema.extract(name);
    const { error } = fieldSchema.validate(value);
    if (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error.message,
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error } = schema.validate(formState, { abortEarly: false });
    if (formState.NewPassword !== formState.confirmPassword) {
      setErrors({
        confirmPassword: 'Passwords do not match',
        NewPassword: 'Passwords do not match',
      });
    }
    if (error) {
      const validationErrors = {};
      error.details.forEach((detail) => {
        validationErrors[detail.context.label] = detail.message;
      });
      setErrors(validationErrors);
    } else {
      dispatch(PostChangePassword(formState));
      setFormState({
        CurrentPassword: '',
        NewPassword: '',
        confirmPassword: '',
      });
    }
  };
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div className="contact-form">
            <h2 className="text-center">Change Password</h2>
            <Form onSubmit={handleSubmit}>
              <Input
                name="CurrentPassword"
                value={formState.CurrentPassword}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.CurrentPassword}
              />
              <Input
                name="NewPassword"
                value={formState.NewPassword}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.NewPassword}
              />
              <Input
                name="confirmPassword"
                value={formState.confirmPassword}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.confirmPassword}
              />

              <button className="mt-1 login-button" type="submit">
                Submit
              </button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePassword;
