import styled from 'styled-components'

export const HomeContainer = styled.section`
  width: 100%;
  max-width: ${(props) => props.theme['max-width']};
  margin-bottom: 234px;
  a {
    color: ${(props) => props.theme['base-text']};
    text-decoration: none;
  }
`
export const ProfileContainer = styled.section`
  display: flex;
  gap: 32px;
  background: ${(props) => props.theme['base-profile']};
  padding: 32px 40px;
  margin-bottom: 69px;
  border-radius: 10px;

  img {
    max-width: 148px;
    height: auto;
    border-radius: 16px;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > span {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;

      h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 32.2px;
      }

      & > span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: ${(props) => props.theme.blue};
        text-transform: uppercase;
      }
      a {
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.blue};
      }
    }

    p {
      margin-bottom: 24px;
      font-weight: 400;
      font-size: 16px;
      line-height: 25.6px;
    }

    ul {
      display: flex;
      align-items: center;
      gap: 24px;

      li {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 16px;
        line-height: 0;
        svg {
          width: 18px;
          color: ${(props) => props.theme['base-label']};
        }
      }
    }
  }
`
export const IssuesContainer = styled.section`
  width: 100%;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;

    h1 {
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: 700;
      font-size: 18px;
      line-height: 28.8px;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-weight: 400;
      font-size: 14px;
      line-height: 22.4px;
    }
  }
  input {
    width: 100%;
    padding: 12px 16px;
    margin-bottom: 48px;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
    font-size: 16px;
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 10px;
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const IssuesWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
`
export const IssueContainer = styled.div`
  width: 100%;
  padding: 32px;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h1 {
      font-weight: 700;
      font-size: 20px;
      line-height: 32px;
    }
  }

  p {
    max-width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
