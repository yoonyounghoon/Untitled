import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import useInput from '../../../hooks/useInput';
import { authSelector, login } from '../../../modules/auth/reducer';

function useLogin() {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { isSuccess } = useSelector(authSelector);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isSuccess) {
      history.push('/');
    }
  }, [isSuccess]);

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
