import { api } from './api'
import { IProject } from '../type'

interface ProjectResponse {
  status: string
  msg: IProject[]
}

interface ProjectDetailResponse {
  status: string
  msg: IProject
}

const projectApi = api.injectEndpoints({
  endpoints: build => ({
    findProjectByUserId: build.query<ProjectResponse, string>({
      query: (userid: string) => `/project/projectByUser/${userid}`,
      providesTags: _result =>
        _result
          ? _result.msg
              ?.map(({ _id }) => ({ type: 'Project' as const, id: _id }))
              .concat({ id: 'LIST', type: 'Project' })
          : [{ type: 'Project', id: 'LIST' }],
    }),
    findProjectById: build.query<ProjectDetailResponse, string>({
      query: (id: string) => `/project/project/${id}`,
      providesTags: (_result, _error, id) => [{type: 'Project', id: id}],
    }),
  }),
})

export const { useFindProjectByUserIdQuery, useFindProjectByIdQuery } = projectApi
