import React from 'react';
import styled from 'styled-components';
import Divide from './Divide';

interface TemplateProps {
  children: React.ReactNode;
  title: string;
}


function Template({ children, title }: TemplateProps) {
  return (
    <TemplateBlock>
      <h2>{title}</h2>
      <Divide />
      {children}
    </TemplateBlock>
  );
}

export default Template;

const TemplateBlock = styled.div`
  width: 50rem;
  margin: auto;
  padding: 4.5rem 5.4375rem;
  text-align: center;

  .title {
    text-align: center;
  }

`;