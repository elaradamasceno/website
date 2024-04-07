import { useState } from 'react';
import { X, Minus, ChevronsUpDown } from 'lucide-react';

import * as S from './styles';

export default function MenuCircleButton() {
  const [showIcons, setShowIcons] = useState<boolean>(false)

  const handleMouseEnter = () => {
    setShowIcons(true)
  }

  const handleMouseLeave = () => {
    setShowIcons(false)
  }

  return (
    <S.Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <S.Content $typeColor='red'>
        { showIcons && <X /> }
      </S.Content>

      <S.Content $typeColor='yellow'>
        { showIcons && <Minus /> }
      </S.Content>

      <S.Content $typeColor='green'>
        { showIcons && <ChevronsUpDown /> }
      </S.Content>
        
    </S.Container>
  )
}