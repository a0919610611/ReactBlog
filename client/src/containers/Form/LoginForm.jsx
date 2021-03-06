import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
const renderField = ({ input, label, type, textarea, meta: { touched, error } }) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    {
      textarea ?
        (
          <FormControl {...input} componentClass="textarea" type={type}
                       placeholder={label}/>
        ) :
        (
          <FormControl {...input} type={type} placeholder={label}/>
        )
    }

    {touched && ((error && <span>{error}</span>))}
  </FormGroup>
);
class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="username"
            component={renderField}
            type="text"
            label="Username"
          />
        </div>
        <div>
          <Field
            name="password"
            component={renderField}
            type="password"
            label="Password"
          />
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    );
  }
}
const validate = (values) => {
  const errors = {};
  if (!values.username) errors.username = 'Required';
  if (!values.password) errors.password = 'Required';
  return errors;
};
export default reduxForm({
  form: 'Login',
  validate,
})(LoginForm);

