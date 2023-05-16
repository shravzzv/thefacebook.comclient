import { Link } from 'react-router-dom'
import '../styles/pages/home.scss'
import AuthBox from '../components/authBox'

const Home = () => {
  return (
    <div className='home'>
      <div className='wrapper'>
        <AuthBox />

        <div className='content'>
          <p className='top'>Welcome to Thefacebook!</p>
          <div className='main'>
            <h1>[ Welcome to Thefacebook ]</h1>
            <p>
              Thefacebook is an online directory that connects people through
              social networks at colleges
            </p>
            <p>
              We have recently opened up Thefacebook at the following schools:
            </p>
            <p className='schools'>
              Arizona • Arizona State • Bryn Mawr • CU Boulder • Drexel • Loyola
              Marymount • Miami • Mt. Holoyoke • Trinity College
            </p>
            <p>
              For a complete list of supported schools, click{' '}
              <a href='/'>here</a>
            </p>
            <p>Your facebook is limited to your won college or university</p>
            <p>You can use TheFacebook to:</p>
            <ul>
              <li>Search for people at your school</li>
              <li>find out who is in your classes</li>
              <li>Look up your friends' friends</li>
              <li>See a visualization of your social network</li>
            </ul>
            <p>
              To get started, click below to register. If you have already
              registered, you can log in.
            </p>
            <div className='buttons'>
              <Link to='/register'>
                <button>Register</button>
              </Link>
              <Link to='/login'>
                <button>Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
