import { api } from './api'
import { IRequestInformation } from '../type'

interface InquiryResponse {
  status: string
  msg: IRequestInformation[]
}

interface InquiryDetailResponse {
  status: string
  msg: {
    totalNumber: number
    inquiry: IRequestInformation
  }
}
/* 인쿼리 생성시 프로젝트로 생성 통합 추후 리펙토링 필요 */
const inquiryApi = api.injectEndpoints({
  endpoints: build => ({
    createInquiry: build.mutation<InquiryResponse, Partial<IRequestInformation>>({
      query: (body: Partial<IRequestInformation>) => ({
        url: `/inquiry/inquiry`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: [{ type: 'Inquiry', id: 'LIST' }, { type: 'Project', id: 'LIST' }],
    }),
    getDetailInquiry: build.query<InquiryDetailResponse, string>({
      query: (id: string) => `/inquiry/inquiry/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Inquiry', id: id }],
    }),
    findInquiriesByUser: build.query<InquiryResponse, any>({
      query: (userid: string) => `/inquiry/inquiryByUser/${userid}`,
      providesTags: (result?: InquiryResponse) => (result ? result?.msg?.map(({_id}) => ({ type: 'Inquiry' as const, id: _id })).concat({ type:'Inquiry', id: 'LIST'}) : [{ type:'Inquiry', id: 'LIST' }]),
    }),
    updateInquiry: build.mutation<InquiryResponse, Partial<IRequestInformation>>({
      query: (body: Partial<IRequestInformation>) => ({
        url: `/inquiry/inquiry/${body._id}`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: (_result, _error, arg) => [
        { type: 'Inquiry', id: arg._id },
      ],
    }),
  }),
})

export const {
  useCreateInquiryMutation,
  useFindInquiriesByUserQuery,
} = inquiryApi
