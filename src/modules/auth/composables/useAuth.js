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

  return {
    // methods
    createUser,
    loginUser,
  }
}

export default useAuth
