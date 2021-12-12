import styled from 'styled-components';
import palette from '../../styles/palette';

export interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  onDelete?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactText;
}

const Chip = ({ children, onDelete }: Props) => {
  return (
    <Container>
      <Text>{children}</Text>
      {onDelete && <DeleteButton onClick={onDelete}>X</DeleteButton>}
    </Container>
  );
};

const Container = styled.span`
  background-color: ${palette.purple};
  color: ${palette.white};
  padding: 5px 10px;
  border-radius: 24px;
  display: inline-flex;
  align-items: center;
`;

const Text = styled.span`
  display: inline-flex;
  color: ${palette.white};
  align-items: center;
  font-weight: bold;
`;

const DeleteButton = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  color: ${palette.grey};
  margin-left: 5px;
  border: none; 
  cursor: pointer;
`;

export default Chip;
