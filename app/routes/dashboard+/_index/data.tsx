import { IconType } from 'react-icons'
import {
  FiGitPullRequest,
  FiAlertCircle,
  FiGitCommit,
  FiUsers
} from 'react-icons/fi'

export type StatsType = {
  id: number
  label: string
  value: number
  percentage: number
  icon: IconType
  description: string
}

export type OverviewDataType = {
  id: number
  title: string
  value: string
}

export type OverviewCartType = {
  id: number
  title: string
  value: number
  completed: number
  ongoing: number
}

export const statItems: StatsType[] = [
  {
    id: 1,
    label: 'Pull Requests',
    value: 120,
    percentage: 20,
    icon: FiGitPullRequest,
    description: 'Total PR'
  },
  {
    id: 2,
    label: 'Issues',
    value: 80,
    percentage: 10,
    icon: FiAlertCircle,
    description: 'Total issues'
  },
  {
    id: 3,
    label: 'Commits',
    value: 200,
    percentage: 30,
    icon: FiGitCommit,
    description: 'Total commits'
  },
  {
    id: 4,
    label: 'Contributors',
    value: 40,
    percentage: 5,
    icon: FiUsers,
    description: 'Total contributors'
  }
]

export const overviewData: OverviewDataType[] = [
  {
    id: 1,
    title: 'Number of Projects',
    value: Intl.NumberFormat().format(9851)
  },
  {
    id: 2,
    title: 'Number of Teams',
    value: Intl.NumberFormat().format(211)
  },
  {
    id: 3,
    title: 'Number of Members',
    value: Intl.NumberFormat().format(322)
  },
  {
    id: 4,
    title: 'Number of Repositories',
    value: Intl.NumberFormat().format(120)
  }
]

export const overviewCartData: OverviewCartType[] = [
  {
    id: 1,
    title: 'january',
    value: 12_000,
    completed: 10_000,
    ongoing: 2_000
  },
  {
    id: 2,
    title: 'february',
    value: 10_000,
    completed: 8_000,
    ongoing: 2_000
  },
  {
    id: 3,
    title: 'march',
    value: 8_000,
    completed: 6_000,
    ongoing: 2_000
  },
  {
    id: 4,
    title: 'april',
    value: 15_000,
    completed: 13_000,
    ongoing: 2_000
  },
  {
    id: 5,
    title: 'may',
    value: 13_000,
    completed: 11_000,
    ongoing: 2_000
  },
  {
    id: 6,
    title: 'june',
    value: 14_000,
    completed: 12_000,
    ongoing: 2_000
  },
  {
    id: 7,
    title: 'july',
    value: 12_000,
    completed: 10_000,
    ongoing: 2_000
  },
  {
    id: 8,
    title: 'august',
    value: 10_000,
    completed: 8_000,
    ongoing: 2_000
  },
  {
    id: 9,
    title: 'september',
    value: 8_000,
    completed: 6_000,
    ongoing: 2_000
  },
  {
    id: 10,
    title: 'october',
    value: 15_000,
    completed: 13_000,
    ongoing: 2_000
  },
  {
    id: 11,
    title: 'november',
    value: 13_000,
    completed: 11_000,
    ongoing: 2_000
  },
  {
    id: 12,
    title: 'december',
    value: 14_000,
    completed: 12_000,
    ongoing: 2_000
  }
]
