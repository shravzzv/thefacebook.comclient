import '../styles/pages/profile.scss'
import { Link } from 'react-router-dom'
import Sidebar from '../components/sidebar'

const Profile = () => {
  return (
    <div className='profile_page'>
      <Sidebar />
      <div className='profile'>
        <p className='heading'>Brian Moore's Profile</p>
        <div className='content'>
          <div className='left'>
            <div className='card'>
              <p className='card_title'>Picture</p>
              <div className='card_info'>
                <img
                  className='profile_pic'
                  src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80'
                  alt='profile'
                />
              </div>
            </div>

            <p className='box'>Send Brian a Message</p>
            <p className='box'>Poke him</p>
            <div className='card'>
              <p className='card_title'>Connection</p>
              <div className='card_info'>
                <p>You are in a relationship with Brian.</p>
              </div>
            </div>
            <div className='card'>
              <p className='card_title'>Mutual Friends</p>
              <div className='card_info'>
                <p>
                  You have <Link to='/profile'>10 friends</Link> in commom with
                  Brian.
                </p>
              </div>
            </div>
            <div className='card'>
              <p className='card_title'>Access</p>
              <div className='card_info'>
                <p>Brian is in West Hartford, Conneticut</p>
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
                    <span className='value'>BrianMoore</span>
                  </p>
                  <p>
                    <span className='label'>Member since:</span>{' '}
                    <span className='value'>May 21, 2023</span>
                  </p>
                  <p>
                    <span className='label'>Last Update:</span>{' '}
                    <span className='value'>May 23, 2023</span>
                  </p>
                </div>

                <div>
                  <p className='section_title'>Basic Info:</p>
                  <p>
                    <span className='label'>School:</span>{' '}
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
                    <span className='value'>Todd 325</span>
                  </p>
                  <p>
                    <span className='label'>Birthday:</span>{' '}
                    <span className='value'>09/02/2000</span>
                  </p>
                  <p>
                    <span className='label'>Home Town:</span>{' '}
                    <span className='value'>Shorewood, CT 54211</span>
                  </p>
                  <p>
                    <span className='label'>High School:</span>{' '}
                    <span className='value'>Shorewood High</span>
                  </p>
                </div>

                <div>
                  <p className='section_title'>Contact Info:</p>
                  <p>
                    <span className='label'>Email:</span>{' '}
                    <span className='value'>bmoore@harvard.edu</span>
                  </p>
                  <p>
                    <span className='label'>Username:</span>{' '}
                    <span className='value'>Docsman</span>
                  </p>
                  <p>
                    <span className='label'>Phone:</span>{' '}
                    <span className='value'>123-456-7890</span>
                  </p>
                  <p>
                    <span className='label'>Website:</span>{' '}
                    <span className='value'>
                      <a href='/profile'>docsman.com</a>
                    </span>
                  </p>
                </div>

                <div>
                  <p className='section_title'>Personal Info:</p>
                  <p>
                    <span className='label'>Looking for:</span>{' '}
                    <span className='value'>Friendship</span>
                  </p>
                  <p>
                    <span className='label'>Interested In:</span>{' '}
                    <span className='value'>Women</span>
                  </p>
                  <p>
                    <span className='label'>Relationship Status:</span>{' '}
                    <span className='value'>
                      In a Relationship with{' '}
                      <a href='/profile'>Rachael Buetha</a>
                    </span>
                  </p>
                  <p>
                    <span className='label'>Political Views:</span>{' '}
                    <span className='value'>Conservative</span>
                  </p>
                  <p>
                    <span className='label'>Interests:</span>{' '}
                    <span className='value'>
                      Film, Graphic Design, Video Editing
                    </span>
                  </p>
                  <p>
                    <span className='label'>Favorite Music:</span>{' '}
                    <span className='value'>Avicii, Jonas Blue, Dua Lipa</span>
                  </p>
                  <p>
                    <span className='label'>Favorite Movies:</span>{' '}
                    <span className='value'>
                      Interstellar, Eternal Sunshine of the Spotless Mind, The
                      Truman Show, Avengers: Endgame
                    </span>
                  </p>
                  <p>
                    <span className='label'>About me:</span>{' '}
                    <span className='value'>
                      What is there to say? I dunno. I'm a wild 5'6" muscular
                      man that wants to be creative. I like making movies and
                      music
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

export default Profile
