import axios from 'axios';

import { GetSummaryProps } from '@/types/summary-api.type';

export const getDataSummary = async (): Promise<GetSummaryProps> => {
  return (await axios.get(`/mock/summary-pt.json`)).data
}