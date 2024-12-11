import { z } from 'zod'

export const filterSchema = z.object({
  startDate: z.string().refine(
    (val) => {
      return val !== ''
    },
    {
      message: 'Start Date is required'
    }
  ),
  endDate: z.string().refine(
    (val) => {
      return val !== ''
    },
    {
      message: 'End Date is required'
    }
  ),
  status: z.enum(['single', 'relationship', 'complicated'])
})

export const createPersonSchema = z.object({
  firstName: z.string().min(2, 'First Name must be at least 2 characters'),
  lastName: z.string().nullable(),
  email: z.string().email('Invalid email address'),
  age: z.number().int().min(18, 'Age must be at least 18 years old'),
  status: z.enum(['single', 'relationship', 'complicated'])
})

export type FilterForm = z.infer<typeof filterSchema>
export type CreatePersonForm = z.infer<typeof createPersonSchema>
