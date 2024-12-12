import { Legend } from '@headlessui/react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import { Card } from '~/components/base-ui'

import { chartData } from './data'

export const BarChartExample = () => {
  return (
    <Card
      title="Bar Chart"
      className="flex w-full flex-col"
    >
      <div className="h-72 w-full">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="pv"
              fill="#405189"
              activeBar={
                <Rectangle
                  fill="#f7b84b"
                  stroke="blue"
                />
              }
            />
            <Bar
              dataKey="uv"
              fill="#299cdb"
              activeBar={
                <Rectangle
                  fill="#f06548"
                  stroke="purple"
                />
              }
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
