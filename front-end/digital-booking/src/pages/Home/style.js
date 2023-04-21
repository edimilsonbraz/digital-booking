import styled from 'styled-components'
import bg_search from '../../assets/bg-search-box.jpg'

export const ContainerBuscador = styled.section`
  background: url(${bg_search}) no-repeat center center;
  background-size: cover;
  opacity: 0.8;
  padding: 6rem 4rem;
  text-align: center;

  h1 {
    color: ${(props) => props.theme.colors.white};
    margin-bottom: 1.5rem;
  }

  /* REPONSIVIDADE TABLET */
  @media screen and (max-width: 1023px) {
    h1 {
      font-size: 1.75rem;
    }
  }

  /* RESPONSIVIDADE MOBILE */
  @media screen and (max-width:768px) {
    padding: 4rem 2rem;
  }
`;

export const ContainerCategory = styled.section` 
  
  h2 {
    margin: 2rem 0;
  }

  /* REPONSIVIDADE DESKTOP */
  @media screen and (max-width: 1400px){
    padding: 0 2rem;
  }

  /* RESPONSIVIDADE MOBILE */
  @media screen and (max-width:768px) {  
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const ContainerRecomendacao = styled.section` 
  margin-top: 4rem;
  margin-bottom: 6rem;

  /* REPONSIVIDADE DESKTOP */
  @media screen and (max-width: 1400px){
    padding: 0 2rem;
  }

  /* RESPONSIVIDADE MOBILE */
  @media screen and (max-width:768px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const ContentRecomendacao = styled.div` 

  h2 {
    padding-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const ContainerCard = styled.div` 
  display: flex;
  flex-wrap: wrap;
`;

