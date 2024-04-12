
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';

import { LucideIcon } from "lucide-react";
import { ChevronRight, ChevronDown } from 'lucide-react';

import { useFileActions } from '@/context/Files';
import { FileProps, Files } from '../../Files';

import * as S from './styles';
interface ContentFolderProps {
  title: string
  icon: LucideIcon
  file: FileProps
}

export const ContentFolder = ({ title, icon: Icon, file }: ContentFolderProps) => {
  const { isToShowFiles } = useFileActions();
  const [showFiles, setShowFiles] = useState<boolean>(false);

  const handleShowFiles = () => {
    setShowFiles(!showFiles);
  }

  useEffect(() => {
    setShowFiles(isToShowFiles);
  }, [isToShowFiles])

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
        {showFiles && <Files typeFile={file.typeFile} name={title}/>}
      </S.WrapperFiles>
    </S.Container>
  )
}