import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import palette from '../../styles/palette';
import useHeader from './useHeader';

function Header() {
  const { token, user, handleLogout } = useHeader();

  return (
    <header>
      <TopBar>
        {token ? (
          <>
            <Name>
              <b>{user.username}</b>님
            </Name>
            <Logout onClick={handleLogout}>로그아웃</Logout>
          </>
        ) : (
          <>
            <BarItem to="/login">로그인</BarItem>
            <BarItem to="/join">회원가입</BarItem>
          </>
        )}
      </TopBar>
      <SearchHeader>
        <img src="" alt="로고" />
        <SearchInput></SearchInput>
        <div>
          <BarItem to="/myPage">내정보</BarItem>
          <ProfileItem>장바구니</ProfileItem>
        </div>
      </SearchHeader>
      <GNB>
        <Nav>
          <NavItem>그라듀홈</NavItem>
          <NavItem>베스트</NavItem>
          <NavItem>카테고리</NavItem>
          <NavItem>신상</NavItem>
        </Nav>
      </GNB>
    </header>
  );
}

export default Header;

const TopBar = styled.ul`
  margin: 0 auto;
  width: 1020px;
  display: flex;
  justify-content: flex-end;
  list-style: none;
`;

const itemStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  height: 32px;
  color: grey;
  padding: 10px 10px 0;
`;

const BarItem = styled(NavLink)`
  ${itemStyle}
`;

const Logout = styled.button`
  ${itemStyle}
`;

const Name = styled.span`
  ${itemStyle}
`;

const SearchHeader = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1020px;
  height: 80px;
`;

const SearchInput = styled.input`
  height: 40px;
  width: 550px;
  border: 1px solid darkviolet;
  padding: 10px;
  outline: none;
`;

const ProfileItem = styled.strong`
  padding: 0 10px 0;
  font-size: 12px;
`;

const GNB = styled.div`
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`;

const Nav = styled.ul`
  width: 1020px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  list-style: none;
`;

const NavItem = styled.li`
  font-size: 16px;
  height: 55px;
  padding: 20px 40px 0;
`;
