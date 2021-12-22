import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}
const SpeechMe = ({ children }: Props) => {
  return (
    <SpeechMeContainer>
      <div className="speechBox">
        <SpeechText>
          <div className="speechBubble">{children}</div>
        </SpeechText>
        <SpeechTime>21:22</SpeechTime>
      </div>
    </SpeechMeContainer>
  );
};
const SpeechMeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem;
  .speechBox {
    display: flex;
    flex-direction: column;
  }
`;

const SpeechText = styled.div`
  padding: 0.5rem;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  background-color: #9980fa;
  border-radius: 10px;
  width: fit-content;
  height: fit-content;
`;

const SpeechTime = styled.div`
  margin-top: 0.3rem;
  display: flex;
  justify-content: flex-end;
`;

export default SpeechMe;
