import { useState } from 'react';

const useInput = () => {
  const [inputValue, setInputValue] = useState('');

  const setValueOnChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    const { value } = target;
    setInputValue(value);
  };

  return { inputValue, setValueOnChange, setInputValue };
};

export default useInput;
