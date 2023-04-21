import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  border: 2px solid ${(props) => props.theme.colors.primary};

  /* REPONSIVIDADE TABLET */
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`

export const Inputs = styled.div`
  position: relative;
  display: flex;
  flex: 1;

  svg {
    color: #7F7F7F;
  }

  .inputDatePicker {
    width: 100%;
    height: 3rem;
    font-size: 0.875rem;
    padding-left: 2.5rem;
    border: none;

    &:focus {
      outline: none;
    }
  }

  /* REPONSIVIDADE TABLET */
  @media screen and (max-width: 850px) {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`

export const Select = styled.select`
  position: relative;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  line-height: 1;
  width: 100%;
  background: white;
  height: 3.1rem;
  font-size: 1rem;
  padding-left: 2.5rem;
  border-radius: none;

  &:focus {
    outline: 0;
  }
`

export const Options = styled.option`
  background: white;
  position: absolute;
`

export const Label = styled.label`
  position: absolute;
  font-size: 1.5rem;
  top: 26px;
  left: 12px;
`

export const Button = styled.button`
  width: 20%;
  height: 3.1rem;
  border: 1px solid transparent;

  font-size: 1rem;
  font-weight: bold;
  color: var(--white);
  background-color: var(--primary);
  transition: all ease-in-out 0.2s;

  &:hover {
    color: var(--primary);
    border: 1px solid var(--primary);
    background-color: var(--white);
  }

  /* REPONSIVIDADE TABLET */
  @media screen and (max-width: 850px) {
    width: 100%;
  }
`;
