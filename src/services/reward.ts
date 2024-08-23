import http from './axios'
import type Reward from "@/types/reward"


async function findAll() {
  const res = await http.get<Reward[]>(`/reward`);
  return res.data;
}


export default {
  findAll,
}