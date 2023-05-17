import '../styles/pages/about.scss'
import AuthBox from '../components/authBox'

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
              <p>Thefacebook is an online directory that connects people through social networks at colleges and universities.</p>
            </div>
          </div>
          <div className="card">
            <p className="title">The People</p>
            <div className="info">
              <p><a href="/contact">Sai Shravan</a> The person behind this project</p>
            </div>
          </div>
          <button>Home</button>
        </div>
      </div>
    </div>
  )
}

export default About
