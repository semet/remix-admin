import { Reorder } from 'framer-motion'
import { useState } from 'react'

import { sortableYData } from './data'

export const SortableY = () => {
  const [data, setData] = useState(sortableYData)
  return (
    <div>
      <Reorder.Group
        axis="y"
        values={data}
        onReorder={setData}
        className="space-y-4"
      >
        {data.map((item) => (
          <Reorder.Item
            key={item.id}
            value={item}
          >
            <div className="cursor-grab rounded border bg-white p-4 text-slate-600 active:cursor-grabbing active:shadow">
              {item.title}
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  )
}
