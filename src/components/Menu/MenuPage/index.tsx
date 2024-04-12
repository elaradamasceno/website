import { useEffect, useState } from 'react';

import Typography from '@mui/material/Typography';
import { X } from 'lucide-react';

import { PageIcon } from '@/components/core';
import { usePagesMenu } from '@/context/PagesMenu';
import useActionsPages from '@/hooks/useActionsPages';

import { DataPageType, SaveOpenPageProps } from '@/types/actions-page.type';

import * as S from './styles';

export default function MenuPage() {
  const { onClosePage, onRedirectPage } = useActionsPages();
  const { pagesOpen, getOpenPages } = usePagesMenu();

  const [pages, setPages] = useState<SaveOpenPageProps[]>();
  const [activePage, setActivePage] = useState<SaveOpenPageProps | null>();

  useEffect(() => {
    const getPages = getOpenPages();
    const verifyEmptyPage = pagesOpen.filter(page => page.typeFile === 'none');

    if(getPages.length !== verifyEmptyPage.length ){
      const currPage = getPages.filter(page => page.isActive)

      setPages(getPages)
      setActivePage(currPage[0])
    }
    else {
      setActivePage(null)
    }
  }, [getOpenPages, pagesOpen])

  const handleChangePage = ({ name, typeFile }: DataPageType) => {
    onRedirectPage({
      typeAction: 'update',
      dataPage: { name: name, typeFile: typeFile }
    });
  }

  const handleClosePage = (name: string) => {
    onClosePage(name)
  }

  return (
    <>
      <S.Container>
        { pages && pages.map((page, index) => {
          if(page.nameFile !== ''){
            return (
              <S.Content key={index} $isActive={page.isActive}>
                <S.WrapperContent 
                  onClick={() => { handleChangePage({ name: page.nameFile, typeFile: page.typeFile }) }}
                  className={pages.length === index - 1 ? 'last-wrapper' : ''}
                >
                  <PageIcon typeFile={page.typeFile} sizeFile='small' />
                  <Typography variant='body2'>{page.nameFile}</Typography>
                </S.WrapperContent>

                <S.ButtonClose 
                  $isActive={page.isActive}
                  onClick={() => handleClosePage(page.nameFile)}
                > 
                  <X /> 
                </S.ButtonClose>
              </S.Content>
            )
          }
        })}
      </S.Container>

      { activePage && (
        <S.Footer>
          <PageIcon typeFile={activePage.typeFile} sizeFile='small' nameFile={activePage.nameFile}/>
        </S.Footer>
      )}

    </>
  )
}