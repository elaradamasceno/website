import React, { useEffect, useMemo } from 'react';

import { SocialMediaType } from "@/types/social-media.type";
import { FileNumbers } from '../FileNumbers';

import * as S from './styles';


export default function SocialMediaLinks() {
  const handleGetAllSocialMedia = useMemo(() => {
    return Object.values(SocialMediaType).map(media => (
      {
        title: media.title,
        link: media.link,
        icon: media.icon
      }
    ))
  }, [])

  return (
    <S.Content>
      {handleGetAllSocialMedia.map(media => (
        <FileNumbers key={media.title}>
          <S.Link href={media.link} target='_blank'>
            <media.icon />
            {media.title}
          </S.Link>
        </FileNumbers>
      ))}
    </S.Content>
  )
} 