import { api } from './api'
import { Notice } from '../type'

interface NoticeResponse {
  status: string
  msg: Notice[]
}

interface NoticeDetailResponse {
  status: string
  msg: {
    totalNumber: number
    notice: Notice
  }
}
/* 인쿼리 생성시 프로젝트로 생성 통합 추후 리펙토링 필요 */
const noticeApi = api.injectEndpoints({
  endpoints: build => ({
    createNotice: build.mutation<NoticeResponse, Partial<Notice>>({
      query: (body: Partial<Notice>) => ({
        url: `/notice/notice`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: [{ type: 'Notice', id: 'LIST' }],
    }),
    getNotices: build.query<NoticeResponse, string>({
      query: () => `/notice/notices`,
      providesTags: (_result, _error, id) => [{ type: 'Notice', id: id }],
    }),
    getRecentNotice: build.query<NoticeResponse, string>({
      query: () => `/notice/recentNotice`,
      providesTags: (_result, _error, id) => [{ type: 'Notice', id: id }],
    }),
    getDetailNotice: build.query<NoticeDetailResponse, string>({
      query: (id: string) => `/notice/notice/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Notice', id: id }],
    }),
  }),
})

export const {
  useGetNoticesQuery,
  useGetRecentNoticeQuery,
} = noticeApi
