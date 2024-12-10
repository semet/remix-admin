import { z } from 'zod'

import { paginationSchema } from './pagination-schema'

export const cartSchema = z
  .object({
    carts: z.array(
      z.object({
        id: z.number(),
        products: z.array(
          z.object({
            id: z.number(),
            title: z.string(),
            price: z.number(),
            quantity: z.number(),
            total: z.number(),
            discountPercentage: z.number(),
            discountedTotal: z.number(),
            thumbnail: z.string()
          })
        ),
        total: z.number(),
        discountedTotal: z.number(),
        userId: z.number(),
        totalProducts: z.number(),
        totalQuantity: z.number()
      })
    )
  })
  .merge(paginationSchema)

export type TCart = z.infer<typeof cartSchema>
export type TCartItem = TCart['carts'][0]
