import { z } from 'zod'

export const paginationSchema = z.object({
  total: z.number(),
  skip: z.number(),
  limit: z.number()
})
