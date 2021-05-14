import React from 'react';
import { Formik, Form } from 'formik';
import MyTextInput from '../../components/MyTextInput';
import validation from './validation';
import { useDispatch, useSelector } from 'react-redux';
import { changeUsers } from '../../store/actions';
import useHttp from '../../hooks/http.hook';

// axios here or http.hook

const initialValues = {
  login: '',
  password: '',
};

const SignUp = () => {
  const { loading, request } = useHttp();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const registerHandler = async (login, password) => {
    try {
      const data = await request(
        'http://localhost:4000/api/v1/sign-up',
        'POST',
        { login, password }
      );
      console.log('Data', data);
    } catch (e) {}
  };

  return (
    <main>
      <h1>Create your account</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          dispatch(changeUsers([...users, values]));
          setSubmitting(false);
          resetForm();
          alert('Пользователь создан');
        }}
      >
        <Form>
          <MyTextInput label="Login" name="login" type="text" />
          <MyTextInput label="Password" name="password" type="text" />

          <div>
            <button type="submit" onClick={registerHandler} disabled={loading}>
              SignUp
            </button>
          </div>
        </Form>
      </Formik>
    </main>
  );
};

export default SignUp;

// type = 'password' ??
