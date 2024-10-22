import axios from 'axios';
import { base_url } from '../../../lib/utils';
import { getSession } from 'next-auth/react';
export default async () => {
  const session = await getSession()
  const response = await axios.get(`${base_url}/v1/farms`, {
    headers: {
      // @ts-ignore
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  return response.data;
};
