import { useQuery } from '@tanstack/react-query';
import { ApiKeys, fetchApi } from '../../../utils';

export const useAllCategories = () => {
  const result = useQuery({
    queryKey: [ApiKeys.AllCategories],
    queryFn: fetchApi.AllCategories,
  });

  return result;
};
