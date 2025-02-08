const { axios } = useRequest()

export function register(data: Record<string, any>) {
  return axios.post('/customers/register', data)
}
