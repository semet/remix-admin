import { Pie, PieChart, ResponsiveContainer } from 'recharts'

import { Card } from '~/components/base-ui'

import { pieChartDataOne, pieChartDataTwo } from './data'
export const PieChartExample = () => {
  return (
    <Card
      title="Pie Chart"
      className="flex w-full flex-col"
    >
      <div className="h-72 w-full">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart
            width={400}
            height={400}
          >
            <Pie
              data={pieChartDataOne}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#405189"
            />
            <Pie
              data={pieChartDataTwo}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#299cdb"
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
