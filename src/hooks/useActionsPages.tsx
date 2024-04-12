import { useRouter } from '@/navigation';

import { usePagesMenu } from "@/context/PagesMenu";

import { OnRedirectPageProps } from '@/types/actions-page.type';
import { Curriculum, GitHub, Home, SocialMedia, Summary } from '@/enum/folders.enum';
import useCustomTranslations from './useCustomTranslations';


const useActionsPages = () => {
  const t = useCustomTranslations('Folders');

  const router = useRouter();
  const { 
    pagesOpen, 
    saveOpenPage, 
    updateOpenPage 
  } = usePagesMenu();

  const handleRedirect = (page: string) => {
    switch(page) {
      case t('summary'):
        return Summary.page
      case t('socialNetworks'):
        return SocialMedia.page
      case t('gitHub'):
        return GitHub.page
      case t('resume'):
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

  const onRedirectPage = ({ typeAction, dataPage, redirect = true}: OnRedirectPageProps) => {
    const pageRedirect = handleRedirect(dataPage.name);
    if(redirect) router.push(pageRedirect);

    if(typeAction === 'save'){
      saveOpenPage({
        nameFile: dataPage.name, typeFile: dataPage.typeFile, isActive: true, isOpen: true
      });
    }

    if(typeAction === 'update'){
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