const login = ({ navigate }) => {
  return navigate('/')
}
const register = ({ navigate }) => {
  navigate('/')
}

const executeCallback = {
  login,
  register,
}

export { executeCallback }
