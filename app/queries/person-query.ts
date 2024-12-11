import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { fetchData } from '~/apis'
import { keyFactory } from '~/factories'
import { PersonParams } from '~/schemas'

export const usePersonQuery = (params: PersonParams) => {
  return useQuery({
    queryKey: keyFactory.person(params),
    queryFn: () => fetchData(params),
    placeholderData: keepPreviousData
  })
}
