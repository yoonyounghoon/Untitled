import { useState } from 'react';

const useTextArea = (initialValue: string) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const setValueOnChange: React.ChangeEventHandler<HTMLTextAreaElement> = ({
    target,
  }) => {
    const { value } = target;
    setInputValue(value);
  };

  return [inputValue, setValueOnChange, setInputValue] as [
    string,
    typeof setValueOnChange,
    typeof setInputValue,
  ];
};

export default useTextArea;
