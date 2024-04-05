import { FileDown, FileText, Info } from 'lucide-react';

import { FileIconSizeType, FilesType } from "@/types/files.type";
import { GeneralText } from '@/enum/general.enum';

import * as S from './styles';

interface PageIconProps {
  typeFile: FilesType
  sizeFile: FileIconSizeType
  nameFile?: string
}

export const PageIcon = ({ typeFile, sizeFile, nameFile = '' }: PageIconProps) => {

  const handleTypeIcons = () => {
    switch(typeFile){
      case 'md':
        return <Info />
      case 'txt':
        return <FileText />
      case 'code':
        return <FileDown />
      default:
        return <Info />
    }
  }

  const RenderIcon = () => {
    return (
      <S.Icons $typeFile={typeFile} $size={sizeFile}>
        {handleTypeIcons()}
      </S.Icons>
    )
  }

  return (
    <S.Container>
      {nameFile === '' ? 
        RenderIcon() : 
        <S.Text>
          {GeneralText.title}
          <S.ArrowIcon />

          {RenderIcon()}

          {nameFile}
        </S.Text>
      }
    </S.Container>
  )
}