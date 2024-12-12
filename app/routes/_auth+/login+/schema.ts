import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  remember: z.boolean()
})

export type LoginInput = z.infer<typeof loginSchema>
