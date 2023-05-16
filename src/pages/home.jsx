import '../styles/pages/home.scss'

const Home = () => {
  return (
    <div>
      <div className='left'>
        <label htmlFor=''>Email:</label>
        <input type='text' />
        <label htmlFor=''>Password:</label>
        <input type='password' />
      </div>

      <div className='right'>
        <p>Welcome to Thefacebook!</p>
        <h1>[ Welcome to Thefacebook ]</h1>
        <p>
          Thefacebook is an online directory that connects people through social
          networks at colleges
        </p>
        <p>
          We have recently opened up Thefacebook at the following schools:
          Arizona • Arizona State • Bryn Mawr • CU Boulder • Drexel • Loyola
          Marymount • Miami • Mt. Holoyoke • Trinity College
        </p>
        <p>
          For a complete list of supported schools, click <a href='/'>here</a>
        </p>
        <p>Your facebook is limited to your won college or university</p>
        <ul>
          <p>You can use TheFacebook to:</p>
          <li>Search for people at your school</li>
          <li>find out who is in your classes</li>
          <li>Look up your friends' friends</li>
          <li>See a visualization of your social network</li>
        </ul>
        <p>
          To get started, click below ot register. If you have already
          registered, you can log in.
        </p>
        <button>Register</button>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Home
