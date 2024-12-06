import { z } from 'zod'
export const inputSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 characters')
})

export type BasicForm = z.infer<typeof inputSchema>
