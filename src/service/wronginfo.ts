import { api } from './api'
import { WrongInformation } from '../type'

interface WrongInformationResponse {
  status: string
  msg: WrongInformation[]
}

interface WrongInformationDetailResponse {
  status: string
  msg: {
    totalNumber: number
    wrongInformation: WrongInformation
  }
}
const wrongInformationApi = api.injectEndpoints({
  endpoints: build => ({
    createWrongInformation: build.mutation<WrongInformationResponse, Partial<WrongInformation>>({
      query: (body: Partial<WrongInformation>) => ({
        url: `/wrongInformation/wrongInformation`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: [{ type: 'WrongInformation', id: 'LIST' }, { type: 'Project', id: 'LIST' }],
    }),
    getWrongInformations: build.query<WrongInformationResponse, string>({
      query: () => `/wrongInformation/wrongInformations`,
      providesTags: (_result, _error, id) => [{ type: 'WrongInformation', id: id }],
    }),
    getWrongInformationByUser: build.query<WrongInformationDetailResponse, string>({
      query: (userId: string) => `/wrongInformation/wrongInformation/${userId}`,
      providesTags: (_result, _error, id) => [{ type: 'WrongInformation', id: id }],
    }),
  }),
})

export const {
  useGetWrongInformationByUserQuery,
  useCreateWrongInformationMutation,
} = wrongInformationApi
