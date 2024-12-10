import { PersonParams } from '~/schemas'

export const keyFactory = {
  cart: (params: PersonParams) => ['cart', params] as const
}
