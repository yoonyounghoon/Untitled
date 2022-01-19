import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../modules/auth/reducer';
import SpeechOpponent from '../ChatSpeech/SpeechOpponent';
import SpeechMe from '../ChatSpeech/SpeechMe';
import ChatForm from '../ChatForm/ChatForm';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

interface Props {
  children: React.ReactNode;
}

const ChatRoom = () => {
  // const socket = new SockJS('https://gradu-test.herokuapp.com/websocket');
  // const ws = Stomp.over(socket);
  // console.log('ws',ws);
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
  const [participants, setParticipants] = useState({});
  const { user } = useSelector(authSelector);
  const userId = user.userid;
  console.log('user=', user);
  const stompClient = useRef(null);
  const isConnected = useRef(false);
  const userSubscription = useRef(null);
  const chatSubscription = useRef(null);

  const waitForConnectionReady = (callback: any) => {
    setTimeout(() => {
      if (
        stompClient.current.ws &&
        stompClient.current.ws.readyState === WebSocket.OPEN
      ) {
        callback();
      } else {
        waitForConnectionReady(callback);
      }
    }, 1);
  };

  useEffect(() => {
     connect();
    // const socket = new SockJS('https://gradu-test.herokuapp.com/websocket');
    // stompClient.current = Stomp.over(socket);
    // stompClient.current.connect({}, function(){
    //   console.log('hi');
    //   stompClient.current.subscribe('/sub/chat/room/15', function (e:any) {
    //     console.log('ss',JSON.parse(e.body)); 
    // });
    // })
    // return () => {
    //   if (isConnected.current) {
    //     stompClient.current.disconnect(() => {
    //       // if (userSubscription.current) {
    //       //   userSubscription.current.unsubscribe();
    //       // }
    //       // if (chatSubscription.current) {
    //       //   chatSubscription.current.unsubscribe();
    //       // }
    //       isConnected.current = false;
    //     });
    //   }
    // };
  }, []);


  const connect = () => {
    // 웹 소켓 연결, subscribe로 방 참가자 불러옴
    console.log('websocket 연결');
    const socket = new SockJS('https://gradu-test.herokuapp.com/websocket'); 
    console.log('socket = ', socket);
    stompClient.current = Stomp.over(socket);
    console.log('stompClient.current = ', stompClient.current);
    let header = {Authorization: sessionStorage.getItem('accessToken')};
    console.log('header = ',header);

    // connection이 맺어지면 실행된다.
    stompClient.current.connect(header, function(){
      console.log('소켓 연결 성공');
      stompClient.current.subscribe('/sub/chat/room/15', function (e:any) {
        console.log('ss',JSON.parse(e.body)); 
    },  );
    })
    // stompClient.current.connect(
    //   {}, 
    //   () => stompClientOnConnect(socket),
    //   (error:any) => {
    //     const errorStrings = error.headers.message.split(':');
    //     const errorMessage = errorStrings[errorStrings.length - 1].trim();
    //     alert(errorMessage);
    //   } 
    // );
  };

  const stompClientOnConnect = (socket: any) => {
    console.log('stompClientOnConnect ...');
    isConnected.current = true;
    const socketURL = socket._transport.url;
    console.log('socketURL = ', socketURL);
    userSubscription.current = stompClient.current.subscribe(
      '/sub/chat/room/5',
      (message: any) => {
        const users = JSON.parse(message.body);
        setParticipants(users);
      },
    );

    chatSubscription.current = stompClient.current.subscribe(
      'https://gradu-test.herokuapp.com/sub/chat/room/5',
      (message: any) => {
        const user = JSON.parse(message.body).user;
        const content = JSON.parse(message.body).content;
        const type = JSON.parse(message.body).type;
      },
    );
  };

  const sendMessage = (content: any) => {
    waitForConnectionReady(() => {
      stompClient.current.send(
        'https://gradu-test.herokuapp.com/chat/send',
        {},
        JSON.stringify({ userId, content  }),
      );
    });
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    //sendMessage();
  };
  return (
    <ChatRoomContainer onSubmit={onSubmit}>
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
const ChatRoomContainer = styled.form`
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
