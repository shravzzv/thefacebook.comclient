import { createContext, useContext, useReducer } from 'react'

const AuthContext = createContext(null)
const AuthDispatchContext = createContext(null)

const authReducer = (user, action) => {
  switch (action.type) {
    case 'USER_REGISTERED':
    case 'USER_LOGGED_IN': {
      const { accessToken, refreshToken, user: { email, profile } } = action.payload.data
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      localStorage.setItem('email', email)
      localStorage.setItem('profile', profile)
      return email
    }
    case 'USER_LOGGED_OUT': {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('email')
      localStorage.removeItem('profile')
      return null
    }
    default: {
      throw new Error(`Unknown action type: ${action.type}`);
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
  const initialState = localStorage.getItem('email') || null
  const [user, dispatch] = useReducer(authReducer, initialState)

  return (
    <AuthContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  )
}