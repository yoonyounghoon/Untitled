import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { login } from '../modules/Login/reducer';
import { RootState } from '../modules/store';

function useLogin() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [form, setForm] = useState({
    id: '',
    password: '',
  });
  const { isSuccess } = useSelector((state: RootState) => state.login);

  useEffect(() => {
    if (isSuccess) {
      history.push('/');
    }
  }, [isSuccess, history]);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const { id, password } = form;

    try {
      dispatch(login({ id, password }));
    } catch (error) {
      console.log(error);
    }
  };

  return { onChange, onSubmit };
}

export default useLogin;
