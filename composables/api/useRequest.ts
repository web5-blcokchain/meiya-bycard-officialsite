import { message } from 'ant-design-vue'
import axios from 'axios'

const runtimeConfig = useRuntimeConfig()

const instance = axios.create({
  baseURL: runtimeConfig.public.apiBase
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
