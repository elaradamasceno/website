import { Bug, Cog, Files, FlaskConical, GitFork, Monitor, Puzzle, Search } from 'lucide-react';

import { MenuButton } from './MenuButton';

import * as S from './styles';

export const Menu = () => {
  return (
    <S.Container>
      <MenuButton isActive={true} icon={Files}/>
      <MenuButton icon={Search}/>
      <MenuButton icon={GitFork}/>
      <MenuButton icon={Puzzle}/>
      <MenuButton icon={Bug}/>
      <MenuButton icon={Monitor}/>
      <MenuButton icon={FlaskConical}/>
    </S.Container>
  )
}