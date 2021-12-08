import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { authSelector, logout } from '../../modules/auth/reducer';

function useHeader() {
  const { token, user } = useSelector(authSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch(logout());
    history.push('/');
  };

  return { token, user, handleLogout };
}

export default useHeader;
