const { axios } = useRequest()

export const customersApi = {
  register(data: Record<string, any>) {
    return axios.post('/customers/register', data)
  }
}
