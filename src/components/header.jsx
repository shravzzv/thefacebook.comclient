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
            <Link to='/'>Home</Link>
            <Link to='/login'>login</Link>
            <Link to='/register'>register</Link>
            <Link to='/about'>about</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
