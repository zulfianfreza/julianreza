import { IconType } from 'react-icons'
import * as icon from 'react-icons/si'

declare interface ITechStack {
  name: string
  icon: IconType | any
  color: string
}

declare interface IProject {
  title: string
  slug: string
  image?: string
  summary: string
  repo?: string
  demo?: string
  finish?: boolean
}

declare interface ISocial {
  name: string
  url: string
}

declare interface IPost {
  title: string
  slug: string
  summary: string
  date: Date
  content: string
}
