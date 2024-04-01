import { styled, css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    margin: ${theme.pxToRem(10)} 0px ${theme.pxToRem(10)};
  `}
`;