import { UserOrder, Orders } from '../types/Orders'
import { User } from '@grammyjs/types'
import { v4 } from 'uuid'

const testUser: User = {
  id: 11111111,
  is_bot: false,
  first_name: 'first_name',
  last_name: 'last_name',
  username: 'username',
  language_code: 'en'
}

const testUserOrder: UserOrder = {
  title: 'default',
  date: new Date(),
  weddingDate: new Date(),
  details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio',
  comments: {
    userComments: [
      {
        date: new Date(),
        userComment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
      },
      {
        date: new Date(),
        userComment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
      },
      {
        date: new Date(),
        userComment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
      }
    ],
    editorComments: [
      {
        date: new Date(),
        userComment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
      },
      {
        date: new Date(),
        editorComment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
      },
      {
        date: new Date(),
        editorComment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
      }
    ],
    managerComments: [
      {
        date: new Date(),
        managerComment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
      },
      {
        date: new Date(),
        managerComment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
      },
      {
        date: new Date(),
        managerComment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
      }
    ]
  },
  duration: 15, // minutes
  numberOfCameras: 1,
  numberOfDrones: 1,
  price: 30000,
  colorization: true,
  startEdit: true,
  music: true,
  editPreferences: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio',
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

const testUserOrders = { '22222222': testUserOrder }

export const testOrders: Orders = {
  '1111111': {
    user: testUser,
    orders: testUserOrders
  }
}
