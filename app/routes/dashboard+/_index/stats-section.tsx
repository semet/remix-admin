import { statItems } from './data'
import { StatsCard } from './stats-card'

export const StatsSection = () => {
  return (
    <section className="grid grid-cols-4 gap-4">
      {statItems.map((item) => (
        <StatsCard
          key={item.id}
          {...item}
        />
      ))}
    </section>
  )
}
