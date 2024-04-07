'use client'
import { useMemo } from 'react';
import { DownloadCloud } from 'lucide-react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { FileNumbers } from '@/components/core';
import { ResumeDownload } from '@/types/types-languages.type';

import * as S from './styles';

interface DandleDowloadProps {
  downloadLink: string,
  downloadName: string
}

export default function Curriculum() {
  const handleDowload = async ({downloadLink, downloadName}: DandleDowloadProps) => {
    try {
      const response = await fetch(downloadLink);

      if(!response.ok)
        throw new Error('Falha ao baixar o arquivo');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', downloadName);
      document.body.appendChild(link);
      link.click();

    } catch(error){
      console.error('Error ao baixar o arquivo: ', error)
    }
  }

  const handleGetAllResume = useMemo(() => {
    return Object.values(ResumeDownload).map(resume => (
      {
        title: resume.title,
        link: resume.link,
        name: resume.name
      }
    ))
  }, [])

  return (
    <S.Container>
      {handleGetAllResume.map(resume => (
        <div key={resume.title}>        
          <FileNumbers>
            <S.Content>
              <Typography variant='h3'># Download {resume.title}</Typography>  
            </S.Content>
          </FileNumbers>

          <FileNumbers>
            <S.WrapperButton>
              <Stack spacing={2} direction="row">
                <S.DownloadButton onClick={() => handleDowload({downloadLink: resume.link, downloadName: resume.name })}>
                  <DownloadCloud size={20} />
                </S.DownloadButton>
              </Stack>
            </S.WrapperButton>
          </FileNumbers>
        </div>
      ))}   
    </S.Container>
  )
}