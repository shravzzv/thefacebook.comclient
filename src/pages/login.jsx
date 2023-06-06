import { useState } from 'react'
import '../styles/pages/login.scss'
import AuthBox from '../components/authBox'
import { useAuthDispatch } from '../context/auth'
import { loginUser } from '../api/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAuthDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
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

  return (
    <div className='login'>
      <div className='wrapper'>
        <AuthBox />

        <div className='content'>
          <h1>[ Login ]</h1>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>Email:</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='form-group'>
              <label>Password:</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete='true'
              />
            </div>
            <div className='buttons'>
              <button type='submit'>Login</button>
            </div>
          </form>
          <p>
            If you have forgotten your password, click <a href='/login'>here</a>{' '}
            to reset it.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
