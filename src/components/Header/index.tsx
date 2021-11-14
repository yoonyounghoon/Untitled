import styled from 'styled-components';

function Header() {
  return (
    <header>
      <TopBar>
        <BarItem>로그인</BarItem>
        <BarItem>회원가입</BarItem>
        <BarItem>고객센터</BarItem>
      </TopBar>
      <SearchHeader>
        <img src="" alt="로고" />
        <SearchInput></SearchInput>
        <div>
          <ProfileItem>내정보</ProfileItem>
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

const BarItem = styled.li`
  font-size: 12px;
  height: 32px;
  color: grey;
  padding: 10px 10px 0;
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
<<<<<<< HEAD
`;
=======
`;
>>>>>>> bea60ef45aa4826fa61c3c3dab706224c9e1dd88
