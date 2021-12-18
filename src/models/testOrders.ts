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
  weddingDate: '11.11.2022',
  newlyweds: 'A and B',
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
  prepayment: 30000,
  price: 60000,
  colorization: true,
  startEdit: true,
  music: true,
  editPreferences: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio',
  termsOfReference: {
    file_name: 'ci.json',
    mime_type: 'application/json',
    file_id: 'BQACAgUAAxkBAAINRmG6OetrFj4yCe0vzW8oD_ZJ-JEqAAK0AwACh-LZVSpT70KNMXUXIwQ',
    file_unique_id: 'AgADtAMAAofi2VU',
    file_size: 172380
  },
  lut: {
    file_name: 'ci.lut',
    mime_type: 'lut',
    file_id: 'BQACAgUAAxkBAAsINRmGsgegedgvzW8oD_ZJ-JEqAAK0AwACh-LZVSpT70KNMXUXIwQ',
    file_unique_id: 'AgADtAMAAofisdfgd',
    file_size: 11111
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
