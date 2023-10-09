'use client'
import { ReactNode, useCallback, useEffect, useState } from 'react';

import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Explorer } from '../Explorer';
import { Menu } from '../Menu';
import { CircleMenuButton } from '../Menu/CircleMenuButton';
import { PageMenu } from '../Menu/PageMenu';

import { GeneralText } from '@/enum/general.enum';

import * as S from './styles';
import { usePagesMenu } from '@/context/PagesMenu';

interface ComponentLayout {
  children: ReactNode
}

export const ComponentLayout = ({ children }: ComponentLayout) => {
  const theme = useTheme();
  const higherThenSm = useMediaQuery(theme.breakpoints.up('sm'));

  const { pagesOpen } = usePagesMenu();

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showPages, setShowPages] = useState<boolean>(true);

  useEffect(() => {
    setShowPages(pagesOpen.length === 0 ? false : true)
  }, [pagesOpen])

  useEffect(() => {
    setIsMobile(!higherThenSm)
  }, [higherThenSm])

  const RenderMenu = () => {
    if(!isMobile){
      return (
        <>        
          <S.Aside>
            <Menu /> 
          </S.Aside>

          <Explorer />
        </>
      )
    }

    if(isMobile && !showPages){
      return (
        <>        
          <S.Aside>
            <Menu /> 
          </S.Aside>

          <Explorer />
        </>
      )
    }
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
          {RenderMenu()}

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