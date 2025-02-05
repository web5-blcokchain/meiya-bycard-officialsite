export default function useRedirect() {
  const router = useRouter()

  return {
    register() {
      router.push('/register')
    },
    login() {
      router.push('/login')
    },
    callback() {
      window.location.href = 'https://t.me/overloader9'
    },
    showdoc() {
      window.location.href = 'https://www.showdoc.com.cn/bycard'
    }
  }
}
