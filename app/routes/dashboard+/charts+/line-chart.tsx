import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts'

import { Card } from '~/components/base-ui'

import { chartData } from './data'

export const LineChartExample = () => {
  return (
    <Card
      title="Line Chart"
      className="flex w-full flex-col"
    >
      <div className="h-72 w-full">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            className="text-sm"
          >
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#405189"
            />
            <CartesianGrid
              stroke="#299cdb"
              strokeDasharray="5 5"
            />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
