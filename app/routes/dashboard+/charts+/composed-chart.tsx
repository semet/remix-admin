import { Legend } from '@headlessui/react'
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import { Card } from '~/components/base-ui'

import { chartData } from './data'

export const ComposedChartExample = () => {
  return (
    <Card
      title="Composed Chart"
      className="flex w-full flex-col"
    >
      <div className="h-72 w-full">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <ComposedChart
            width={500}
            height={400}
            data={chartData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis
              dataKey="name"
              scale="band"
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar
              dataKey="pv"
              barSize={20}
              fill="#413ea0"
            />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#ff7300"
            />
            <Scatter
              dataKey="cnt"
              fill="red"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
