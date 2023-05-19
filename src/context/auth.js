import { createContext, useContext, useReducer } from 'react'

export const AuthContext = createContext(null)
export const AuthDispatchContext = createContext(null)

const authReducer = (user, action) => {
  switch (action.type) {
    case 'user_registered': {
      console.info(action.payload);
      localStorage.setItem('token', action?.payload?.token)
      return action?.payload?.user
    }
    case 'user_logged_in': {
      console.info(action.payload);
      localStorage.setItem('token', action?.payload?.token)
      return action?.payload?.user
    }
    case 'user_logged_out': {
      localStorage.removeItem('token')
      return initialState
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
  const [user, dispatch] = useReducer(authReducer, initialState)

  return (
    <AuthContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  )
}
const initialState = null