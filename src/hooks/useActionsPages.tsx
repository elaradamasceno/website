import { useRouter } from 'next/navigation';

import { usePagesMenu } from "@/context/PagesMenu";

import { OnRedirectPageProps } from '@/types/actions-page.type';
import { Curriculum, GitHub, Home, SocialMedia, Summary } from '@/enum/folders.enum';


const useActionsPages = () => {
  const router = useRouter();
  const { 
    pagesOpen, 
    saveOpenPage, 
    updateOpenPage 
  } = usePagesMenu();

  const handleRedirect = (page: string) => {
    switch(page) {
      case Summary.folderTitle:
        return Summary.page
      case SocialMedia.folderTitle:
        return SocialMedia.page
      case GitHub.folderTitle:
        return GitHub.page
      case Curriculum.folderTitle:
        return Curriculum.page
      case Home.folderTitle:
        return Home.page
      default:
        return '/'
    } 
  }

  const handleClosePage = (nameFile: string) => {
    const newPagesOpen = pagesOpen;
    const filterIndexOf = pagesOpen.findIndex(page => page.nameFile === nameFile);

    
    if(filterIndexOf !== -1){
      newPagesOpen.splice(filterIndexOf, 1);

      newPagesOpen.forEach((page, index) => {
        if(newPagesOpen.length -1 === index){
          page.isActive = true
        }
        else {
          page.isActive = false
          page.isActive = false
        }
      });

      const filterNewRedirect = filterIndexOf === 0 && newPagesOpen.length >= 1 ? newPagesOpen[0] : newPagesOpen[filterIndexOf -1];
      return filterNewRedirect ?? Home.folderTitle
    }
  }

  const onRedirectPage = ({ typeAction, dataPage}: OnRedirectPageProps) => {
    const pageRedirect = handleRedirect(dataPage.name)
    router.push(pageRedirect);

    if(typeAction === 'save'){
      saveOpenPage({
        nameFile: dataPage.name, typeFile: dataPage.typeFile, isActive: true, isOpen: true
      });
    }

    if(typeAction === 'update'){
      console.log('dataPage ', dataPage.name)
      updateOpenPage(dataPage.name ?? 'Home')
    }
  }

  const onClosePage = (name: string) => {
    const getRedirectWhenClosePage = handleClosePage(name);

    if(getRedirectWhenClosePage){
      onRedirectPage({
        typeAction: 'update',
        dataPage: { name: getRedirectWhenClosePage.nameFile, typeFile: getRedirectWhenClosePage.typeFile}
      })
    }
  }

  return { onClosePage, onRedirectPage }
}

export default useActionsPages