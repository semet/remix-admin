import { FC } from 'react'
import { MdOutlineDone } from 'react-icons/md'
import { components as Component } from 'react-select'

import { TOptionProps } from './type'

export const CustomOption: FC<TOptionProps> = (props) => {
  return (
    <Component.Option {...props}>
      <div className="flex items-center justify-between">
        <span>{(props.data as { label: string }).label}</span>
        {props.isSelected && (
          <MdOutlineDone className="h-5 w-5 text-success-50" />
        )}
      </div>
    </Component.Option>
  )
}
