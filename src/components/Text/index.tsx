import { FilesType } from '@/types/files.type';

export type DescriptionType = 'default' | 'refLink' | 'ocean' | 'yellow';

import * as S from './styles';

interface TextProps {
  type: FilesType
  description: string
  descriptionType: DescriptionType
}

function Text({ description, descriptionType, type}: TextProps) {
  return (
    <S.Content $type={type} $descriptionType={descriptionType}>
      { description }
    </S.Content>
  )
}

export { Text }