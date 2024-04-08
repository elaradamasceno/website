import { LucideIcon } from "lucide-react"

import * as S from './styles';

type MenuComponentType = 'explorer' | 'extensions' | 'themes' | 'none'

interface MenuButtonProps {
  icon: LucideIcon
  isActive?: boolean
  hasFlipped?: boolean
  component: MenuComponentType
}

export default function MenuButton({icon: Icon, isActive = false, hasFlipped = false}: MenuButtonProps) {
  const handleOpenMenuPage = () => {

  }

  return (
    <S.Container $isActive={isActive} $hasFlipped={hasFlipped}>
      <Icon size={28} strokeWidth={1.2} />
    </S.Container>
  )
}