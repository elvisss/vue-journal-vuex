const noAuthGuard = (_to, _from, next) => {
  const isAuthenticated = !!localStorage.getItem('idToken')

  if (isAuthenticated) {
    next({ name: 'home' })
  } else {
    next()
  }
}

export default noAuthGuard
