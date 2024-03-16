import { LucideIcon } from "lucide-react"

import * as S from './styles';

interface MenuButtonProps {
  icon: LucideIcon
  isActive?: boolean
  hasFlipped?: boolean
}

export const MenuButton = ({icon: Icon, isActive = false, hasFlipped = false}: MenuButtonProps) => {
  return (
    <S.Container $isActive={isActive} $hasFlipped={hasFlipped}>
      <Icon size={28} strokeWidth={1.2} />
    </S.Container>
  )
}