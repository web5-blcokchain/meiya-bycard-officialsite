import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://customer.bycard.io/v1'
})

export default function useRequest() {
  return {
    axios: instance
  }
}
