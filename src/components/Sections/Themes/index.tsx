import Typography from '@mui/material/Typography';

import useCustomTranslations from '@/hooks/useCustomTranslations';

import { ValueThemes, themesInfo, ThemeInfo } from '@/enum/color-themes.enum';
import * as S from './styles';

export default function Themes() {
  const t = useCustomTranslations('Sections');

  return (
    <S.Container>
      <S.Header>
        <Typography variant='h6'>{t('colorThemes')}</Typography> 

        <Typography variant='body1'>{t('descriptionAboutColorThemesSection')}:</Typography> 
      </S.Header>

      <S.Content>
        {Object.values(ValueThemes).map((theme) => {
          if (typeof theme === 'number') {
            const info: ThemeInfo = themesInfo[theme];
            return (
              <li key={theme}>
                <a href={info.link} target='_blank'>{info.text}</a>
              </li>
            );
          }
          return null;
        })}
      </S.Content>
    </S.Container>
  )
}