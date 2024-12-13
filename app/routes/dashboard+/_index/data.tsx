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
