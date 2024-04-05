'use client'
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Explorer } from '../Explorer';
import { Menu } from '../Menu';
import { CircleMenuButton } from '../Menu/CircleMenuButton';
import { PageMenu } from '../Menu/PageMenu';

import { usePagesMenu } from '@/context/PagesMenu';

import { GeneralText } from '@/enum/general.enum';

import * as S from './styles';

interface ComponentLayout {
  children: ReactNode
}

export const ComponentLayout = ({ children }: ComponentLayout) => {
  const theme = useTheme();
  const higherThenSm = useMediaQuery(theme.breakpoints.up('sm'));

  const { pagesOpen } = usePagesMenu();

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showPages, setShowPages] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(!higherThenSm)
  }, [higherThenSm])

  useEffect(() => {
    setShowPages(pagesOpen.length === 0 ? false : true)
  }, [pagesOpen])

  const handleRenderingExplorerRules = useMemo(() => {
    if(isMobile && !showPages)
      return <Explorer />
    
    if(!isMobile)
      return <Explorer />   
  }, [isMobile, showPages])

  const renderMenu = () => {
    return (
      <>        
        <S.Aside>
          <Menu /> 
        </S.Aside>

        { handleRenderingExplorerRules }
      </>
    )
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <CircleMenuButton />
          <S.WrapperHeaderText>
            <Typography variant='h6'>{GeneralText.title}</Typography>
          </S.WrapperHeaderText>
        </S.Header>

        <S.Content>
          {renderMenu()}

          <S.Main>
            <PageMenu />

            <S.MainContent $showMenu={showPages}>
              { children }
            </S.MainContent>
          </S.Main>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}