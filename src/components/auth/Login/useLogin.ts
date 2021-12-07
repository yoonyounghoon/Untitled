import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import useInput from '../../../hooks/useInput';
import { login } from '../../../modules/Login/reducer';
import { RootState } from '../../../modules/store';

function useLogin() {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { isSuccess } = useSelector((state: RootState) => state.login);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isSuccess) {
      history.push('/');
    }
  }, [isSuccess, history]);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    try {
      dispatch(login({ id, password }));
    } catch (error) {
      console.log(error);
    }
  };

  return { id, password, onChangeId, onChangePassword, onSubmit };
}

export default useLogin;
