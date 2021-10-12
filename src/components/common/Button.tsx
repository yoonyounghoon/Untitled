import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../styles/palette';

type ButtonProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium';
  inverted?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...rest }: ButtonProps) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;

const handleButtonSize = (size: 'small' | 'medium' | undefined) => {
  switch (size) {
    case 'small':
      return '160px';
    case 'medium':
      return '215px';
    default:
      return '100%';
  }
};

const StyledButton = styled.button<{
  size?: 'small' | 'medium';
  inverted?: boolean;
}>`
  border: 2px solid ${palette.purple};
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  padding: 0.75rem;
  width: ${(props) => handleButtonSize(props.size)};

  ${(props) =>
    props.inverted
      ? css`
          background-color: #ffffff;
          color: ${palette.purple};
        `
      : css`
          background-color: ${palette.purple};
          color: ${palette.white};
        `};
`;
