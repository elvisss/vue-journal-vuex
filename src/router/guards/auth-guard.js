const authGuard = async(_to, _from, next) => {
  const isAuthenticated = !!localStorage.getItem('idToken')

  if (!isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
}

export default authGuard
