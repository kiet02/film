import { useQuery } from '@tanstack/react-query';
import { ApiKeys, fetchApi } from '../../../utils';

export const useBook = (name: number | string) => {
  const result = useQuery({
    queryKey: [ApiKeys.book, name],
    queryFn: fetchApi.Book(name),
  });

  return result;
};
