import { Link } from 'react-router-dom'
import '../styles/components/footer.scss'

const Footer = () => {
  return (
    <div>
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
        a Sai Shravan production Thefacebook.com © 2023
      </div>
    </div>
  )
}

export default Footer
