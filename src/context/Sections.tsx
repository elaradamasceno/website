'use client';

import { Sessions } from '@/enum/sessions.enum';
import { MenuComponentType } from '@/types/sections.type';
import { ReactNode, createContext, useContext, useEffect, useState} from 'react';

interface SectionProps {
  currentSection: MenuComponentType,
  updateSection: (data: MenuComponentType) => void
};

interface SectionsProvider {
  children: ReactNode
};

const SectionsContext = createContext<SectionProps>(
  {} as SectionProps
);

const SectionsProvider = ({ children }: SectionsProvider) => {
  const [ currentSection, setCurrentSection ] = useState<MenuComponentType>(Sessions.default);
  
  const updateSection = (data: MenuComponentType) => {
    setCurrentSection(data);
  };

  return (
    <>
      <SectionsContext.Provider
        value={{
          currentSection,
          updateSection
        }}
      >
        { children }
      </SectionsContext.Provider>
    </>
  )
};

function useSections(){
  const context = useContext(SectionsContext);

  if(!context)
    throw new Error('useSections must be used with an Provider');

  return context;
};

export { SectionsProvider, useSections}