import { v4 } from 'uuid'

export interface Order {
  id: string
  title: string
  date: Date
  weddingDate: string
  details: string
  comments: Comments
  duration: number
  numberOfCameras: number
  numberOfDrones: number
  price: number
  colorization: boolean
  edit: boolean
  termsOfReference: TermsOfReference
  lut: Lut
  history: History
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

export const testOrders: [Order] = [
  {
    id: v4(),
    title: 'default',
    date: new Date(),
    weddingDate: v4(),
    details:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio',
    comments: {
      userComments: [
        {
          date: new Date(),
          userComment:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
        },
        {
          date: new Date(),
          userComment:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
        },
        {
          date: new Date(),
          userComment:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
        }
      ],
      editorComments: [
        {
          date: new Date(),
          userComment:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
        },
        {
          date: new Date(),
          editorComment:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
        },
        {
          date: new Date(),
          editorComment:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
        }
      ],
      managerComments: [
        {
          date: new Date(),
          managerComment:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
        },
        {
          date: new Date(),
          managerComment:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
        },
        {
          date: new Date(),
          managerComment:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
        }
      ]
    },
    duration: 15, // minutes
    numberOfCameras: 1,
    numberOfDrones: 1,
    price: 30000,
    colorization: true,
    edit: true,
    termsOfReference: {
      userFileName: 'Техническое задание',
      storeFileName: 'termsOfReference' + v4(),
      size: 123123123, // bytes
      hash: v4() // TODO: change to hash function depending of file size and date of file recievement
    },
    lut: {
      userFileName: 'Техническое задание',
      storeFileName: 'termsOfReference' + v4(),
      size: 123123123, // bytes
      hash: v4() // TODO: change to hash function depending of file size and date of file recievement
    },
    history: {
      start: v4(),
      acceptionByEditor: v4(),
      proxySendByEditor: v4(),
      acceptionByUser: v4(),
      end: v4()
    }
  }
]
