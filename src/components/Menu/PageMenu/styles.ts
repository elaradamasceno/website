import { styled, css } from "styled-components";

interface ActiveProps {
  $isActive: boolean
}

export const Container = styled.div`
  ${({ theme }) => css`  
    display: flex;

    /* div:last-child{
      border-right: 1px solid ${theme.colors.black};
    } */
  `}
`;

export const Content = styled.div<ActiveProps>`
  ${({ theme, $isActive }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.pxToRem(6)};

    padding: ${theme.pxToRem(8)};

    border-left: 1px solid ${theme.colors.black};
    border-bottom: 1px solid ${theme.colors.black};

    color: ${theme.colors.gray400};

    ${$isActive && `
      background-color: ${theme.colors.ocean700};
      border-top: 1px solid ${theme.colors.ocean300};
      border-bottom: 1px solid ${theme.colors.ocean700};
      margin-top: -1px;

      color: ${theme.colors.ocean300};
    `}

    ${!$isActive && `
      button {
        background-color: transparent;
        color: transparent;
      }

      &:hover {    
        button {
          display: flex;
          color: ${theme.colors.gray400};
        }
      }
    `}

    &:hover {
      background-color: ${theme.colors.ocean700};
    }
  `}
`

export const WrapperContent = styled.div`
  ${({ theme }) => css`
    cursor: pointer;

    display: flex;
    gap: ${theme.pxToRem(6)};

    justify-content: space-around;
    align-items: center;

    background-color: transparent;

    font-size: ${theme.pxToRem(14)};

    p{ 
      font-size: ${theme.pxToRem(13)};
    }
  `}
`

export const ButtonClose = styled.button<ActiveProps>`
  ${({ theme, $isActive }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    height: ${theme.pxToRem(20)};

    border-radius: ${theme.pxToRem(4)};

    padding: ${theme.pxToRem(2)};

    color: ${theme.colors.gray400};

    ${$isActive && `
      color: ${theme.colors.ocean300};
      background-color: transparent;
    `}

    &:hover {
      background-color: ${theme.colors.grayOpacity};
    }

    svg{
      width: ${theme.pxToRem(14)};
      height: ${theme.pxToRem(14)};
    }
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.ocean700};
    padding-left: ${theme.pxToRem(4)};
    padding-bottom: ${theme.pxToRem(8)};
  `}
`