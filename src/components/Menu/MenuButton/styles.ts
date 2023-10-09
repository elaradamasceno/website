import { styled, css } from "styled-components";

interface ContainerProps {
  $isActive: boolean
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, $isActive }) => css`
    background: transparent;
    border: none;
    padding: ${theme.pxToRem(10)};

    ${$isActive && `
      background-color: ${theme.colors.ocean300Opacity};
      border-left: 2px solid ${theme.colors.ocean200};
      cursor: pointer;

      svg{
        color: ${theme.colors.ocean200} !important;
      }
    `}

    &:hover{ 
      svg{
        color: ${theme.colors.ocean200};
      }
    }
  `}
`