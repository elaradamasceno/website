
import { FolderCheck, FolderDown, FolderGit2, FolderKanban } from 'lucide-react';
import { ContentFolder } from './ContentFolder';

import { Curriculum, GitHub, SocialMedia, Summary } from '@/enum/folders.enum';
import useCustomTranslations from '@/hooks/useCustomTranslations';

export const Folders = () => {
  const t = useCustomTranslations('Folders');
  return (
    <>
      <ContentFolder 
        icon={FolderCheck} 
        title={t('summary')} 
        file={{typeFile: Summary.fileType, name: Summary.fileType}}
      />

      <ContentFolder 
        icon={FolderKanban} 
        title={t('socialNetworks')}  
        file={{typeFile: SocialMedia.fileType, name: SocialMedia.fileType}}
      />

      <ContentFolder 
        icon={FolderGit2} 
        title={t('gitHub')} 
        file={{typeFile: GitHub.fileType, name: GitHub.fileType}}
      />

      <ContentFolder 
        icon={FolderDown} 
        title={t('resume')}  
        file={{typeFile: Curriculum.fileType, name: Curriculum.fileType}}
      />
    </>
  )
}