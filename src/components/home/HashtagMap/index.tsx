import React from 'react';
import styled from 'styled-components';
import palette from '../../../styles/palette';
import ImgBox from './ImgBox';

function HashtagMap() {
  return (
    <Container>
      <Title>해시태그</Title>
      <ImgMapContainer>
        <div>
          <ImgDivisionRow>
            <ImgBox width="195" height="195" text="조명" />
            <ImgBox width="195" height="195" text="악세서리" />
          </ImgDivisionRow>
          <ImgBox width="420" height="350" text="의류" />
        </div>
        <ImgDivisionCol>
          <ImgBox width="470" height="340" text="공예품" />
          <ImgBox width="470" height="210" text="식품" />
        </ImgDivisionCol>
      </ImgMapContainer>
    </Container>
  );
}

export default HashtagMap;

const Container = styled.section`
  width: 950px;
  margin: auto;
`;

const Title = styled.div`
  font-size: 28px;
  border-bottom: 0.5px solid ${palette.grey};
  padding-bottom: 12px;
  margin-bottom: 38px;
`;

const ImgMapContainer = styled.div`
  display: flex;
`;

const ImgDivisionRow = styled.div`
  display: flex;
`;

const ImgDivisionCol = styled.div`
  display: flex;
  flex-direction: column;
`;
