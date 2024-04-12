'use client'
import { ReactNode, useEffect, useMemo, useState } from 'react';

import { ArrowLeft, ArrowRight } from 'lucide-react';

import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Explorer, Menu, MenuCircleButton, MenuPage } from '@/components/core';
import { usePagesMenu } from '@/context/PagesMenu';
import { GeneralText } from '@/enum/general.enum';
import { Curriculum, GitHub, Home, SocialMedia, Summary } from '@/enum/folders.enum';
import useActionsPages from '@/hooks/useActionsPages';
import useCustomTranslations from '@/hooks/useCustomTranslations';
import { usePathname, useRouter } from '@/navigation';

import { DataPageType } from '@/types/actions-page.type';
import * as S from './styles';

interface LayoutComponentProps {
  children: ReactNode
  locale: string
}

let changeLocale = false

export default function LayoutComponent({ children, locale }: LayoutComponentProps){
  const theme = useTheme();
  const higherThenSm = useMediaQuery(theme.breakpoints.up('sm'));
  const pathname = usePathname();
  const router = useRouter();
  
  const { onRedirectPage } = useActionsPages();
  const { pagesOpen } = usePagesMenu();
  
  const t = useCustomTranslations('Folders');

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showPages, setShowPages] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(!higherThenSm)
  }, [higherThenSm])

  useEffect(() => {
    setShowPages(pagesOpen.length === 0 ? false : true)
  }, [pagesOpen])

  useEffect(() => {
    if(changeLocale){
      const dataPage = handleShowMenuPage()
      
      onRedirectPage({
        typeAction: 'save',
        dataPage: { name: dataPage.name, typeFile: dataPage.typeFile },
        redirect: false
      })
    }
  }, [locale, changeLocale])

  const handleRenderingExplorerRules = useMemo(() => {
    if(isMobile && !showPages)
      return <Explorer />
    
    if(!isMobile)
      return <Explorer />   
  }, [isMobile, showPages])

  const handleShowMenuPage = (): DataPageType => {
    switch(pathname) {
      case Summary.page:
        return {name: t('summary'), typeFile: Summary.fileType}
      case SocialMedia.page:
        return {name: t('socialNetworks'), typeFile: SocialMedia.fileType}
      case GitHub.page:
        return {name: t('gitHub'), typeFile: GitHub.fileType}
      case Curriculum.page:
        return {name: t('resume'), typeFile: Curriculum.fileType}
      case Home.folderTitle:
        return {name: Home.page, typeFile: 'none'}
      default:
        return {name: '/', typeFile: 'none' }
    }
  }

  const handleChangeLocation = async (data: string) => {
    router.replace(pathname, { locale: data});
    changeLocale = true
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