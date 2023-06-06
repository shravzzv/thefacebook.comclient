import { createContext, useContext, useReducer } from 'react'

const AuthContext = createContext(null)
const AuthDispatchContext = createContext(null)

const initialState = localStorage.getItem('accessToken') || null

const authReducer = (token, action) => {
  switch (action.type) {
    case 'USER_REGISTERED':
    case 'USER_LOGGED_IN': {
      const { accessToken } = action.payload
      localStorage.setItem('accessToken', accessToken)
      return accessToken
    }
    case 'USER_LOGGED_OUT': {
      localStorage.removeItem('accessToken')
      return initialState
    }
    default: {
      throw new Error(`Unknown action type: ${action.type}`)
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
  const [token, dispatch] = useReducer(authReducer, initialState)

  return (
    <AuthContext.Provider value={token}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  )
}
