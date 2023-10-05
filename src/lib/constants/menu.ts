export interface IMenu {
  title: string
  path: string
}

export const MENU: IMenu[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Showcase',
    path: '/showcase',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
]
