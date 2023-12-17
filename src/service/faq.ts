import { api } from './api'
import { Faq } from '../type'

interface FaqResponse {
  status: string
  msg: Faq[]
}

interface FaqDetailResponse {
  status: string
  msg: {
    totalNumber: number
    faq: Faq
  }
}
const faqApi = api.injectEndpoints({
  endpoints: build => ({
    createFaq: build.mutation<FaqResponse, Partial<Faq>>({
      query: (body: Partial<Faq>) => ({
        url: `/faq/faq`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: [{ type: 'Faq', id: 'LIST' }],
    }),
    getFaqs: build.query<FaqResponse, string>({
      query: () => `/faq/faqs`,
      providesTags: (_result, _error, id) => [{ type: 'Faq', id: id }],
    }),
    getDetailFaq: build.query<FaqDetailResponse, string>({
      query: (id: string) => `/faq/faq/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Faq', id: id }],
    }),
  }),
})

export const {
  useGetFaqsQuery,
} = faqApi
