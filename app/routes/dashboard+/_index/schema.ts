import { z } from 'zod'

export const eventSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  start: z.string().or(z.null()),
  end: z.string().or(z.null()),
  allDay: z.boolean()
})

export type CalendarEvent = z.infer<typeof eventSchema>
