import { Link } from 'react-router-dom'
import '../styles/components/header.scss'

const Header = () => {
  // Component logic

  return (
    <div className='header'>
      <div className='wrapper'>
        <img src='/assets/header logo_left.jpeg' alt='header left' />

        <div className='right'>
          <img src='/assets/header logo_right.jpeg' alt='the facebook logo' />
          <div className='links'>
            <Link to='/' className='link'>
              Home
            </Link>
            <Link to='/login' className='link'>
              login
            </Link>
            <Link to='/register' className='link'>
              register
            </Link>
            <Link to='/about' className='link'>
              about
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
