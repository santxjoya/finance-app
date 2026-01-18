import { api } from './client'

export const signInRequest = async (email: string, password: string) => {
  const res = await api.post('auth/signin', { email, password })
  return res.data
}
