import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Nunito, sans-serif;
  }
  body{
    color: ${(props) => props.theme['base-text']};
  }
`

export const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme['base-background']};

  img {
    width: 100%;
  }
`
export const RouterProviderContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -4rem;
`
