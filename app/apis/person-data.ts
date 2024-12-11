import { faker } from '@faker-js/faker'

import { Person } from '~/schemas'

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

export async function fetchData(options: {
  pageIndex: number
  pageSize: number
}) {
  // Simulate some network latency
  await new Promise((r) => setTimeout(r, 500))

  return {
    rows: data.slice(
      options.pageIndex * options.pageSize,
      (options.pageIndex + 1) * options.pageSize
    ),
    pageCount: Math.ceil(data.length / options.pageSize),
    rowCount: data.length
  }
}
