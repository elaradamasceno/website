import { useState } from 'react';
import { Braces, Info } from 'lucide-react';

import { FilesType } from '@/types/files.type';

import useActionsPages from '@/hooks/useActionsPages';
import { PageIcon } from '@/components/Icon/PageIcon';

import * as S from './styles';

export interface FileProps {
  name: string
  typeFile: FilesType
  redirect: string
}

export const Files = ({ name, typeFile, redirect }: FileProps) => {
  const { onRedirectPage } = useActionsPages();

  const handleRedirect = () => {
    onRedirectPage({
      typeAction: 'save',
      dataPage: { name: name, typeFile: typeFile }
    })
  }

  return (
    <S.Content onClick={handleRedirect}>
      <PageIcon typeFile={typeFile} sizeFile='small'/>
      <S.Typography>index.{typeFile}</S.Typography>
    </S.Content>
  )
}