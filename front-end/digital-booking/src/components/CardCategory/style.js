import styled from "styled-components";

export const CardsCategory = styled.div` 
  width: 100%;
  display: flex;
  gap: 1rem;
  margin: 0 auto;
  z-index: 0;


   /* REPONSIVIDADE DESKTOP */
   @media screen and (max-width: 1080px) {
    /* width: 90%; */
    height: auto;

   }

  /* REPONSIVIDADE TABLET */
  /* @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
  } */
   
`;

export const ContainerCards = styled.div` 
  display: flex;
  gap: 1rem;
  flex: 1;  

  /* REPONSIVIDADE DESKTOP */
  @media screen and (max-width: 1080px) {
    flex-wrap: wrap;

  }
  

  /* REPONSIVIDADE TABLET */
  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
  }
`;

export const Card = styled.div` 
  height: 220px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #00000059;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition-duration: .4s;
  }

   /* REPONSIVIDADE DESKTOP */
  @media screen and (max-width: 1080px) {
    flex: 0 0 48%;
    margin: 10px 0;
    text-shadow: 2px 2px 6px #00000021;
  }

  /* REPONSIVIDADE TABLET */
  @media screen and (max-width: 768px) {
    flex: 1;
    margin: 5px;
  }


`;

export const CardImage = styled.img` 
  width: 100%;
  height: 150px;
  border-radius: 10px 10px 0 0px;
  object-fit: cover;

  &:hover {
    filter: contrast(120%);
  }

  /* REPONSIVIDADE DESKTOP */
  @media screen and (max-width: 1080px) {
    width: 100%;
    height: 220px;
    border-radius: 10px;    
  }

  /* REPONSIVIDADE TABLET */
  @media screen and (max-width: 768px) {
    /* background-size: cover; */
    height: 100%;
    
  }
`;

export const CardText = styled.div` 
  padding: 10px;

  h1 {
    font-size: 1.25rem;
  }

  span {
    font-size: .8rem;
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 1080px) {
    width: 100%;
    background-color: #00000085;
    border-radius: 0 0 10px 10px;
    position: relative;
    bottom: 74px;
    z-index: 0;

    h1 {
      font-size: 1.7rem;
      color: white;
    }

    span {
      font-size: 1rem;
      color: white;
    }
  }
`;