import { faker } from '@faker-js/faker'

import { Person, PersonParams } from '~/schemas'

const range = (len: number) => {
  const arr: number[] = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

// Counter for auto-incrementing ID
let idCounter = 1

const newPerson = (): Person => {
  return {
    id: idCounter++, // Increment the ID for each new person
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    age: faker.number.int(40),
    visits: faker.number.int(1000),
    progress: faker.number.int(100),
    status: faker.helpers.shuffle<Person['status']>([
      'relationship',
      'complicated',
      'single'
    ])[0]!
  }
}

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!
    return range(len).map((_d): Person => {
      return newPerson()
    })
  }

  return makeDataLevel()
}

const data = makeData(100)

export async function fetchData(options: PersonParams) {
  // Simulate some network latency
  await new Promise((r) => setTimeout(r, 500))

  const { sorting, pageParam = 0, pageSize } = options

  if (sorting && sorting.length > 0) {
    const sortingType = sorting[0]?.desc ? -1 : 1
    const sortBy = sorting[0]?.id

    if (sortBy) {
      data.sort((a, b) => {
        const valueA = a[sortBy as keyof Person]
        const valueB = b[sortBy as keyof Person]

        if (typeof valueA === 'string' && typeof valueB === 'string') {
          return sortingType * valueA.localeCompare(valueB)
        }

        if (typeof valueA === 'number' && typeof valueB === 'number') {
          return sortingType * (valueA - valueB)
        }

        return 0
      })
    }
  }

  const startIndex = pageParam * pageSize
  const endIndex = startIndex + pageSize

  const rows = data.slice(startIndex, endIndex)

  return {
    rows,
    nextPage: endIndex < data.length ? pageParam + 1 : null, // Indicate if more pages are available
    pageCount: Math.ceil(data.length / pageSize),
    rowCount: data.length
  }
}
