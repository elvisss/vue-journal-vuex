import { computed } from 'vue'
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
    store.commit('journal/clearEntries')
  }

  const checkAuthStatus = async() => {
    const res = await store.dispatch('auth/checkAuthentication')
    return res
  }

  return {
    authStatus: computed(() => store.getters['auth/currentState']),
    username: computed(() => store.state.auth.user?.name || ''),

    // methods
    createUser,
    loginUser,
    logoutUser,
    checkAuthStatus,
  }
}

export default useAuth
