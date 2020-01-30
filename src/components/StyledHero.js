import styled from 'styled-components';
import defaultImg from '../images/destination-1.jpg';

const styledHero = styled.header`
  min-height: 80vh;
  background: url(${props => (props.image ? props.image : defaultImg)})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default styledHero;
