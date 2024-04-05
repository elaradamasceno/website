import { cache } from 'react';
import axios from 'axios';

import { GetRepositoriesProps } from '@/types/github-services.type';

export const getRepositories = cache(async (): Promise<GetRepositoriesProps[]> => {
  const url = 'https://api.github.com/users/elaradamasceno/repos?sort=created';
  const resp = await axios.get(url);

  return resp.data;
});