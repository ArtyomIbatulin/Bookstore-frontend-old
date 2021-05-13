import * as Yup from 'yup';

const validation = Yup.object({
  login: Yup.string().trim().required().min(2).max(20),
  password: Yup.string().trim().required().min(3),
});

export default validation;
