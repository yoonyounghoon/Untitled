import styled from 'styled-components';

type imgBoxProps = {
  width: string;
  height: string;
  text: string;
};

function ImgBox({ width, height, text }: imgBoxProps) {
  return (
    <Wrapper>
      <ImgItem width={width} height={height} src="https://picsum.photos/400" />
      <Hashtag>#{text}</Hashtag>
    </Wrapper>
  );
}

export default ImgBox;

const Wrapper = styled.div`
  position: relative;
  margin: 0 15px 35px 15px;
`;

const ImgItem = styled.img`
  display: block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: cover;
  filter: brightness(50%);

  :hover {
    filter: brightness(95%);
  }
`;

const Hashtag = styled.strong`
  position: absolute;
  white-space: nowrap;
  font-size: 26px;
  font-weight: 400;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* transform: translateX(40%); */
`;
