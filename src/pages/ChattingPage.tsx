import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import ChatRoomList from '../components/Chat/ChatList/ChatRoomList';
import ChatRoom from '../components/Chat/ChatRoom/ChatRoom';

const ChattingPage = ({ match }: RouteComponentProps) => {
  const page = match.params;
  console.log(page);
  return (
    <ChattingWrapper>
      <ChatRoomList />
      <ChatRoom />
    </ChattingWrapper>
  );
};

const ChattingWrapper = styled.div`
  max-width: 50rem;
  height: 40rem;
  display: flex;
  margin: 0 auto;
  padding: 2rem 0;
`;

export default ChattingPage;
