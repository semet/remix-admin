import { z } from 'zod'

export const inputSchema = z.object({
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
  fromDate: z.string().refine(
    (val) => {
      return val !== ''
    },
    {
      message: 'From Date is required'
    }
  ),
  toDate: z.string().refine(
    (val) => {
      return val !== ''
    },
    {
      message: 'To Date is required'
    }
  )
})

export type DateFormInput = z.infer<typeof inputSchema>
