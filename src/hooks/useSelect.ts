import { useState } from 'react';

const useSelect = (initialValue?: string) => {
  const [selectValue, setSelectValue] = useState(initialValue);

  const setValueOnChange: React.ChangeEventHandler<HTMLSelectElement> = ({
    target,
  }) => {
    const { value } = target;
    setSelectValue(value);
  };

  return [selectValue, setValueOnChange, setSelectValue] as [
    string,
    typeof setValueOnChange,
    typeof setSelectValue,
  ];
};

export default useSelect;
