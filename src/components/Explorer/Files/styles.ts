import { styled, css } from "styled-components";

export const Content = styled.div`
  ${({theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.pxToRem(6)};

    cursor: pointer;

    padding: ${theme.pxToRem(2)} ${theme.pxToRem(22)};
  `}
`

export const Typography = styled.p`
  ${({theme}) => css`
    font-size: ${theme.pxToRem(12)};
    color: ${theme.colors.gray100};
  `}
`