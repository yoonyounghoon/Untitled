import styled from 'styled-components';
import palette from '../../styles/palette';
import Button from '../common/Button';

const ProductRegister = () => {
  return (
    <RegisterPage>
      <div>
        <Button className="register-button" inverted>
          상품 등록
        </Button>
      </div>
    </RegisterPage>
  );
};

const RegisterPage = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1020px;
`;

export default ProductRegister;
