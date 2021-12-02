import styled from 'styled-components';

export interface Props {
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
      <InputText type={type} placeholder={placeholder} />
      {behindText && <BehindText>{behindText}</BehindText>}
    </Label>
  );
};

const Label = styled.label`
  display: flex;
  min-height: 50px;
  margin: 15px 0;
`;

const InputText = styled.input``;

const LabelText = styled.span`
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BehindText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
