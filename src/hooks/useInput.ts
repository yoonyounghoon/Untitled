import { useState } from 'react';

const useInput = (initialValue: string) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const setValueOnChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    const { value } = target;
    setInputValue(value);
  };

  return [inputValue, setValueOnChange, setInputValue];
};

export default useInput;
