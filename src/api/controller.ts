import axios, { AxiosResponse } from 'axios'
import * as env from '../environment/environment'

export function api(path: string, args: IArguments) {
  axios
    .post(env.serverUri + path, args[0])
    .then((result) => process(path, result, args))
    .catch((err) => { args[2](err) })
}

async function process(path: string, result: AxiosResponse, args: IArguments) {
  if (result.data.status == 200) {
    args[1](result.data)
  } else if (result.data.status == 401) {
    const retryResult = await axios.post(env.serverUri + path, args[0]) //한번 더 요청
    if (retryResult.data.status == 200) {
      args[1](result.data)
    } else {
      args[2](result.data.msg) //두번 실패
    }
  } else {
    args[2](result.data.msg)
  }
}
