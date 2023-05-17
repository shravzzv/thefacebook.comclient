import '../styles/pages/login.scss'
import AuthBox from "../components/authBox"

const Login = () => {
  return <div className='login'>
    <div className='wrapper'>
      <AuthBox />

      <div className='content'>
        <h1>[ Login ]</h1>
        <form>
          <div className='form-group'>
            <label>Email:</label>
            <input type='email' />
          </div>
          <div className='form-group'>
            <label>Password:</label>
            <input type='password' />
          </div>
          <div className="buttons">
            <button type='submit'>Login</button>
            <button>Register</button>
          </div>
        </form>
        <p>If you have forgotten your password, click <a href="/login">here</a> to reset it.</p>
      </div>
    </div>
  </div>
}

export default Login
