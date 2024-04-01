
import { FolderCheck, FolderDown, FolderGit2, FolderKanban } from 'lucide-react';
import { ContentFolder } from './ContentFolder';

import { Curriculum, GitHub, SocialMedia, Summary } from '@/enum/folders.enum';

export const Folders = () => {
  return (
    <>
      <ContentFolder 
        icon={FolderCheck} 
        title={Summary.folderTitle} 
        file={{typeFile: Summary.fileType, redirect: Summary.page, name: Summary.fileType}}
      />

      <ContentFolder 
        icon={FolderKanban} 
        title={SocialMedia.folderTitle} 
        file={{typeFile: SocialMedia.fileType, redirect: SocialMedia.page, name: SocialMedia.fileType}}
      />

      <ContentFolder 
        icon={FolderGit2} 
        title={GitHub.folderTitle} 
        file={{typeFile: GitHub.fileType, redirect: Curriculum.page, name: GitHub.fileType}}
      />

      <ContentFolder 
        icon={FolderDown} 
        title={Curriculum.folderTitle} 
        file={{typeFile: Curriculum.fileType, redirect: Curriculum.page, name: Curriculum.fileType}}
      />
    </>
  )
}