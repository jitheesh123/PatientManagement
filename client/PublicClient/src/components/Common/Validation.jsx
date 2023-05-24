const validateField = (schema, setErrors, name, value) => {
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
export const handleChange = (schema, setErrors, setFormState, e) => {
  const { name, value } = e.target;
  setFormState((prevState) => ({ ...prevState, [name]: value }));
  validateField(schema, setErrors, name, value);
};
export const handleBlur = (schema, setErrors, e) => {
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

export const handleSubmit = (
  newObj,
  dispatch,
  action,
  formState,
  schema,
  setErrors,
  setFormState,
  e
) => {
  e.preventDefault();
  const { error } = schema.validate(formState, { abortEarly: false });
  if (error) {
    const validationErrors = {};

    error.details.forEach((detail) => {
      validationErrors[detail.context.label] = detail.message;
    });
    setErrors(validationErrors);
  } else {
    dispatch(action(formState));
    setFormState(newObj);
  }
};
