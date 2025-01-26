export default function useRedirect() {
  return {
    register() {
      window.location.href = 'https://customer.bycard.io/#/register'
    },
    login() {
      window.location.href = 'https://customer.bycard.io/#/login'
    },
    callback() {
      window.location.href = 'https://t.me/overloader9'
    }
  }
}
