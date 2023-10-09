import { styled, css } from "styled-components";

import { FilesType } from "@/types/files.type";

interface WrapperFolderTitleProps {
  $typeFile: FilesType
}

export const Container = styled.div``

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
    cursor: pointer;

    padding: ${theme.pxToRem(2)} ${theme.pxToRem(12)};

    &:hover{ 
      background-color: ${theme.colors.ocean800Opacity};
    }
  `}
`

export const WrapperFolderTitle = styled.div<WrapperFolderTitleProps>`
  ${({theme, $typeFile}) => css`
    display: flex;

    gap: ${theme.pxToRem(4)};

    cursor: pointer;

    p{
      font-size: ${theme.pxToRem(14)};
      color: ${theme.colors.gray400};
      font-weight: 400;
    }

    svg{
      fill: ${theme.colors.ocean300};
      stroke: ${theme.colors.black};
    }
  `}
`

export const WrapperFiles = styled.div`
  ${({theme}) => css`
    padding: ${theme.pxToRem(2)} ${theme.pxToRem(12)};

    &:hover{ 
      background-color: ${theme.colors.ocean800Opacity};
    }
  `}
`