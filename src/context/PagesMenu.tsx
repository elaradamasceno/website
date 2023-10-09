
'use client';
import { ReactNode, createContext, useCallback, useContext, useEffect, useState} from 'react';

import { SaveOpenPageProps } from '@/types/actions-page.type';

interface PagesMenuProps {
  pagesOpen: SaveOpenPageProps[]
  getOpenPages: () => SaveOpenPageProps[]
  saveOpenPage: (data: SaveOpenPageProps) => void
  updateOpenPage: (nameFile: string) => void
}

const INITIAL_STATE_PAGES_OPEN: SaveOpenPageProps = {
  typeFile: 'none',
  nameFile: '',
  isActive: false,
  isOpen: false
}

const PagesMenuContext = createContext<PagesMenuProps>(
  {} as PagesMenuProps
)

interface PagesMenuProvider {
  children: ReactNode
}

const PagesMenuProvider = ({ children }: PagesMenuProvider ) => {
  const [ pagesOpen, setPagesOpen ] = useState<SaveOpenPageProps[]>([INITIAL_STATE_PAGES_OPEN])

  const saveOpenPage = (data: SaveOpenPageProps) => {
    const verifyPages = pagesOpen.filter(page => page.nameFile === data.nameFile);

    if(verifyPages.length === 0 ){
      setPagesOpen(oldState => {
        oldState.find(state => {
          if(state.nameFile !== data.nameFile){
            state.isActive = false
          }
        });
  
        return [...oldState, data];
      })
    }
  }

  const updateOpenPage = (nameFile: string) => {
    const pages = pagesOpen.map((page) => {
      if(page.nameFile === nameFile){
        page.isActive = true;
      }
      else {
        page.isActive = false;
      }

      return page
    })

    setPagesOpen(pages)
  }

  const getOpenPages = useCallback(() => {
    return pagesOpen
  }, [ pagesOpen ])

  useEffect(() => {
    const verifyEmptyPage = pagesOpen.filter(page => page.typeFile === 'none');
    if(verifyEmptyPage.length > 0){
      pagesOpen.shift();
      setPagesOpen(pagesOpen);
    }
  }, [pagesOpen])

  return (
    <>
      <PagesMenuContext.Provider
        value={{
          pagesOpen,
          getOpenPages,
          saveOpenPage,
          updateOpenPage
        }}
      >
        { children }
      </PagesMenuContext.Provider>
    </>
  )
}

function usePagesMenu(){
  const context = useContext(PagesMenuContext);

  if(!context)
    throw new Error('usePagesMenu must be used within an Provider');

  return context;
}

export { PagesMenuProvider, usePagesMenu }