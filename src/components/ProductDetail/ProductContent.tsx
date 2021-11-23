import styled from 'styled-components';
import palette from '../../styles/palette';
import Button from '../common/Button';

const ProductContent = () => {
  return (
    <Wrapper>
      <div>
        <div id="product-info">
          <img
            alt=""
            src="https://image1.coupangcdn.com/image/vendor_inventory/4b13/bee8f5f729c00f7498b26737465aa7522addf5c73c396747a0e546b5e3ff.jpg"
          ></img>
        </div>
        <div id="caution"></div>
        <div id="truth-safety"></div>
      </div>
      <div>
        <ArtistCard>
          <div>
            <img src="" alt="" />
            <span>애프터모멘트</span>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nisi optio blanditiis necessitatibus numquam. Distinctio alias iusto
            maiores facere optio, nam rerum officia cumque, recusandae
            praesentium, ipsam architecto aut? Dignissimos.
          </p>
          <Button className="follow-button" inverted>
            팔로우
          </Button>
        </ArtistCard>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1020px;
  display: flex;
`;

const ArtistCard = styled.div`
  min-width: 300px;
  padding: 20px;
  border: 1px solid ${palette.brightGrey};
  border-radius: 6px;
  margin: 10px;
  .follow-button {
    border: 1px solid ${palette.purple};
  }
`;

export default ProductContent;
