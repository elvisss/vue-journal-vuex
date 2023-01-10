const authGuard = (to, _from, next) => {
  const isAuthenticated = !!localStorage.getItem('idToken')

  if (!isAuthenticated) {
    return {
      name: 'login',
      query: {
        redirect: to.fullPath
      }
    }
  } else {
    next()
  }
}

export default authGuard
