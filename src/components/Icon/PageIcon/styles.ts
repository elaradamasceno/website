import { styled, css } from "styled-components";

import { ChevronRight } from 'lucide-react';

import { FileIconSizeType, FilesType } from "@/types/files.type";

interface IconsProps {
  $typeFile: FilesType
  $size: FileIconSizeType
}

export const Container = styled.div`
  display: flex;
`;

export const Icons = styled.div<IconsProps>`
  ${({ theme, $typeFile }) => css`
    display: flex;
    
    svg{
      height: ${theme.pxToRem(16)};
      width: ${theme.pxToRem(16)};

      ${$typeFile === 'md' && `
        fill: ${theme.colors.ocean200};
        stroke: ${theme.colors.ocean800};
      `}

      ${$typeFile === 'code' && `
        fill: ${theme.colors.green};
        stroke: ${theme.colors.black};
      `}

      ${$typeFile === 'txt' && `
        stroke: ${theme.colors.yellow800};
      `}
    }
  `}
`;

export const Text = styled.span`
  ${({ theme }) => css`
    margin-top: ${theme.pxToRem(8)};

    display: flex;
    gap: ${theme.pxToRem(2)};

    font-size: ${theme.pxToRem(12)};
    color: ${theme.colors.gray100};
  `}
`;

export const ArrowIcon = styled(ChevronRight)`
  ${({ theme }) => css`
    height: ${theme.pxToRem(16)};
    width: ${theme.pxToRem(16)};
  `}
` ;