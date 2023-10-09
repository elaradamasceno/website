'use client'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { DownloadCloud } from 'lucide-react';

import { FileNumbers } from '@/components/FileNumbers';
import * as S from './styles';

export default function Curriculum() {
  return (
    <>    
      <FileNumbers>
        <S.Content>
          <Typography variant='h3'># Download PT-BR</Typography>  
        </S.Content>
      </FileNumbers>

      <FileNumbers>
        <S.WrapperButton>
          <Stack spacing={2} direction="row">
            <S.DownloadButton>
              <DownloadCloud size={20} />
            </S.DownloadButton>
          </Stack>
        </S.WrapperButton>
      </FileNumbers>

      <FileNumbers />

      <FileNumbers>
        <S.Content>
          <Typography variant='h3'># Download PT-BR</Typography>  
        </S.Content>
      </FileNumbers>
    </>
  )
}