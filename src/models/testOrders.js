import { v4 } from 'uuid'

export const testOrders = [
  {
    id: v4(),
    title: 'default',
    date: v4(),
    weddingDate: v4(),
    details:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio',
    comments: {
      userComments: [
        {
          date: v4(),
          userComment:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
        },
        {
          date: v4(),
          userComment:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
        },
        {
          date: v4(),
          userComment:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
        }
      ],
      editorComments: [
        {
          date: v4(),
          userComment:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
        },
        {
          date: v4(),
          editorComment:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
        },
        {
          date: v4(),
          editorComment:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
        }
      ],
      managerComments: [
        {
          date: v4(),
          managerComment:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
        },
        {
          date: v4(),
          managerComment:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, distinctio'
        },
        {
          date: v4(),
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
