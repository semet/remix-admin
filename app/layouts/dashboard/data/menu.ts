import { IconType } from 'react-icons'
import {
  RiAlignTop,
  RiBookReadLine,
  RiDashboard2Line,
  RiFileList3Line,
  RiLayoutGridLine,
  RiPagesLine,
  RiPencilRuler2Line,
  RiPieChart2Line,
  RiQuestionnaireLine
} from 'react-icons/ri'

import { Variant } from '~/types'

export type Menu = {
  id: number
  name: string
  icon: IconType
  href?: string
  badge?: string
  badgeVariant?: Variant
  subs?: {
    id: number
    name: string
    href: string
    badge?: string
    badgeVariant?: Variant
  }[]
}

export const menus: Menu[] = [
  {
    id: 1,
    name: 'Dashboard',
    icon: RiDashboard2Line,
    href: '/dashboard',
    badge: 'New',
    badgeVariant: 'success'
  },
  {
    id: 2,
    name: 'Base UI',
    icon: RiPencilRuler2Line,
    subs: [
      {
        id: 3,
        name: 'Alerts',
        href: '/dashboard/base-ui/alerts'
      },
      {
        id: 4,
        name: 'Buttons',
        href: '/dashboard/base-ui/buttons'
      },
      {
        id: 5,
        name: 'Cards',
        href: '/dashboard/base-ui/cards'
      },
      {
        id: 6,
        name: 'Tabs',
        href: '/dashboard/base-ui/tabs'
      },
      {
        id: 7,
        name: 'Modal',
        href: '/dashboard/base-ui/modal'
      },
      {
        id: 8,
        name: 'Side Panel',
        href: '/dashboard/base-ui/side-panel'
      }
    ]
  },
  {
    id: 11,
    name: 'Forms',
    icon: RiFileList3Line,
    subs: [
      {
        id: 12,
        name: 'Inputs',
        href: '/dashboard/forms/basic-inputs'
      },
      {
        id: 13,
        name: 'Selects',
        href: '/dashboard/forms/select-inputs'
      },
      {
        id: 14,
        name: 'Textarea & Editors',
        href: '/dashboard/forms/text-editor'
      },
      {
        id: 15,
        name: 'Checkboxes',
        href: '/dashboard/forms/checkboxes'
      },
      {
        id: 16,
        name: 'Radios',
        href: '/dashboard/forms/radios'
      },
      {
        id: 17,
        name: 'Switches',
        href: '/dashboard/forms/switches'
      },
      {
        id: 18,
        name: 'Date Pickers',
        href: '/dashboard/forms/date-pickers'
      },
      {
        id: 21,
        name: 'File Inputs',
        href: '/dashboard/forms/file-inputs'
      }
    ]
  },
  {
    id: 22,
    name: 'React Tables',
    icon: RiLayoutGridLine,
    subs: [
      {
        id: 23,
        name: 'Basic Table',
        href: '/dashboard/tables/basic'
      },
      {
        id: 25,
        name: 'Sortable',
        href: '/dashboard/tables/sortable'
      },
      {
        id: 26,
        name: 'Selectable',
        href: '/dashboard/tables/selectable'
      },
      {
        id: 29,
        name: 'Expandable',
        href: '/dashboard/tables/expandable'
      },
      {
        id: 30,
        name: 'Infinite Scroll',
        href: '/dashboard/tables/infinite-scroll'
      }
    ]
  },
  {
    id: 34,
    name: 'Charts',
    icon: RiPieChart2Line,
    href: '/dashboard/charts'
  },
  {
    id: 35,
    name: 'Pages',
    icon: RiPagesLine,
    subs: [
      {
        id: 36,
        name: 'Sign In',
        href: '/login'
      },
      {
        id: 37,
        name: 'Sign Up',
        href: '/register'
      },
      {
        id: 38,
        name: 'Reset Password',
        href: '/reset-password'
      },
      {
        id: 40,
        name: '404',
        href: '/random-non-existing-page'
      }
    ]
  },
  {
    id: 42,
    name: 'Documentation',
    icon: RiBookReadLine,
    href: '/documentation'
  },
  {
    id: 43,
    name: 'Support',
    icon: RiAlignTop,
    href: '/support'
  },
  {
    id: 44,
    name: 'Help',
    icon: RiQuestionnaireLine,
    href: '/help'
  }
]
