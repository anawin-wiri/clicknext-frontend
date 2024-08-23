import http from './axios'
import type Reward from "@/types/reward"
import { format, parseISO, addYears } from 'date-fns'
import { th } from 'date-fns/locale'

async function findAll() {
  const res = await http.get<Reward[]>(`/reward`);
  return res.data;
}

async function findOne(id: number) {
  const res = await http.get(`/reward/${id}`);
  return res.data;
}

function toLocalDate(date: any, type: any) {
  if (date != undefined) {
    const ISODate = parseISO(date.toString())

    const formattedDate = ISODate.toLocaleString('th-TH', {
      year: 'numeric',
      month: type,
      day: 'numeric'
    })
    return formattedDate.replace(/(\d{1,2}:\d{2})/, '$1 น.')
  } else {
    return null
  }
}

export default {
  findAll, findOne, toLocalDate
}