import { useState } from 'react';
import { Blocks, BugPlay, Files, GitGraph, Monitor, Search } from 'lucide-react';

import { MenuButton } from '@/components/core';
import { useSections } from '@/context/Sections';
import { Sessions } from '@/enum/sessions.enum';
import { MenuComponentType } from '@/types/sections.type';

import * as S from './styles';

export default function MenuComponent() {
  const { updateSection } = useSections()
  const [activeComponent, setActiveComponent] = useState<MenuComponentType>(Sessions.default);

  const handleClick = (component: MenuComponentType) => {
    setActiveComponent(prevComponent => prevComponent === component ? prevComponent : component);

    updateSection(component);
  };

  return (
    <S.Container>
      <MenuButton icon={Files} component={Sessions.explorer} isActive={activeComponent === Sessions.explorer} onClick={() => handleClick(Sessions.explorer)} />
      <MenuButton icon={Search} hasFlipped={true} component="none"/>
      <MenuButton icon={Blocks} component={Sessions.extensions} isActive={activeComponent === Sessions.extensions} onClick={() => handleClick(Sessions.extensions)} />
      <MenuButton icon={BugPlay} component="none" />
      <MenuButton icon={Monitor} component={Sessions.theme} isActive={activeComponent === Sessions.theme} onClick={() => handleClick(Sessions.theme)} />
      <MenuButton icon={GitGraph} component="none" />
    </S.Container>
  )
}