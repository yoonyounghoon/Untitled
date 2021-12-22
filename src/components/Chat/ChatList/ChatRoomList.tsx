import { useEffect, useState } from 'react';
import styled from 'styled-components';
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
  return (
    <ChatListContainer>
      <ChatListBox>
        {roomList?.map((chatList, index) => (
          <ChatListElement key={index}>
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
  border: 1px solid black;
  overflow-y: scroll;
`;

const ChatListBox = styled.ul`
  padding: 0;
  margin-top: 1rem;
`;

const ChatListElement = styled.li`
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.3);
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
