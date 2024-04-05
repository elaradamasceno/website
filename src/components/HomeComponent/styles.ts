import { styled, css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;


export const Content = styled.div`
  ${({ theme }) => css`
    
  `}
`