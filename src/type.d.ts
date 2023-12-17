export interface IProduct {
  [index: string | number]:
    | string
    | number
    | boolean
    | RequiredDocument[]
    | ILaboratory[]
    | undefined

  _id?: string
  productname: string
  keyword: string
  certificationCategory: string
  category: string
  substitution: boolean
  sample: string
  period: string
  expectedCost: string
  requiredDocument: RequiredDocument[]
  testingLaboratory: ILaboratory[]
  tip: string
  description: string
  isDelete: boolean
}

export interface RequiredDocument {
  [key: string]: string | number | boolean | undefined
  _id?: string
  documentName: string
  description: string
  imageUrl: string
}

export interface ILaboratory {
  [index: string | number]: string | undefined

  _id?: string
  laboratoryName: string
  laboratoryEngName: string
  telephoneNumber: string
  address: string
  homepageUrl: string
  workScope: string
  description: string
}

export interface PageRequestArgs {
  page?: number
  itemsPerPage: number
  sortField: string
  sortOrder: 0 | 1 | -1 | null | undefined
  globalFilter: string
}

export interface IUser {
  [key: string]: string | number | boolean | undefined
  _id?: string
  username: string
  password: string
  accessToken?: string
  accessTokenExpiredAt?: Date
  email: string
  createdAt: Date
  updatedAt: Date
  isDelete: boolean
  deletedAt: Date
}

interface LoginInfo {
  [index: string | number]: string | undefined
  password: string
  email: string
}

interface ProductDetails {
  [index: string | number]: string | undefined
  category?: string
  certificationCategory?: string
  createdAt?: string
  deletedAt?: string
  description?: string
  expectedCost?: string
  isDelete?: string
  keyword?: string
  period?: string
  productname?: string
  requiredDocument?: string[]
  sample?: string
  substitution?: string
  testingLaboratory?: string[]
  tip?: string
  updatedAt?: string
}

interface IRequestInformation {
  [index: string]: string
  _id?: string
  productName: string
  content: string
  user: string
  reply: string
}

export interface IProject {
  _id?: string
  projectname: string
  requestUser: IUser
  modelName: string
  manufacture: string
  projectNumber: string
  projectStartDate: Date
  projectStatus: boolean
  projectItems: IProjectItem[]
  createdAt: Date
  updatedAt: Date
  checkDate: Date
  certType: string[]
  [index: string | number]: string | number | boolean | Date | any | undefined
}

export interface IProjectItem {
  id?: string
  projectItemName: string
  checkdate: Date
  sample: boolean
  document: boolean
  processedStage: string
  requestUser: IUser
  status: boolean
  description: string
  createdAt: Date
  updatedAt: Date
  project: IProject
}

export interface Notice {
  id?: string
  title: string
  content: string
}

export interface Faq {
  id?: string
  question: string
  answer: string
}

export interface WrongInformation {
  id?: string
  title: string
  content: string
  productName: string
  requestUser: IUser
  product: IProduct
  reply: string
}

export interface IRequestInformation {
  id?: string
  title: string
  content: string
  productName: string
  requestUser: IUser
  reply: string
}
