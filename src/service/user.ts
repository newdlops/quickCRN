import { api } from './api'
import { IUser, LoginInfo } from '../type'

export interface UserResponse {
  status: string
  msg: IUser[]
}

interface KaKaoLoginResponse {
  status: string
  msg: {
    user: IUser
    kakaoAccount: {
      email: string
      email_needs_agreement: boolean
      has_email: boolean
      is_email_valid: boolean
      is_email_verified: boolean
    }
  }
}

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    userKakaoLogin: build.query<KaKaoLoginResponse, string>({
      query: (token: string) => `/user/kakaoLogin/${encodeURI(token)}`,
    }),
    login: build.query({
      query: (body: LoginInfo) => ({
        url: `/user/login`,
        method: 'POST',
        body: body,
      }),
    }),
    createUser: build.query<UserResponse, Partial<IUser>>({
      query: (body: Partial<IUser>) => ({
        url: `/user/create`,
        method: 'POST',
        body: body,
      }),
    }),
    userTokenLogin: build.query<UserResponse, string>({
      query: (token: string) => `/user/userTokenLogin/${encodeURIComponent(token)}`,
    }),
    logout: build.query<UserResponse, string>({
      query: (token: string) => `/user/logout/${encodeURIComponent(token)}`,
    }),
    updateUser: build.mutation<UserResponse, Partial<IUser>>({
      query: (body: Partial<IUser>) => ({
        url: `/user/user/${body._id}`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: (_result, _error, arg) => [{ type: 'User', id: arg._id }],
    }),
  }),
})

export const {
  useLazyUserKakaoLoginQuery,
  useLazyLoginQuery,
  useLazyCreateUserQuery,
  useLazyUserTokenLoginQuery,
  useLazyLogoutQuery,
  useUpdateUserMutation,
} = userApi
