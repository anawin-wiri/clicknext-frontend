import router from "@/router";
import { defineStore } from "pinia"
import authService from "@/services/auth"
import { ca } from "date-fns/locale";

export const useAuthStore = defineStore("auth", () => {
  const login = async (username: string, password: string) => {
    try {
      const res = await authService.login(username, password)
      localStorage.setItem('token', res.data.access_token)
      router.push('/main').then(() => {
        window.location.reload()
      })
    } catch (e) {
      console.error('Login failed:', e)
    }

  }

  const logout = () => {
    localStorage.removeItem('token')
    console.log('logout')
    router.push('/login').then(() => {
      window.location.reload()
    })
  }
  return { logout, login }
});