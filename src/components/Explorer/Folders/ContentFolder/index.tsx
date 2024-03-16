
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { ChevronRight, ChevronDown } from 'lucide-react';

import { FileProps, Files } from '../../Files';

import { LucideIcon } from "lucide-react"

import * as S from './styles';


interface ContentFolderProps {
  title: string
  icon: LucideIcon
  file: FileProps
}

export const ContentFolder = ({ title, icon: Icon, file }: ContentFolderProps) => {
  const [showFiles, setShowFiles] = useState<boolean>(false)

  const handleShowFiles = () => {
    setShowFiles(!showFiles)
  }

  return (
    <S.Container>
      <S.Content onClick={handleShowFiles}>
        {showFiles ? <ChevronDown height={18} width={18} strokeWidth={1.2}/> : <ChevronRight height={18} width={18} strokeWidth={1.2}/>}
        
        <S.WrapperFolderTitle $typeFile={file.typeFile}>
          <Icon height={20} width={20} strokeWidth={1.2} />
          <Typography variant='body1'>{title}</Typography> 
        </S.WrapperFolderTitle>
      </S.Content>

      <S.WrapperFiles>
        {showFiles && <Files typeFile={file.typeFile} redirect={file.redirect} name={title}/>}
      </S.WrapperFiles>
    </S.Container>
  )
}