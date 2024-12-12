import { useInfiniteQuery } from '@tanstack/react-query'

import { fetchData } from '~/apis'
import { keyFactory } from '~/factories'
import { PersonParams } from '~/schemas'

export const useInfinitePersonQuery = (params: PersonParams) => {
  return useInfiniteQuery({
    queryKey: keyFactory.infinitePerson(params),
    queryFn: async ({ pageParam = 0 }) => {
      return await fetchData({ ...params, pageParam })
    },
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 0
  })
}
