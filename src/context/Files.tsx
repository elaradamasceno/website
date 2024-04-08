'use client';

import { ReactNode, createContext, useContext, useState} from 'react';

type ShowAllFilesType = {
  show: boolean
}

interface FilesProps {
  isToShowFiles: boolean
  showAllFiles: ({ show }: ShowAllFilesType) => void
};

interface FilesProviderProps {
  children: ReactNode
}

const FileContext = createContext<FilesProps>(
  {} as FilesProps
);

const FilesProvider = ({ children }: FilesProviderProps ) => {
  const [ isToShowFiles, setIsToShowFiles ] = useState<boolean>(false);

  const showAllFiles = ({ show }: ShowAllFilesType) => {
    setIsToShowFiles(show);
  }

  return (
    <>
      <FileContext.Provider
        value={{
          isToShowFiles,
          showAllFiles
        }}
      >
        { children }
      </FileContext.Provider>
    </>
  )
};

function useFileActions(){
  const context = useContext(FileContext);

  if(!context)
    throw new Error('useFiles must be used within an Provider');

  return context;
};

export { FilesProvider, useFileActions };