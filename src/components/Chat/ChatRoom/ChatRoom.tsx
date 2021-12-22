import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../modules/auth/reducer';
import SpeechOpponent from '../ChatSpeech/SpeechOpponent';
import SpeechMe from '../ChatSpeech/SpeechMe';
import ChatForm from '../ChatForm/ChatForm';

interface Props {
  children: React.ReactNode;
}

const ChatRoom = () => {
  const chat = [
    {
      user: 'example123',
      time: '12:50',
      message: 'hello😙',
    },
    {
      user: 'john',
      time: '18:30',
      message: '안녕하세요. 채팅 페이지 입니다.',
    },
    {
      user: 'example123',
      time: '12:50',
      message: 'hellooooooo ~_~ !! :_: 🚑',
    },
    {
      user: 'john',
      time: '18:30',
      message: '안녕하세요. 채팅 페이지 입니다. Win Study Cafe Coffee',
    },
    {
      user: 'example123',
      time: '12:50',
      message: 'hellooooooo ~_~ !! :_: 🚑',
    },
    {
      user: 'john',
      time: '18:30',
      message: '안녕하세요. 채팅 페이지 입니다. Win Study Cafe Coffee',
    },
    {
      user: 'example123',
      time: '03:21',
      message:
        '안녕하세요. 채팅 페이지 입니다. 안녕하세요 긴 메세지를 보낼거에요 다음 칸으로 넘어가자 가자 가자 가자 가자~',
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

      <ChatForm />
    </ChatRoomContainer>
  );
};

const ChatRoomContainer = styled.div`
  flex: 5;
  width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChatRoomTitle = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 1rem;
  font-weight: 600;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const ChatContainer = styled.div`
  padding: 2rem;
  background-color: #f4f4fa;
`;

export default ChatRoom;
