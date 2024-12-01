import { IconType } from 'react-icons'
import {
  IoHomeOutline,
  IoSettingsOutline,
  IoPersonOutline,
  IoCartOutline,
  IoChatbubbleOutline,
  IoLogOutOutline
} from 'react-icons/io5'

export type Menu = {
  id: number
  name: string
  icon: IconType
  href?: string
  children?: Required<Omit<Menu, 'children'>>[]
}

export const menus: Menu[] = [
  {
    id: 1,
    name: 'Dashboard',
    icon: IoHomeOutline,
    href: '/dashboard'
  },
  {
    id: 2,
    name: 'Profile',
    icon: IoPersonOutline,
    children: [
      {
        id: 1,
        name: 'View Profile',
        icon: IoPersonOutline,
        href: '/dashboard/profile'
      },
      {
        id: 2,
        name: 'Edit Profile',
        icon: IoPersonOutline,
        href: '/dashboard/edit'
      }
    ]
  },
  {
    id: 3,
    name: 'Settings',
    icon: IoSettingsOutline,
    children: [
      {
        id: 1,
        name: 'Account',
        icon: IoSettingsOutline,
        href: '/dashboard/settings/account'
      },
      {
        id: 2,
        name: 'Privacy',
        icon: IoSettingsOutline,
        href: '/dashboard/settings/privacy'
      }
    ]
  },
  {
    id: 4,
    name: 'Orders',
    icon: IoCartOutline,
    children: [
      {
        id: 1,
        name: 'Current Orders',
        icon: IoCartOutline,
        href: '/dashboard/orders/current'
      },
      {
        id: 2,
        name: 'Order History',
        icon: IoCartOutline,
        href: '/dashboard/orders/history'
      }
    ]
  },
  {
    id: 5,
    name: 'Messages',
    icon: IoChatbubbleOutline,
    children: [
      {
        id: 1,
        name: 'Inbox',
        icon: IoChatbubbleOutline,
        href: '/dashboard/messages/inbox'
      },
      {
        id: 2,
        name: 'Sent',
        icon: IoChatbubbleOutline,
        href: '/dashboard/messages/sent'
      }
    ]
  },
  {
    id: 6,
    name: 'Help',
    icon: IoChatbubbleOutline,
    href: '/dashboard/help'
  },
  {
    id: 7,
    name: 'Reports',
    icon: IoSettingsOutline,
    href: '/dashboard/reports'
  },
  {
    id: 8,
    name: 'Notifications',
    icon: IoChatbubbleOutline,
    href: '/dashboard/notifications'
  },
  {
    id: 9,
    name: 'Analytics',
    icon: IoSettingsOutline,
    href: '/dashboard/analytics'
  },
  {
    id: 10,
    name: 'Products',
    icon: IoCartOutline,
    children: [
      {
        id: 1,
        name: 'New Arrivals',
        icon: IoCartOutline,
        href: '/dashboard/products/new'
      },
      {
        id: 2,
        name: 'Best Sellers',
        icon: IoCartOutline,
        href: '/dashboard/products/best'
      }
    ]
  },
  {
    id: 11,
    name: 'Admin',
    icon: IoPersonOutline,
    children: [
      {
        id: 1,
        name: 'User Management',
        icon: IoPersonOutline,
        href: '/dashboard/admin/users'
      },
      {
        id: 2,
        name: 'Roles',
        icon: IoPersonOutline,
        href: '/dashboard/admin/roles'
      }
    ]
  },
  {
    id: 12,
    name: 'Logout',
    icon: IoLogOutOutline,
    href: '/dashboard/logout'
  }
]
