'use client'
import { ReactNode, useEffect, useMemo, useState } from 'react';

import { ArrowLeft, ArrowRight } from 'lucide-react';

import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Explorer, Menu, MenuCircleButton, MenuPage } from '@/components/core';
import { usePagesMenu } from '@/context/PagesMenu';
import { GeneralText } from '@/enum/general.enum';
import { usePathname, useRouter, locales, localePrefix } from '@/navigation';

import * as S from './styles';

interface LayoutComponentProps {
  children: ReactNode
  locale: string
}

export default function LayoutComponent({ children, locale }: LayoutComponentProps){
  const theme = useTheme();
  const higherThenSm = useMediaQuery(theme.breakpoints.up('sm'));
  const pathname = usePathname();
  const router = useRouter();

  const { pagesOpen } = usePagesMenu();

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showPages, setShowPages] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(!higherThenSm)
  }, [higherThenSm])

  useEffect(() => {
    setShowPages(pagesOpen.length === 0 ? false : true)
  }, [pagesOpen])

  useEffect(() => {
    localStorage.setItem('@locale', locale)
  }, [locale])

  const handleRenderingExplorerRules = useMemo(() => {
    if(isMobile && !showPages)
      return <Explorer />
    
    if(!isMobile)
      return <Explorer />   
  }, [isMobile, showPages])

  const handleChangeLocation = async (data: string) => {

    console.log('data ', data)
    router.push(pathname, { locale: data});
  }

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
          <MenuCircleButton />

          <S.WrapperHeader>
            <S.WrapperIcons>
              <ArrowLeft />
              <ArrowRight />
            </S.WrapperIcons>

            <S.HeaderTextCircle>
              <Typography variant='h6'>{GeneralText.title}</Typography>
            </S.HeaderTextCircle>
          </S.WrapperHeader>

          <S.WrapperLengagues>
            <S.Lenguages onClick={() => handleChangeLocation('pt')} $isActive={locale === 'pt' ? true : false}>
              PT-BR
            </S.Lenguages>

            <S.Lenguages onClick={() => handleChangeLocation('en')} $isActive={locale === 'en' ? true : false}>
              EN-US
            </S.Lenguages>
          </S.WrapperLengagues>
        </S.Header>

        <S.Content>
          {renderMenu()}

          <S.Main>
            <MenuPage />

            <S.MainContent $showMenu={showPages}>
              { children }
            </S.MainContent>
          </S.Main>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}