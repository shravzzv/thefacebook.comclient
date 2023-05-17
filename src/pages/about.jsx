import '../styles/pages/footer_pages.scss'
import AuthBox from '../components/authBox'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
      <div className='wrapper'>
        <AuthBox />

        <div className='content'>
          <h1>[ About ]</h1>
          <div className='card'>
            <p className='title'>The Project</p>
            <div className='info'>
              <p>This is a reproduction of an early version of facebook.</p>
              <p>Thefacebook is an online directory that connects people through social networks at colleges and universities.</p>
            </div>
          </div>
          <div className="card">
            <p className="title">The People</p>
            <div className="info">
              <p><Link to="/contact">Sai Shravan</Link> The person behind this project</p>
            </div>
          </div>
          <button><Link to="/">Home</Link></button>
        </div>
      </div>
    </div>
  )
}

export default About
