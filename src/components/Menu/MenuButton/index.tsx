import type { Icon } from 'lucide-react';

import * as S from './styles';

interface MenuButtonProps {
  isActive?: boolean
  icon: Icon
}

export const MenuButton = ({isActive = false, icon: Icon}: MenuButtonProps) => {
  return (
    <S.Container $isActive={isActive}>
      <Icon size={28} strokeWidth={1.2} />
    </S.Container>
  )
}