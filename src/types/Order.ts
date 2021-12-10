export interface Order {
  id: string
  title: string
  date: Date
  weddingDate: Date
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
