import { User } from '@grammyjs/types'

export interface Orders {
  [userId: string]: {
    user: User
    orders: {
      [orderId: string]: UserOrder
    }
  }
}

export interface UserOrder {
  title: string
  date: Date
  weddingDate: Date
  details: string
  comments?: Comments
  duration: number
  numberOfCameras: number
  numberOfDrones: number
  prepayment: number
  price: number
  startEdit: boolean
  editPreferences?: string
  music: boolean
  colorization: boolean
  termsOfReference?: TermsOfReference
  lut?: Lut
  history?: History
}

export interface Comments {
  userComments: UserComment[]
  editorComments: EditorComment[]
  managerComments: ManagerComment[]
}

export interface UserComment {
  date: Date
  userComment: string
}

export interface EditorComment {
  date: Date
  userComment?: string
  editorComment?: string
}

export interface ManagerComment {
  date: Date
  managerComment: string
}

export interface TermsOfReference {
  userFileName: string
  storeFileName: string
  size: number
  hash: string
}

export interface Lut {
  userFileName: string
  storeFileName: string
  size: number
  hash: string
}

export interface History {
  start: string
  acceptionByEditor: string
  proxySendByEditor: string
  acceptionByUser: string
  end: string
}
