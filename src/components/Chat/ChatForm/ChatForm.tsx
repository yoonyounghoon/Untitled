import React from 'react';
import styled from 'styled-components';
import useTextArea from '../../../hooks/useTextArea';
import Button from '../../common/Button';

const ChatForm = () => {
  const onSubmit = () => {};
  const [content, setContent] = useTextArea('');

  return (
    <RegisterForm onSubmit={onSubmit}>
      <RegisterTextArea value={content} onChange={setContent} />
      <Button
        className="register-button"
        size="small"
        type="submit"
        style={{ borderRadius: '10px', marginLeft: '5px' }}
      >
        전송
      </Button>
    </RegisterForm>
  );
};

const RegisterForm = styled.form`
  height: 5rem;
  display: flex;
  margin: 1rem;
`;

const RegisterTextArea = styled.textarea`
  width: 90%;
  padding: 1rem;
  border: none;
  outline: none;
  border-radius: 20px;

  background-color: #f6f8fa;
  ::placeholder {
    color: #8492a6;
  }
`;

export default ChatForm;
