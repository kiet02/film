import { useQuery } from '@tanstack/react-query';
import { ApiKeys, fetchApi } from '../../../utils';

export const useChapterAll = (BookId: number | string) => {
  const result = useQuery({
    queryKey: [ApiKeys.chapter, BookId],
    queryFn: fetchApi.ChapterAll(BookId),
  });

  return result;
};
