import { useState } from 'react';

import Typography from '@mui/material/Typography';

import { ChevronDown, ChevronUp } from 'lucide-react';

import { Folders } from './Folders';

import { GeneralText } from '@/enum/general.enum';

import * as S from './styles';

export default function Explorer() {
  const [showFiles, setShowFiles] = useState<boolean>(true);

  const handleShowFiles = () => {
    setShowFiles(!showFiles);
  }

  return (
    <S.Container>
      <S.Title>
        <Typography variant='h3'>{GeneralText.explorer}</Typography>  
      </S.Title>

      <S.Header onClick={handleShowFiles}>
        {showFiles ? <ChevronDown height={20} width={20} strokeWidth={1.2}/> : <ChevronUp height={20} width={20} strokeWidth={1.2}/>}
        <Typography variant='h6'>{GeneralText.title}</Typography>
      </S.Header>

      { showFiles && (
        <S.Content>
          <Folders />
        </S.Content>
      )}

    </S.Container>
  )
}