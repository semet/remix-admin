import { EventContentArg } from '@fullcalendar/core/index.js'
import { FC } from 'react'

export const EventContent: FC<EventContentArg> = (props) => {
  const { event } = props
  return (
    <div className="bg-info px-2">
      <h3 className="text-white">{event.title}</h3>
      <p className="text-white">{event.extendedProps.description}</p>
    </div>
  )
}
