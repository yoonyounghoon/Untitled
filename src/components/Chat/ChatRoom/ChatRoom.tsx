import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../modules/auth/reducer';
import SpeechOpponent from '../ChatSpeech/SpeechOpponent';
import SpeechMe from '../ChatSpeech/SpeechMe';

interface Props {
  children: React.ReactNode;
}

const ChatRoom = () => {
  const chat = [
    {
      user: 'example123',
      time: '03:21',
      message: 'hi',
    },
    {
      user: 'john',
      time: '05:11',
      message: 'wow',
    },
    {
      user: 'example123',
      time: '12:50',
      message: 'hello',
    },
    {
      user: 'john',
      time: '18:30',
      message: 'nice',
    },
    {
      user: 'example123',
      time: '18:30',
      message: 'nie',
    },
    {
      user: 'example123',
      time: '03:21',
      message: 'hi',
    },
    {
      user: 'john',
      time: '05:11',
      message: 'wow',
    },
    {
      user: 'example123',
      time: '12:50',
      message: 'hello',
    },
    {
      user: 'john',
      time: '18:30',
      message: 'nice',
    },
    {
      user: 'example123',
      time: '03:21',
      message: 'hi',
    },
    {
      user: 'john',
      time: '05:11',
      message: 'wow',
    },
    {
      user: 'example123',
      time: '12:50',
      message: 'hello',
    },
    {
      user: 'john',
      time: '18:30',
      message: 'nice',
    },
    {
      user: 'example123',
      time: '18:30',
      message: 'wow',
    },
  ];
  const { user } = useSelector(authSelector);
  console.log('user=', user);
  return (
    <ChatRoomContainer>
      <ChatRoomTitle>채팅</ChatRoomTitle>
      <ChatContainer>
        {chat.map((chatting, index) => {
          return chatting.user === user.userid ? (
            <SpeechMe key={index}>{chatting.message}</SpeechMe>
          ) : (
            <SpeechOpponent key={index}>{chatting.message}</SpeechOpponent>
          );
        })}
      </ChatContainer>
    </ChatRoomContainer>
  );
};

const ChatRoomContainer = styled.div`
  flex: 5;
  width: 100%;
  border: 1px solid grey;
  overflow-y: auto;
`;

const ChatRoomTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-weight: 600;
  border-bottom: 1px solid black;
`;

const ChatContainer = styled.div`
  padding: 2rem;
`;

export default ChatRoom;
