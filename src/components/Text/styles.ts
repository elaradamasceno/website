import { styled, css } from "styled-components";
import { FilesType } from "@/types/files.type";

import { DescriptionType } from ".";

interface ContentProps {
  $type: FilesType,
  $descriptionType: DescriptionType
}

export const Content = styled.p<ContentProps>`
  ${({ theme, $type, $descriptionType }) => css`
    font-weight: 300;
    font-size: ${theme.pxToRem(13)};

    ${$descriptionType === 'default' && `
      color: ${theme.colors.white};
    `}

    ${$descriptionType === 'ocean' && `
      color: ${theme.colors.ocean300};
      font-size: ${theme.pxToRem(14)};
      font-weight: 400;
    `}
  `}
`