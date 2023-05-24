import { Link } from 'react-router-dom'
import '../styles/components/footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='wrapper'>
        <div className='links'>
          <Link to='/about'>about</Link>
          <Link to='/contact'>contact</Link>
          <Link to='/faq'>faq</Link>
          <Link to='/media'>advertise</Link>
          <Link to='/terms'>terms</Link>
          <Link to='/policy'>privacy</Link>
          <Link to='/profile'>test profile</Link>
        </div>
        <div className='legal'>
          <p>a Sai Shravan production</p>
          <p>Thefacebook.com © 2023</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
