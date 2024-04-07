import { Blocks, BugPlay, Files, GitGraph, Monitor, Search } from 'lucide-react';
import { MenuButton } from '@/components/core';

import * as S from './styles';

export default function Menu() {
  return (
    <S.Container>
      <MenuButton isActive={true} icon={Files}/>
      <MenuButton icon={Search} hasFlipped={true} />
      <MenuButton icon={Blocks}/>
      <MenuButton icon={BugPlay}/>
      <MenuButton icon={Monitor}/>
      <MenuButton icon={GitGraph}/>
    </S.Container>
  )
}