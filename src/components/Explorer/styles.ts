import { styled, css } from "styled-components";

export const Container = styled.div`
  ${({theme}) => css`
    padding: ${theme.pxToRem(12)} 0px;

    svg{
      color: ${theme.colors.gray500};
    }
  `}
`

export const Title = styled.div`
  ${({theme}) => css`
    padding: ${theme.pxToRem(4)} ${theme.pxToRem(8)} ${theme.pxToRem(10)} ${theme.pxToRem(8)};
    
    h3{
      font-size: ${theme.pxToRem(12)};
      text-transform: uppercase;
      color: ${theme.colors.gray500};
      font-weight: 500;
    }
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.pxToRem(6)};

    cursor: pointer;

    h6{
      font-size: ${theme.pxToRem(12)};
      text-transform: uppercase;

      color: ${theme.colors.white};
      font-weight: bold;
    }
  `}  
`

export const Content = styled.div`
  height: 100%;
`