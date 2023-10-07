import { api } from './api'
import { IProduct } from '../type'

interface ProductResponse {
  status: string
  msg: IProduct[]
}

const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    findProduct: build.query<ProductResponse, string>({
      query: (keyword: string) => `/product/find/${keyword}`,
      providesTags: (result?: ProductResponse) =>
        (result
          ? result?.msg
              ?.map(({ _id }) => ({ type: 'Product' as const, id: _id }))
              .concat({ type: 'Product', id: 'LIST' })
          : [{ type: 'Product', id: 'LIST' }]),
    }),
    findProductById: build.query<
      { status: string; msg: { totalNumber: number; products: IProduct[] } },
      string
    >({
      query: (id: string) => `/product/product/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Product', id: id }],
    }),
    deleteProduct: build.mutation<ProductResponse, string>({
      query: (id: string) => ({
        url: `/product/product/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, arg) => [{ type: 'Product', id: arg }],
    }),
    updateProduct: build.mutation<ProductResponse, IProduct>({
      query: (body: IProduct) => ({
        url: `/product/product/${body._id}`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: (_result, _error, arg) => [
        { type: 'Product', id: arg._id },
      ],
    }),
    createProduct: build.mutation<ProductResponse, Partial<IProduct>>({
      query: (body: Partial<IProduct>) => ({
        url: `/product/product`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: [{ type: 'Product', id: 'LIST' }],
    }),
    deleteProducts: build.mutation<ProductResponse, string[]>({
      query: (ids: string[]) => ({
        url: `/product/delete`,
        method: 'POST',
        body: ids,
      }),
      invalidatesTags: (_result, _error, arg) =>
        arg.map((_id) => ({ type: 'Product', id: _id })),
    }),
  }),
})

export const { useFindProductQuery } = productApi
