import { api } from './api'
import { Inquiry } from '../type'

interface InquiryResponse {
  status: string
  msg: Inquiry[]
}

interface InquiryDetailResponse {
  status: string
  msg: {
    totalNumber: number
    inquiry: Inquiry
  }
}

const inquiryApi = api.injectEndpoints({
  endpoints: build => ({
    createInquiry: build.mutation<InquiryResponse, Partial<Inquiry>>({
      query: (body: Partial<Inquiry>) => ({
        url: `/inquiry/inquiry`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: [{ type: 'Inquiry', id: 'LIST' }],
    }),
    getDetailInquiry: build.query<InquiryDetailResponse, string>({
      query: (id: string) => `/inquiry/inquiry/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Inquiry', id: id }],
    }),
    findInquiriesByUser: build.query<InquiryResponse, any>({
      query: (userid: string) => `/inquiry/inquiryByUser/${userid}`,
      providesTags: (result?: InquiryResponse) => (result ? result?.msg?.map(({_id}) => ({ type: 'Inquiry' as const, id: _id })).concat({ type:'Inquiry', id: 'LIST'}) : [{ type:'Inquiry', id: 'LIST' }]),
    }),
    updateInquiry: build.mutation<InquiryResponse, Partial<Inquiry>>({
      query: (body: Partial<Inquiry>) => ({
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
