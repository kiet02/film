import { useQuery } from '@tanstack/react-query';
import { ApiKeys, fetchApi } from '../../../utils';

export const useChapter = (
  id: number | string,
  BookId: string | number,
  enabled: boolean
) => {
  const result = useQuery({
    queryKey: [ApiKeys.chapter, id, BookId],
    queryFn: fetchApi.Chapter(id, BookId),
    enabled: enabled,
  });

  return result;
};
