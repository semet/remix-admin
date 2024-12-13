import { DateSelectArg, EventInput } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import { zodResolver } from '@hookform/resolvers/zod'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useHydrated } from 'remix-utils/use-hydrated'

import { Button, Card, Modal } from '~/components/base-ui'
import { Checkbox, DatePicker, Input, Textarea } from '~/components/forms'

import { EventContent } from './event-content'
import { CalendarEvent, eventSchema } from './schema'

export const EventSection = () => {
  const isHydrated = useHydrated()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [events, setEvents] = useState<EventInput[]>([
    { title: 'Do some stuffs', start: '2024-12-01', end: '2024-12-04' },
    { title: 'Do some more stuffs', start: '2024-12-09', end: '2024-12-13' }
  ])
  const [selectedStart, setSelectedStart] = useState<string | null>(null)
  const [selectedEnd, setSelectedEnd] = useState<string | null>(null)
  const handleDateClick = (arg: DateSelectArg) => {
    setIsOpen(true)
    setSelectedStart(arg.startStr)
    setSelectedEnd(arg.endStr)
  }

  const formMethods = useForm<CalendarEvent>({
    defaultValues: {
      title: '',
      description: '',
      start: selectedStart,
      end: selectedEnd,
      allDay: true
    },
    resolver: zodResolver(eventSchema)
  })
  const { handleSubmit, clearErrors, reset } = formMethods
  const onSubmit = handleSubmit((data) => {
    const newEvent: EventInput = {
      title: data.title,
      start: dayjs(data.start).toISOString(),
      end: dayjs(data.end).toISOString(),
      extendedProps: {
        description: data.description
      }
    }
    setEvents([...events, newEvent])
    setIsOpen(false)
  })

  useEffect(() => {
    reset({
      start: selectedStart,
      end: selectedEnd
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStart, selectedEnd])
  return (
    <section>
      <Card>
        <div className="p-4">
          {isHydrated ? (
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              eventContent={EventContent}
              select={handleDateClick}
              events={events}
            />
          ) : (
            <div className="h-96 animate-pulse bg-slate-100"></div>
          )}
        </div>
      </Card>
      <Modal
        isOpen={isOpen}
        size="md"
        title="Create Event"
        setIsOpen={setIsOpen}
        onClose={() => {
          reset()
          clearErrors()
        }}
      >
        <FormProvider {...formMethods}>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-4"
          >
            <Input<CalendarEvent>
              name="title"
              label="Title"
              required
            />
            <Textarea<CalendarEvent>
              name="description"
              label="Description"
              required
            />
            <div className="flex gap-2">
              <DatePicker<CalendarEvent>
                name="start"
                label="Start"
                required
              />
              <DatePicker<CalendarEvent>
                name="end"
                label="End"
                required
              />
            </div>
            <Checkbox<CalendarEvent>
              name="allDay"
              label="All Day"
            />
            <Button type="submit">Create Event</Button>
          </form>
        </FormProvider>
      </Modal>
    </section>
  )
}
