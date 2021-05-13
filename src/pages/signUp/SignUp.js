import React from 'react';
import { Formik, Form } from 'formik';
import MyTextInput from '../../components/MyTextInput';
import validation from './validation';

const initialValues = {
  login: '',
  password: '',
};

const SignUp = () => {
  return (
    <main>
      <h1>Create your account</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          resetForm();
          alert('Пользователь создан');
          console.log(values);
        }}
      >
        <Form>
          <MyTextInput label="Login" name="login" type="text" />
          <MyTextInput label="Password" name="password" type="text" />

          <div>
            <button type="submit">SignUp</button>
          </div>
        </Form>
      </Formik>
    </main>
  );
};

export default SignUp;

// type = 'password' ??
