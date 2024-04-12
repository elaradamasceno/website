import axios from 'axios';

import { GetSummaryProps } from '@/types/summary-api.type';

export const getDataSummary = async (locale: string): Promise<GetSummaryProps> => {
  return (await axios.get(`/mock/summary-${locale}.json`)).data
}