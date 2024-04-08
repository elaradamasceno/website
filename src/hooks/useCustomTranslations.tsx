import { useTranslations } from 'next-intl';

function useCustomTranslations(componentName: string) {
  const t = useTranslations(componentName);
  return t;
}

export default useCustomTranslations;