import { useStore } from 'vuex'

const useAuth = () => {
  const store = useStore()

  const createUser = async (user) => {
    const res = await store.dispatch('auth/createUser', user)
    return res
  }

  const loginUser = async (user) => {
    const res = await store.dispatch('auth/loginUser', user)
    return res
  }

  const logoutUser = () => {
    store.commit('auth/logoutUser')
  }

  return {
    // methods
    createUser,
    loginUser,
    logoutUser,
  }
}

export default useAuth
