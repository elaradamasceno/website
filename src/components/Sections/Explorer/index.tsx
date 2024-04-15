import { useState } from 'react';

import Typography from '@mui/material/Typography';

import { ChevronDown, ChevronUp } from 'lucide-react';

import { Folders } from './Folders';
import { GeneralText } from '@/enum/general.enum';
import useCustomTranslations from '@/hooks/useCustomTranslations';

import * as S from './styles';

export default function Explorer() {
  const t = useCustomTranslations('Sections');
  const [showFiles, setShowFiles] = useState<boolean>(true);

  const handleShowFiles = () => {
    setShowFiles(!showFiles);
  }

  return (
    <S.Container>
      <S.Title>
        <Typography variant='h6'>{t('explorer')}</Typography>  
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