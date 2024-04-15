import { useState } from 'react';
import { Blocks, BugPlay, Files, GitGraph, Monitor, Search } from 'lucide-react';

import { MenuButton } from '@/components/core';
import { useSections } from '@/context/Sections';
import { Sections } from '@/enum/sections.enum';
import { MenuComponentType } from '@/types/sections.type';

import * as S from './styles';

export default function MenuComponent() {
  const { updateSection } = useSections()
  const [activeComponent, setActiveComponent] = useState<MenuComponentType>(Sections.default);

  const handleClick = (component: MenuComponentType) => {
    setActiveComponent(prevComponent => prevComponent === component ? prevComponent : component);

    updateSection(component);
  };

  return (
    <S.Container>
      <MenuButton icon={Files} component={Sections.explorer} isActive={activeComponent === Sections.explorer} onClick={() => handleClick(Sections.explorer)} />
      <MenuButton icon={Search} hasFlipped={true} component="none"/>
      <MenuButton icon={Blocks} component={Sections.extensions} isActive={activeComponent === Sections.extensions} onClick={() => handleClick(Sections.extensions)} />
      <MenuButton icon={BugPlay} component="none" />
      <MenuButton icon={Monitor} component={Sections.theme} isActive={activeComponent === Sections.theme} onClick={() => handleClick(Sections.theme)} />
      <MenuButton icon={GitGraph} component="none" />
    </S.Container>
  )
}