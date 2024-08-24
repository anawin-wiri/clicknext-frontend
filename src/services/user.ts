import type User from "@/types/user"
import { jwtDecode } from "jwt-decode"
import http from './axios'
import type userReward from "@/types/userReward"
import type UserReward from "@/types/userReward"


function findOne(id: number) {
  return http.get(`/users/${id}`)
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

const reducePoint = (id: number, updatedData: Partial<User>) => {
  return http.patch(`/users/${id}`, updatedData)
}

const userReward = (data: any) => {
  return http.post('/user-reward', data)
}

const getUserReward = (userId: number, rewardId: number) => {
  return http.get(`/user-reward/user/${userId}/reward/${rewardId}`)
}

const getUserRewards = (userId: number) => {
  return http.get(`/user-reward/user/${userId}`)
}



export default {
  findOne, getCurrentUser, reducePoint, userReward, getUserReward, getUserRewards
}