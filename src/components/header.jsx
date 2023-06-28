import { Link } from 'react-router-dom'
import '../styles/components/header.scss'
import { useAuth, useAuthDispatch } from '../context/auth'

const Header = () => {
  const token = useAuth()
  const dispatch = useAuthDispatch()

  const handleclick = () => {
    dispatch({ type: 'USER_LOGGED_OUT' })
  }

  return (
    <div className='header'>
      <div className='wrapper'>
        <img
          src='/assets/header logo_left.jpeg'
          alt='header left'
          className='left'
        />

        <div className='right'>
          <img src='/assets/header logo_right.jpeg' alt='the facebook logo' />
          <div className='links'>
            <Link to='/testprofile' className='link'>
              test profile
            </Link>
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
            {token && (
              <Link to='/' className='logout' onClick={handleclick}>
                logout
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
