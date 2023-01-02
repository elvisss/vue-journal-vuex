import authApi from '@/api/authApi'
import { promise } from '@/helpers/promise'

export const createUser = async ({ commit }, user) => {
  const { name, email, password } = user

  try {
    const { data } = await authApi.post(':signUp', {
      email,
      password,
      returnSecureToken: true
    })

    const { idToken, refreshToken } = data

    await authApi.post(':update', {
      idToken,
      displayName: name
    })

    delete user.password

    commit('loginUser', { user, idToken, refreshToken })

    return { ok: true }
  } catch (e) {
    console.log(e.response)
    return { ok: false, message: e.response.data.error.message }
  }
}

export const loginUser = async ({ commit }, { email, password }) => {
  try {
    const { data } = await authApi.post(':signInWithPassword', {
      email,
      password,
      returnSecureToken: true
    })
    const { idToken, refreshToken, displayName } = data

    const user = {
      name: displayName,
      email
    }

    commit('loginUser', { user, idToken, refreshToken })

    return { ok: true }
  } catch (err) {
    return { ok: false, message: err.response.data.error.message }
  }
}

export const checkAuthentication = async ({ commit }) => {
  await promise(2000)

  const idToken = localStorage.getItem('idToken')
  const refreshToken = localStorage.getItem('refreshToken')

  if (!idToken || !refreshToken) {
    commit('logoutUser')
    return { ok: false, message: 'there is no token' }
  }

  try {
    const { data } = await authApi.post(':lookup', {
      idToken
    })
    const { email, displayName } = data.users[0]
    const user = {
      name: displayName,
      email
    }
    commit('loginUser', { user, idToken, refreshToken })
    return { ok: true }
  } catch (err) {
    commit('logoutUser')
    return { ok: false, message: err.response.data.error.message }
  }
}
