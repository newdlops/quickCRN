import { api } from './controller'

export function find(
  _params: any,
  _callback: Function,
  _errcallback: Function
) {
  api('/product/find', arguments)
}