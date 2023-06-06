import { useState } from 'react'
import '../styles/components/authBox.scss'
import { useAuthDispatch } from '../context/auth'
import { registerUser, loginUser } from '../api/auth'
import { useNavigate } from 'react-router-dom'

const AuthBox = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAuthDispatch()
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.')
      return
    }
    try {
      e.preventDefault()
      const { success, message, data } = await registerUser({ email, password })
      if (success) {
        dispatch({
          type: 'USER_REGISTERED',
          payload: data,
        })
        navigate('/onboarding')
      } else {
        alert(message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      e.preventDefault()
      const { success, message, data } = await loginUser(email, password)
      if (success) {
        dispatch({
          type: 'USER_LOGGED_IN',
          payload: data,
        })
        navigate('/profile')
      } else {
        alert(message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Determine the action based on the button's name or any other condition
    if (e.nativeEvent.submitter.name === 'login') {
      handleLogin(e)
    } else if (e.nativeEvent.submitter.name === 'register') {
      handleRegister(e)
    }
  }

  return (
    <form className='authBox' onSubmit={handleSubmit}>
      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor='password'>Password:</label>
      <input
        type='password'
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
        autoComplete='true'
      />

      <div>
        <button type='submit' name='login'>
          Login
        </button>
        <button type='submit' name='register'>
          Register
        </button>
      </div>
    </form>
  )
}

export default AuthBox
