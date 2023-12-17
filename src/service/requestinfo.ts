import { api } from './api'
import { IRequestInformation } from '../type'

interface RequestInformationResponse {
  status: string
  msg: IRequestInformation[]
}

interface RequestInformationDetailResponse {
  status: string
  msg: {
    totalNumber: number
    requestInformation: IRequestInformation
  }
}
const requestInformationApi = api.injectEndpoints({
  endpoints: build => ({
    createRequestInformation: build.mutation<RequestInformationResponse, Partial<RequestInformation>>({
      query: (body: Partial<IRequestInformation>) => ({
        url: `/requestInformation/requestInformation`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: [{ type: 'RequestInformation', id: 'LIST' }],
    }),
    getRequestInformations: build.query<RequestInformationResponse, string>({
      query: () => `/requestInformation/requestInformations`,
      providesTags: (_result, _error, id) => [{ type: 'RequestInformation', id: id }],
    }),
    getRequestInformationByUser: build.query<
      RequestInformationResponse,
      string
    >({
      query: (userId: string) => `/requestInformation/requestInformation/${userId}`,
      providesTags: _result =>
        _result
          ? _result.msg
            ?.map(({ _id }) => ({ type: 'RequestInformation' as const, id: _id }))
            .concat({ id: 'LIST', type: 'RequestInformation' })
          : [{ type: 'RequestInformation', id: 'LIST' }],
    }),
  }),
})

export const {
  useGetRequestInformationsQuery,
  useCreateRequestInformationMutation,
  useGetRequestInformationByUserQuery,
} = requestInformationApi
