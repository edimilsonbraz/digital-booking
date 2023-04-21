import styled from 'styled-components'
import bg_search from '../../assets/bg-search-box.jpg'

export const ContainerBuscador = styled.section`
  background: url(${bg_search}) no-repeat center center;
  background-size: cover;
  opacity: 0.8;
  padding: 6rem;
  text-align: center;

  h1 {
    color: ${(props) => props.theme.colors.white};
    margin-bottom: 1.5rem;
  }
`;
