import '../styles/pages/profile.scss'
import { Link } from 'react-router-dom'
import Sidebar from '../components/sidebar'

const TestProfile = () => {
  return (
    <div className='profile_page'>
      <Sidebar />
      <div className='profile'>
        <p className='heading'>John Doe's Profile</p>
        <div className='content'>
          <div className='left'>
            <div className='card'>
              <p className='card_title'>Picture</p>
              <div className='card_info'>
                <img
                  className='profile_pic'
                  src={
                    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80'
                  }
                  alt='profile'
                />
              </div>
            </div>

            <p className='box'>Send John a Message</p>
            <p className='box'>Poke him</p>
            <div className='card'>
              <p className='card_title'>Connection</p>
              <div className='card_info'>
                <p>You are not friends with John.</p>
              </div>
            </div>
            <div className='card'>
              <p className='card_title'>Mutual Friends</p>
              <div className='card_info'>
                <p>
                  You have <Link to='/profile'>10 friends</Link> in common with
                  him.
                </p>
              </div>
            </div>
            <div className='card'>
              <p className='card_title'>Access</p>
              <div className='card_info'>
                <p>Brian is in New Jersey</p>
              </div>
            </div>
            <div className='card'>
              <p className='card_title'>Friends</p>
              <div className='card_info'>
                <div className='images'>
                  <img
                    className='friend_pic'
                    src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                    alt=''
                  />
                  <img
                    className='friend_pic'
                    src='https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
                    alt=''
                  />
                  <img
                    className='friend_pic'
                    src='https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                    alt=''
                  />
                  <img
                    className='friend_pic'
                    src='https://images.unsplash.com/photo-1528900403525-dc523d4f18d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
                    alt=''
                  />
                  <img
                    className='friend_pic'
                    src='https://images.unsplash.com/photo-1625504615927-c14f4f309b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='card'>
              <p className='card_title'>Information</p>
              <div className='card_info'>
                <div>
                  <p className='section_title'>Account Info:</p>
                  <p>
                    <span className='label'>Username:</span>{' '}
                    <span className='value'>Johny</span>
                  </p>
                  <p>
                    <span className='label'>Member since:</span>{' '}
                    <span className='value'>yesterday</span>
                  </p>
                  <p>
                    <span className='label'>Last Update:</span>{' '}
                    <span className='value'>today</span>
                  </p>
                </div>

                <div>
                  <p className='section_title'>Basic Info:</p>
                  <p>
                    <span className='label'>School</span>{' '}
                    <span className='value'>Harvard</span>
                  </p>
                  <p>
                    <span className='label'>Status:</span>{' '}
                    <span className='value'>Student</span>
                  </p>
                  <p>
                    <span className='label'>Sex:</span>{' '}
                    <span className='value'>Male</span>
                  </p>
                  <p>
                    <span className='label'>Residence:</span>{' '}
                    <span className='value'>New Jersey</span>
                  </p>
                  <p>
                    <span className='label'>Birthday:</span>{' '}
                    <span className='value'>09-04-1999</span>
                  </p>
                  <p>
                    <span className='label'>Home Town:</span>{' '}
                    <span className='value'>New Jersey</span>
                  </p>
                  <p>
                    <span className='label'>High School:</span>{' '}
                    <span className='value'>Jersey High</span>
                  </p>
                </div>

                <div>
                  <p className='section_title'>Contact Info:</p>
                  <p>
                    <span className='label'>Email:</span>{' '}
                    <span className='value'>johndoe@mail.com</span>
                  </p>
                  <p>
                    <span className='label'>Username:</span>{' '}
                    <span className='value'>Johny</span>
                  </p>
                  <p>
                    <span className='label'>Phone:</span>{' '}
                    <span className='value'>0000011</span>
                  </p>
                  <p>
                    <span className='label'>Website:</span>{' '}
                    <span className='value'>
                      <a href='/profile'>johndoe.com</a>
                    </span>
                  </p>
                </div>

                <div>
                  <p className='section_title'>Personal Info:</p>
                  <p>
                    <span className='label'>Looking for:</span>{' '}
                    <span className='value'>friends</span>
                  </p>
                  <p>
                    <span className='label'>Interested In:</span>{' '}
                    <span className='value'>women</span>
                  </p>
                  <p>
                    <span className='label'>Relationship Status:</span>{' '}
                    <span className='value'>single</span>
                  </p>
                  <p>
                    <span className='label'>Political Views:</span>{' '}
                    <span className='value'>moderate</span>
                  </p>
                  <p>
                    <span className='label'>Interests:</span>{' '}
                    <span className='value'>fishing, tv</span>
                  </p>
                  <p>
                    <span className='label'>Favorite Music:</span>{' '}
                    <span className='value'>disco pop</span>
                  </p>
                  <p>
                    <span className='label'>Favorite Movies:</span>{' '}
                    <span className='value'>sci fi</span>
                  </p>
                  <p>
                    <span className='label'>About me:</span>{' '}
                    <span className='value'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo, velit.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestProfile
