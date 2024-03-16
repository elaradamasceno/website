import { styled, css } from "styled-components";

import Button, { ButtonProps } from '@mui/material/Button';

export const Container = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    gap: ${theme.pxToRem(8)};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    h3{
      font-size: ${theme.pxToRem(18)};
      color: ${theme.colors.orange};
    }
  `}
`

export const WrapperButton = styled.div`
  ${({theme}) => css`
    margin-left: ${theme.pxToRem(16)};
  `}
`

export const DownloadButton = styled(Button)<ButtonProps>`
  ${({ theme }) => css`
    color: ${theme.colors.ocean300};
    margin-left: 0px !important;
    display: flex;
    gap: ${theme.pxToRem(8)};

    border: 1px solid ${theme.colors.ocean300};

    cursor: pointer;

    svg{
      size: ${theme.pxToRem(8)};
    }

    &:hover{
      border: 1px solid ${theme.colors.ocean200};
      color: ${theme.colors.ocean200};
    }
  `}
`