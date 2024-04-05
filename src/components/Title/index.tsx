import { FilesType } from '@/types/files.type';

import * as S from './styles';

interface TitleProps {
  type: FilesType
  description: string
}


function Title({ type, description }: TitleProps) {
  return (
    <S.Content $type={type}>
      { description }
    </S.Content>
  )
}

export { Title }