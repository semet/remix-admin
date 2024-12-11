import { PersonParams } from '~/schemas'

export const keyFactory = {
  person: (params: PersonParams) => ['person', params] as const
}
