import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Joi from 'joi';
import { Input, TextArea } from '../../Common/Input';
import {
  handleChange,
  handleBlur,
  handleSubmit,
} from '../../Common/Validation';
import { useDispatch } from 'react-redux';
import { PostContact } from './action';
const schema = Joi.object({
  Name: Joi.string().min(2).max(50).required().label('Name'),

  Email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label('Email'),
  Message: Joi.string().min(2).max(100).required().label('Message'),
});

const ContactForm = () => {
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
  return (
    <Container id="contact" className="p-5">
      <div className="contact-form ">
        <h1 className="text-center fw-bold">Contact</h1>
        <div
          className="d-flex justify-content-between"
          style={{ flexWrap: 'wrap' }}
        >
          <div style={{ width: '49%' }} className="contact-form ">
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
            <TextArea
              name="Message"
              value={formState?.Message}
              handleChange={(e) =>
                handleChange(schema, setErrors, setFormState, e)
              }
              handleBlur={(e) => handleBlur(schema, setErrors, e)}
              error={errors?.Message}
            />
          </div>
          <div style={{ width: '49%' }} className="contact-form ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d76.8811648!3d8.5582397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
              width="100%"
              height="300px"
              style={{ border: '0' }}
            ></iframe>
          </div>
        </div>
        <button
          className="login-button"
          onClick={(e) =>
            handleSubmit(
              newObj,
              dispatch,
              PostContact,
              formState,
              schema,
              setErrors,
              setFormState,
              e
            )
          }
        >
          Submit
        </button>
      </div>
    </Container>
  );
};

export default ContactForm;
