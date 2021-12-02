import { useState } from 'react';

const useTextArea = () => {
  const [inputValue, setInputValue] = useState('');

  const setValueOnChange: React.ChangeEventHandler<HTMLTextAreaElement> = ({
    target,
  }) => {
    const { value } = target;
    setInputValue(value);
  };

  return { inputValue, setValueOnChange, setInputValue };
};

export default useTextArea;
