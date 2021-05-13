import React from 'react';
import { Formik, Form } from 'formik';
import MyTextInput from '../../components/MyTextInput';
import validation from './validation';
import { Link } from 'react-router-dom';

const initialValues = {
  login: '',
  password: '',
};

const SignIn = () => {
  return (
    <main>
      <h1>Sign in to site</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          resetForm();
          console.log(values);
        }}
      >
        <Form>
          <MyTextInput label="Login" name="login" type="text" />
          <MyTextInput label="Password" name="password" type="text" />

          <div>
            <button type="submit">SignIn</button>
          </div>
        </Form>
      </Formik>
      <Link to="/sign-up">Нет аккаунта? Создать</Link>
    </main>
  );
};

export default SignIn;

// type = 'password' ??
