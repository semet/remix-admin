import { PersonParams } from '~/schemas'

export const keyFactory = {
  person: (params: PersonParams) => ['person', params] as const,
  infinitePerson: (params: PersonParams) => ['infinite-person', params] as const
}
