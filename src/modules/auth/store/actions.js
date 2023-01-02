import authApi from '@/api/authApi'

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
/*
export const logoutUser = async ({ commit }) => {
  commit
} */
