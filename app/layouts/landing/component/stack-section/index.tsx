import { stacks } from './data'
import { StackItem } from './stack-item'

export const StackSection = () => {
  return (
    <section
      id="stacks"
      className="main-padding bg-red mt-52 w-full sm:mt-72"
    >
      <h2 className="text-center text-4xl font-semibold">Build With</h2>
      <div className="container mx-auto mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {stacks.map((stack, index) => (
          <StackItem
            key={index}
            {...stack}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
