import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ChatJoinApi } from '../../../api/chat';
const ChatRoomList = () => {
  const chatList = [
    { id: 1, nickname: '바나나' },
    { id: 2, nickname: '오이' },
    { id: 3, nickname: '딸기' },
    { id: 4, nickname: '파인애플' },
    { id: 1, nickname: '바나나' },
    { id: 2, nickname: '오이' },
    { id: 3, nickname: '딸기' },
    { id: 4, nickname: '파인애플' },
    { id: 1, nickname: '바나나' },
    { id: 2, nickname: '오이' },
    { id: 3, nickname: '딸기' },
    { id: 4, nickname: '파인애플' },
  ];

  const [chattings, setChattings] = useState();
  const [roomList, setRoomList] = useState(chatList);

  const handleChatting = (chatList: any) => {
    console.log(chatList);
    const sellerId = 5;
    ChatJoinApi(chatList.id, sellerId);
  };
  return (
    <ChatListContainer>
      <ChatListBox>
        {roomList?.map((chatList, index) => (
          <ChatListElement key={index} onClick={() => handleChatting(chatList)}>
            <img src="./asset/profile.png" alt="profile" />
            <h3>{chatList.nickname}</h3>
          </ChatListElement>
        ))}
      </ChatListBox>
    </ChatListContainer>
  );
};

const ChatListContainer = styled.div`
  flex: 2;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChatListBox = styled.ul`
  padding: 0 0;
  margin: 0;
`;

const ChatListElement = styled.li`
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  cursor: pointer;
  &:hover {
    background-color: #fafafd;
  }
  img {
    width: 30px;
    margin-right: 1rem;
  }
`;

export default ChatRoomList;
