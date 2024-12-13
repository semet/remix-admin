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

import { overviewCartData, overviewData } from './data'

export const OverviewSection = () => {
  return (
    <section>
      <Card className="flex flex-col gap-4 p-0 pb-4">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-semibold text-slate-600">Overview</h2>
          <div className="flex gap-1">
            {['All', '1M', '6M', '1Y'].map((item) => (
              <button
                key={item}
                className="rounded bg-info/30 px-2 py-1 text-sm text-info-100 hover:bg-info hover:text-white focus:outline-none"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 bg-slate-100 md:grid-cols-2 lg:grid-cols-4">
          {overviewData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center border-b border-dashed p-4 first:border-t last:border-b odd:border-r md:border-t md:first:border-b-0 lg:border-y lg:first:border-b md:[&:nth-child(2)]:border-b-0 lg:[&:nth-child(2)]:border-b"
            >
              <span className="text-lg font-semibold">{item.value}</span>
              <span className="text-center text-sm text-slate-500">
                {item.title}
              </span>
            </div>
          ))}
        </div>
        <div className="h-72 w-full">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <BarChart
              width={500}
              height={300}
              data={overviewCartData}
              barSize={30}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              className="text-xs sm:text-sm"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="title"
                className="capitalize"
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="value"
                fill="#405189"
                activeBar={
                  <Rectangle
                    fill="#405189"
                    stroke="blue"
                  />
                }
              />
              <Bar
                dataKey="completed"
                fill="#0ab39c"
                activeBar={
                  <Rectangle
                    fill="#0ab39c"
                    stroke="blue"
                  />
                }
              />
              <Bar
                dataKey="ongoing"
                fill="#299cdb"
                activeBar={
                  <Rectangle
                    fill="#299cdb"
                    stroke="blue"
                  />
                }
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-2">
          {['total', 'completed', 'ongoing'].map((data) => (
            <div
              key={data}
              className="flex items-center gap-2"
            >
              <div
                className="h-4 w-4 rounded-full"
                style={{
                  backgroundColor:
                    data === 'total'
                      ? '#405189'
                      : data === 'completed'
                        ? '#0ab39c'
                        : '#299cdb'
                }}
              />
              <span className="text-sm text-slate-500">{data}</span>
            </div>
          ))}
        </div>
      </Card>
    </section>
  )
}
