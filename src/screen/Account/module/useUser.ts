import { useQuery } from '@tanstack/react-query';
import { fetchApi } from '../../../utils';

export const useUser = () => {
  const result = useQuery({
    queryKey: ['user'],
    queryFn: () => fetchApi.User(),
  });
  return result;
};
