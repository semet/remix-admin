import { z } from 'zod'
export const inputSchema = z.object({
  comment: z.string().min(10, 'Comment must be at least 10 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .or(z.undefined())
    .refine(
      (val) => {
        return val !== undefined && val !== '' && val.length > 10
      },
      {
        message: 'Message must be at least 10 characters'
      }
    ),
  metas: z
    .string()
    .min(10, 'Metas must be at least 10 characters')
    .or(z.undefined())
    .refine(
      (val) => {
        return val !== undefined && val !== '' && val.length > 10
      },
      {
        message: 'Metas must be at least 10 characters'
      }
    )
})

export type TextEditorForm = z.infer<typeof inputSchema>
