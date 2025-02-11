import { message } from 'ant-design-vue'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://customer.bycard.io/v1'
})

instance.interceptors.response.use(
  (response) => {
    if (_get(response.data, 'code', -1) !== 0) {
      message.error(_get(response.data, 'msg', 'Request failed'))
      return Promise.reject(response.data)
    }

    return response
  }
)

export default function useRequest() {
  return {
    axios: instance
  }
}
