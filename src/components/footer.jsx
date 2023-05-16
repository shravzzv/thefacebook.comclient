import { Link } from 'react-router-dom'
import '../styles/components/footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='wrapper'>
        <div className='links'>
          <Link to='/about'>about</Link>
          <Link to='/'>contact</Link>
          <Link to='/'>jobs</Link>
          <Link to='/'>faq</Link>
          <Link to='/'>advertise</Link>
          <Link to='/'>terms</Link>
          <Link to='/'>privacy</Link>
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
