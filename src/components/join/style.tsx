import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
  lgDesktop: '1350px',
  mdDesktop: '1150px',
  tablet: '960px',
  smTablet: '740px'
});

export const JoinContainer = styled.section`
  width: 60%;
  height: 1100px;
  border: 1px black solid;
  margin: 50px auto;
  padding: 0px 85px;
  text-align: center;
  align-items: center;
  border-radius: 3px;

  ${customMedia.lessThan('smTablet')`
      width: 90%;
      padding: 10px 10px;
  `}
`;

export const InputForm = styled.form`
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  margin: 0px 30px;

`;

export const MainTitle = styled.h1`
  margin: 35px 0px;
  font-size: 1.4em;

  ${customMedia.lessThan('smTablet')`
      font-size: 1.1em;
  `}
`;

export const InputWapper = styled.div`
  width: 100%;
  margin: 14px 0px;
`;

export const AlertRedLine = styled.div`
  color: red;
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 10px;
  font-size: 0.8em;
`;


export const AlertGreenLine = styled.div`
  color: green;
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 10px;
  font-size: 0.8em;
`;

export const InputTitle = styled.label`
  position: absolute;
  margin-right:20px;
  width: 130px;
  line-height: 40px;
  font-size: 1.1em;

  ${customMedia.lessThan('smTablet')`
      font-size: 0.9em;
  `}
`;

export const HasButtonInput = styled.input`
  position: relative;
  width: 340px;
  height: 40px;
  left: 110px;
  padding: 18px;
  font-size: 1em;
  background-color: #F6F8FA;
  border: 0px;
  &::placeholder{
    color: #8492A6;
    font-size: 14px;
  }
  &:focus{
    outline: none;
  }
  border-radius: 6px;

  ${customMedia.lessThan('smTablet')`
    width: 135px;
    height: 40px;
    &::placeholder{
      color: #8492A6;
      font-size: 12px;
    }
  `}
`;

export const CheckButton = styled.button`
  margin: auto;
  background-color: transparent;
  border: 2px #9980FA solid;
  width: 135px;
  height: 37px;
  color: #9980FA;
  border-radius: 5px;
  margin-left: 15px;
  left: 110px;
  position: relative;
  cursor: pointer;
  font-size: 1em;

  ${customMedia.lessThan('smTablet')`
    width:80px;
    height: 35px;
    font-size: 0.8em;
  `}
`;

export const Input = styled.input`
  position: relative;
  width: 490px;
  height: 40px;
  &:focus {
    outline: none;
  }
  padding: 18px;
  left: 100px;
  font-size: 1em;
  margin: 0px 10px;
  background-color: #F6F8FA;
  border: 0px;
  &::placeholder{
    color: #8492A6;
    font-size: 14px;
  }
  border-radius: 6px;

  ${customMedia.lessThan('smTablet')`
    width: 230px;
    height: 40px;
    &::placeholder{
      color: #8492A6;
      font-size: 12px;
    }
  `}
`;

export const ZoneCodeTitle = styled.label`
  position: absolute;
  margin-right:20px;
  width: 130px;
  line-height: 63px;
  font-size: 1.1em;

  ${customMedia.lessThan('smTablet')`
      font-size: 0.9em;
  `}
`;

export const SearchButton = styled.button`
  margin: auto;
  background-color: transparent;
  border: 2px #9980FA solid;
  color: #9980FA;
  border-radius: 5px;
  margin-left:15px;
  margin-top:15px;
  left: 110px;
  position: relative;
  cursor: pointer;
  font-size: 1em;
  width:135px;
  height:37px;

  ${customMedia.lessThan('smTablet')`
    width: 90px;
    height: 35px;
    font-size: 0.8em;
    &::placeholder{
      color: #8492A6;
      font-size: 12px;
    }
  `}
`;

export const Button = styled.button`
  border:0px;
  font-size: 20px;
  background-color: #9980FA;
  border-radius: 5px;
  color: #fff;
  margin: 30px  auto;
  width: 135px;
  height:40px;
  cursor: pointer;

  ${customMedia.lessThan('smTablet')`
    width: 90px;
    height: 35px;
    font-size: 0.8em;
  `}
`;

 //우편번호 검색 페이지 관련 CSS
export const postCodeStyle = {
  position: 'absolute',
  top: '100%',
  left: 'width/2',
  width: '500px',
  height: '480px',
  display: 'block',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  border: '1px black solid',
  zIndex: 500,
};
