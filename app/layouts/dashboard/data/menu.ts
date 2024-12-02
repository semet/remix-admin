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

export type Menu = {
  id: number
  name: string
  icon: IconType
  href?: string
  children?: Required<Omit<Menu, 'children' | 'icon'>>[]
}

export const menus: Menu[] = [
  {
    id: 1,
    name: 'Dashboard',
    icon: RiDashboard2Line,
    href: '/dashboard'
  },
  {
    id: 2,
    name: 'Base UI',
    icon: RiPencilRuler2Line,
    children: [
      {
        id: 3,
        name: 'Alerts',
        href: '/base-ui/alerts'
      },
      {
        id: 4,
        name: 'Buttons',
        href: '/base-ui/buttons'
      },
      {
        id: 5,
        name: 'Cards',
        href: '/base-ui/cards'
      },
      {
        id: 6,
        name: 'Tabs',
        href: '/base-ui/tabs'
      },
      {
        id: 7,
        name: 'Modal',
        href: '/base-ui/modal'
      },
      {
        id: 8,
        name: 'Side Panel',
        href: '/base-ui/side-panel'
      },
      {
        id: 9,
        name: 'Tooltips',
        href: '/base-ui/tooltips'
      },
      {
        id: 10,
        name: 'Dropdowns',
        href: '/base-ui/dropdown'
      }
    ]
  },
  {
    id: 11,
    name: 'Forms',
    icon: RiFileList3Line,
    children: [
      {
        id: 12,
        name: 'Inputs',
        href: '/forms/inputs'
      },
      {
        id: 13,
        name: 'Selects',
        href: '/forms/selects'
      },
      {
        id: 14,
        name: 'Textareas',
        href: '/forms/textareas'
      },
      {
        id: 15,
        name: 'Checkboxes',
        href: '/forms/checkboxes'
      },
      {
        id: 16,
        name: 'Radios',
        href: '/forms/radios'
      },
      {
        id: 17,
        name: 'Switches',
        href: '/forms/switches'
      },
      {
        id: 18,
        name: 'Date Pickers',
        href: '/forms/date-pickers'
      },
      {
        id: 19,
        name: 'Time Pickers',
        href: '/forms/time-pickers'
      },
      {
        id: 20,
        name: 'Date Time Pickers',
        href: '/forms/date-time-pickers'
      },
      {
        id: 21,
        name: 'File Uploads',
        href: '/forms/file-uploads'
      }
    ]
  },
  {
    id: 22,
    name: 'React Tables',
    icon: RiLayoutGridLine,
    children: [
      {
        id: 23,
        name: 'Simple Table',
        href: '/tables/simple-table'
      },
      {
        id: 24,
        name: 'React Table Basic',
        href: '/tables/react-table'
      },
      {
        id: 25,
        name: 'With Sorting',
        href: '/tables/react-table-sorting'
      },
      {
        id: 26,
        name: 'With Filtering',
        href: '/tables/react-table-filtering'
      },
      {
        id: 27,
        name: 'With Pagination',
        href: '/tables/react-table-pagination'
      },
      {
        id: 28,
        name: 'With Row Selection',
        href: '/tables/react-table-row-selection'
      },
      {
        id: 29,
        name: 'With Column Order',
        href: '/tables/react-table-column-order'
      },
      {
        id: 30,
        name: 'With Row Details',
        href: '/tables/react-table-row-details'
      },
      {
        id: 31,
        name: 'Editable',
        href: '/tables/react-table-editable'
      },
      {
        id: 32,
        name: 'Server Side Pagination',
        href: '/tables/react-table-server-side-pagination'
      },
      {
        id: 33,
        name: 'Server Side Sorting',
        href: '/tables/react-table-server-side-sorting'
      }
    ]
  },
  {
    id: 34,
    name: 'Charts',
    icon: RiPieChart2Line,
    href: '/charts'
  },
  {
    id: 35,
    name: 'Pages',
    icon: RiPagesLine,
    children: [
      {
        id: 36,
        name: 'Sign In',
        href: '/pages/sign-in'
      },
      {
        id: 37,
        name: 'Sign Up',
        href: '/pages/sign-up'
      },
      {
        id: 38,
        name: 'Forgot Password',
        href: '/pages/forgot-password'
      },
      {
        id: 39,
        name: 'Reset Password',
        href: '/pages/reset-password'
      },
      {
        id: 40,
        name: '404',
        href: '/pages/404'
      },
      {
        id: 41,
        name: '500',
        href: '/pages/500'
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
