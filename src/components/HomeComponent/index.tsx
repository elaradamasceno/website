'use client'
import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { ArrowBigUp, Code, Command } from 'lucide-react';

import { EDIcon, Text } from '@/components/core';
import { useFileActions } from '@/context/Files';
import { useSections } from '@/context/Sections';

import useCustomTranslations from '@/hooks/useCustomTranslations';

import * as S from './styles';
import { Sections } from '@/enum/sections.enum';

export default function HomeComponent() {
  const t = useCustomTranslations('Home');
  const theme = useTheme();
  const higherThenSm = useMediaQuery(theme.breakpoints.up('sm'));

  const { updateSection } = useSections();
  const { showAllFiles } = useFileActions();

  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleCommandsToOpenFile = (event: KeyboardEvent) => {
    if (event.shiftKey && event.metaKey && event.key === 'p') {
      updateSection(Sections.explorer);
      showAllFiles({ show: true });
      event.preventDefault();
    }
  }

  const handleCommandsToOpenExtensions = (event: KeyboardEvent) => {
    if (event.shiftKey && event.metaKey && event.key === 'e') {
      updateSection(Sections.extensions);
      event.preventDefault();
    }
  }

  const handleCommandsToOpenColorThemes = (event: KeyboardEvent) => {
    if (event.metaKey && event.key === 'c') {
      updateSection(Sections.theme);
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

  useEffect(() => {
    setIsMobile(!higherThenSm)
  }, [higherThenSm])

  const renderDesktop = () => {
    return (
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
            <S.LetterAsIcon> C </S.LetterAsIcon>
          </S.CustomIcons>
        </S.WrapperCommands>
      </S.Content>
    )
  }

  const renderMobile = () => {
    return (
      <S.Mobile>
        <S.Typography>{t('message')}</S.Typography>  
      </S.Mobile>
    )
  }

  return (
    <S.Container>
      <EDIcon />

      { isMobile ? renderMobile() : renderDesktop() }
    </S.Container>
  )
}