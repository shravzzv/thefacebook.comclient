import '../styles/components/authBox.scss'

const AuthBox = () => {
  return (
    <div className='authBox'>
      <label htmlFor=''>Email:</label>
      <input type='text' />
      <label htmlFor=''>Password:</label>
      <input type='password' />
      <div>
        <button>Register</button>
        <button>Login</button>
      </div>
    </div>
  )
}

export default AuthBox
