const { axios } = useRequest()

export const customersApi = {
  login(data: Record<string, any>) {
    return axios.post('/customers/login', data)
  },
  register(data: Record<string, any>) {
    return axios.post('/customers/register', data)
  }
}
