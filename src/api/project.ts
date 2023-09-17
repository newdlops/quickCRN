import { api } from './controller'

export function findByUser(
  _params: any,
  _callback: Function,
  _errcallback: Function
) {
  api('/project/findByUser', arguments)
}

export function getDetail(
  _params: any,
  _callback: Function,
  _errcallback: Function
) {
  api('/project/getDetail', arguments)
}