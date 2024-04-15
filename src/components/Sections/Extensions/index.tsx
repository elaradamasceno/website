import Typography from '@mui/material/Typography';

import { ValueExtensions, extensionInfos, ExtensionInfo } from '@/enum/extensions.enum';
import useCustomTranslations from '@/hooks/useCustomTranslations';

import * as S from './styles';

export default function Extensions() {
  const t = useCustomTranslations('Sections');

  return (
    <S.Container>
      <S.Header>
        <Typography variant='h6'>{t('extensions')}</Typography> 

        <Typography variant='body1'>{t('descriptionsAboutExtensionsSection')}:</Typography> 
      </S.Header>

      <S.Content>
        {Object.values(ValueExtensions).map((extension) => {
          if (typeof extension === 'number') {
            const info: ExtensionInfo = extensionInfos[extension];
            return (
              <li key={extension}>
                <a href={info.link}>{info.text}</a>
              </li>
            );
          }
          return null;
        })}
      </S.Content>
    </S.Container>
  )
}