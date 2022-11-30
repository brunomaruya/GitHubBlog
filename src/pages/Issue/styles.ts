import styled from 'styled-components'

export const IssuePageContainer = styled.section`
  width: 100%;
  max-width: ${(props) => props.theme['max-width']};
`
export const IssueHeaderContainer = styled.header`
  width: 100%;
  padding: 32px;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    span {
      color: ${(props) => props.theme.blue};
      font-weight: 700;
      font-size: 12px;
      line-height: 19px;
    }
  }
  h1 {
    margin-bottom: 8px;
    color: ${(props) => props.theme['base-title']};
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 32px;
    li {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${(props) => props.theme['base-span']};
      font-weight: 400;
      font-size: 16px;
    }
  }
`
export const IssueBodyContainer = styled.main``
