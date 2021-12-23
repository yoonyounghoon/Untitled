import React from 'react';
import styled from 'styled-components';
import useInput from '../../../hooks/useInput';
import Button from '../../common/Button';

const ChatForm = () => {
  const [content, setContent] = useInput('');

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log(content);
  };
  return (
    <RegisterForm onSubmit={onSubmit}>
      <ChatFormWrapper>
        <RegisterTextArea value={content} onChange={setContent} />
        <Button
          className="register-button"
          size="small"
          type="submit"
          style={{ borderRadius: '10px', marginLeft: '5px' }}
        >
          전송
        </Button>
      </ChatFormWrapper>
    </RegisterForm>
  );
};

const RegisterForm = styled.form`
  position: sticky;
  bottom: 0;
`;

const ChatFormWrapper = styled.div`
  height: 3rem;
  display: flex;
  background-color: white;
`;

const RegisterTextArea = styled.input`
  padding: 1rem;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 10px;

  background-color: #f6f8fa;
  ::placeholder {
    color: #8492a6;
  }
`;

export default ChatForm;
