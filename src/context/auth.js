import { createContext, useContext, useReducer } from 'react'

export const AuthContext = createContext(null)
export const AuthDispatchContext = createContext(null)

const authReducer = (user, action) => {
  switch (action.type) {
    case 'user_registered': {
        console.log(action)
      return user
    }
    case 'user_loggedin': {
      return user
    }
    case 'user_loggedout': {
      return user
    }
    default: {
      throw Error('Unknown action in reducer: ' + action.type)
    }
  }
}

// Custom hooks for useContext
export const useAuth = () => {
  return useContext(AuthContext)
}
export const useAuthDispatch = () => {
  return useContext(AuthDispatchContext)
}

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(authReducer, defaultUser)

  return (
    <AuthContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  )
}

const defaultUser = {
  email: 'johndoe@harvard.edu',
  password: 'password345',
}
