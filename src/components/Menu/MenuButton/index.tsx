import { useState } from "react";
import { LucideIcon } from "lucide-react"
import { MenuComponentType } from "@/types/sections.type";

import * as S from './styles';

interface MenuButtonProps {
  icon: LucideIcon
  isActive?: boolean
  hasFlipped?: boolean
  component: MenuComponentType
  onClick?: () => void
}

export default function MenuButton({
  icon: Icon, 
  isActive = false,
  hasFlipped = false, 
  component, 
  onClick
}: MenuButtonProps) {
  return (
    <S.Container 
      $isActive={isActive} 
      $hasFlipped={hasFlipped} 
      onClick={onClick}
    >
      <Icon size={28} strokeWidth={1.2} />
    </S.Container>
  )
}