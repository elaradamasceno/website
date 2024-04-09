import axios from 'axios';

import { GetSummaryProps } from '@/types/summary-api.type';

export const getDataSummary = async (): Promise<GetSummaryProps> => {
  const locale = localStorage.getItem('@locale');

  return (await axios.get(`/mock/summary-${locale}.json`)).data
}