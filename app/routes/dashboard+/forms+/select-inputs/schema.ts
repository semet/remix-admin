import { z } from 'zod'
export const inputSchema = z.object({
  status: z.string().min(1, 'Please select a status'),
  country: z
    .object({
      label: z.string(),
      value: z.string()
    })
    .or(z.undefined())
    .refine(
      (value) => {
        return value !== undefined
      },
      {
        message: 'Please select a country'
      }
    ),
  grocery: z
    .object({
      label: z.string(),
      value: z.string()
    })
    .or(z.undefined())
    .refine(
      (value) => {
        return value !== undefined
      },
      {
        message: 'Please select a grocery'
      }
    ),
  tags: z
    .array(z.object({ label: z.string(), value: z.string() }))
    .or(z.undefined())
    .refine((value) => value !== undefined && value.length !== 0, {
      message: 'Please select at least one tag'
    })
})

export type SelectInput = z.infer<typeof inputSchema>
