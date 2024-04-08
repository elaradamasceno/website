import { Blocks, BugPlay, Files, GitGraph, Monitor, Search } from 'lucide-react';
import { MenuButton } from '@/components/core';

import * as S from './styles';

export default function MenuComponent() {
  return (
    <S.Container>
      <MenuButton isActive={true} icon={Files} component="explorer"/>
      <MenuButton icon={Search} hasFlipped={true} component="none"/>
      <MenuButton icon={Blocks} component="extensions" />
      <MenuButton icon={BugPlay} component="none" />
      <MenuButton icon={Monitor} component="themes" />
      <MenuButton icon={GitGraph} component="none" />
    </S.Container>
  )
}