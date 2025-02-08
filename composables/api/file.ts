const { axios } = useRequest()

export function uploadFile(file: File) {
  const formData = new FormData()
  formData.append('file', file)

  return axios.post('/common/file/public', formData)
}
