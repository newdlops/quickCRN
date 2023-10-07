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
