import type User from "@/types/user"
import { jwtDecode } from "jwt-decode"
import http from './axios'


function findOne(id: number) {
  return http.get(`/user/${id}`)
}

const getCurrentUser = async () => {
  const token = localStorage.getItem('token')
  if (!token) {
    return
  }
  const decode: any = jwtDecode(token)
  const user: User = decode.sub
  return user
}

export default {
  findOne, getCurrentUser
}