import { Braces, ChevronRight, FileDown, Info } from 'lucide-react';


import { FileIconSizeType, FilesType } from "@/types/files.type";

import * as S from './styles';
import { GeneralText } from '@/enum/general.enum';

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
      case 'json':
        return <Braces />
      case 'markdown':
        return <FileDown />
      case 'tsx':
        return <Info />
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