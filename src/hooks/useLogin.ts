import React, { useState } from 'react';

function useLogin() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log(form.email, form.password);
  };

  return { onChange, onSubmit };
}

export default useLogin;
