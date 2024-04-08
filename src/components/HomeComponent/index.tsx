'use client'
import { useEffect } from 'react';
import { ArrowBigUp, Code, Command } from 'lucide-react';

import { EDIcon, Text } from '@/components/core';
import { useFileActions } from '@/context/Files';
import useCustomTranslations from '@/hooks/useCustomTranslations';

import * as S from './styles';

/**
 * 
 * ver arquivos --> explorer
 * extensões --> minhas extensões (criar)
 * meus temas --> icone de tela (criar uma pagina para exibir os temas)
 * git --> 
 */

export default function HomeComponent() {
  const t = useCustomTranslations('Home');
  const { isToShowFiles, showAllFiles } = useFileActions();

  const handleCommandsToOpenFile = (event: KeyboardEvent) => {
    if (event.shiftKey && event.metaKey && event.key === 'p') {
      showAllFiles({ show: true });
      event.preventDefault();
    }
  }

  const handleCommandsToOpenExtensions = (event: KeyboardEvent) => {
    if (event.shiftKey && event.metaKey && event.key === 'e') {
      console.log('Teclas Command + . pressionadas');
      alert('Teclas Command + . pressionadas - exibir extensões')
      event.preventDefault();
    }
  }

  const handleCommandsToOpenColorThemes = (event: KeyboardEvent) => {
    if (event.metaKey && event.key === 'c') {
      console.log('Teclas Command + c pressionadas');
      alert('Teclas Command + c pressionadas - exibir opções de temas ')
      event.preventDefault();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleCommandsToOpenFile);
    document.addEventListener('keydown', handleCommandsToOpenExtensions);
    document.addEventListener('keydown', handleCommandsToOpenColorThemes);

    return () => {
      document.removeEventListener('keydown', handleCommandsToOpenFile);
      document.removeEventListener('keydown', handleCommandsToOpenExtensions);
      document.removeEventListener('keydown', handleCommandsToOpenColorThemes);
    };
  }, []);

  return (
    <S.Container>
      <EDIcon />

      <S.Content>
        <S.WrapperCommands>
          <S.Typography>{t('viewAllFiles')}</S.Typography>  
          
          <S.CustomIcons> 
            <ArrowBigUp /> 
            <Command />
            <S.LetterAsIcon> P </S.LetterAsIcon>
          </S.CustomIcons>
        </S.WrapperCommands>

        <S.WrapperCommands>
          <S.Typography>{t('myExtensions')}</S.Typography>  
          
          <S.CustomIcons> 
            <ArrowBigUp /> 
            <Command />
            <S.LetterAsIcon> E </S.LetterAsIcon>
          </S.CustomIcons>
        </S.WrapperCommands>

        <S.WrapperCommands>
          <S.Typography>Meus temas</S.Typography>  
          
          <S.CustomIcons> 
            <ArrowBigUp /> 
            <Command />
            <S.LetterAsIcon> T </S.LetterAsIcon>
          </S.CustomIcons>
        </S.WrapperCommands>
      </S.Content>
    </S.Container>
  )
}