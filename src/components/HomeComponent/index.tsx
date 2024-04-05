'use client'
import { Code } from 'lucide-react';

import * as S from './styles';
import { useEffect } from 'react';
import { EDIcon } from '../Icon/EDIcon';

/**
 * 
 * ver arquivos --> explorer
 * extensões --> minhas extensões (criar)
 * meus temas --> icone de tela (criar uma pagina para exibir os temas)
 * git --> 
 */

export function HomeComponent() {
  const handleCommandsToOpenFile = (event: KeyboardEvent) => {
    if (event.metaKey && event.key === 'p') {
      console.log('Teclas Command + P pressionadas');
      alert('Teclas Command + P pressionadas')
      event.preventDefault();
    }
  }

  const handleCommandsToOpenExtensions = (event: KeyboardEvent) => {
    if (event.metaKey && event.key === '.') {
      console.log('Teclas Command + . pressionadas');
      alert('Teclas Command + . pressionadas')
      event.preventDefault();
    }
  }

  const handleCommandsToOpenColorThemes = (event: KeyboardEvent) => {
    if (event.metaKey && event.key === 'c') {
      console.log('Teclas Command + c pressionadas');
      alert('Teclas Command + c pressionadas')
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
        Ver arquivos 
      </S.Content>
    </S.Container>
  )
}