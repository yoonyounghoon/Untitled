import styled from 'styled-components';
import { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: 'text' | 'number';
  placeholder?: string;
  behindText?: string;
}

export const Input = ({
  label,
  type,
  placeholder,
  behindText,
  ...props
}: Props) => {
  return (
    <Label>
      {label && <LabelText>{label}</LabelText>}
      <InputText type={type} placeholder={placeholder} {...props} />
      {behindText && <BehindText>{behindText}</BehindText>}
    </Label>
  );
};

const Label = styled.label`
  display: flex;
  min-height: 50px;
  margin: 15px 0;
`;

const InputText = styled.input`
  width: 100%;
  height: 3.375rem;
  padding: 0px 19px;
  background-color: #f6f8fa;
  border: none;
  outline: none;
  ::placeholder {
    color: #8492a6;
  }
`;

const LabelText = styled.span`
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BehindText = styled.div`
  min-width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
