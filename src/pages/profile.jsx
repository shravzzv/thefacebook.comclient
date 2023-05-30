import { useState, useEffect } from 'react'
import '../styles/pages/profile.scss'
import { Link } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import { useAuth } from '../context/auth'

const Profile = ({ id }) => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    profilePicture: '',
    residence: '',
    friends: [],
    username: '',
    createdAt: '',
    updatedAt: '',
    sex: '',
    dateOfBirth: '',
    homeTown: '',
    highSchool: '',
    email: '',
    phone: '',
    website: '',
    lookingFor: '',
    interestedIn: '',
    relationshipStatus: '',
    politicalViews: '',
    interests: '',
    favoriteMusic: '',
    favoriteMovies: '',
    bio: '',
  })
  const token = useAuth()

  useEffect(() => {
    // Fetch user data
    fetch(`http://localhost:5000/api/profile/${id}`, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProfile({ ...profile, data })
      })
      .catch((error) => {
        console.error('Error fetching user data:', error)
      })
  }, [id, profile, token])

  return (
    <div className='profile_page'>
      <Sidebar />
      <div className='profile'>
        <p className='heading'>
          {profile.firstName} {profile.lastName}'s Profile
        </p>
        <div className='content'>
          <div className='left'>
            <div className='card'>
              <p className='card_title'>Picture</p>
              <div className='card_info'>
                <img
                  className='profile_pic'
                  src={profile.profilePicture}
                  // src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                  alt='profile'
                />
              </div>
            </div>

            <p className='box'>Send {profile.firstName} a Message</p>
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
                <p>Brian is in {profile.residence}</p>
              </div>
            </div>
            <div className='card'>
              <p className='card_title'>Friends</p>
              <div className='card_info'>
                <div className='images'>
                  {profile.friends.map((friend) => (
                    <img
                      src={friend.profilePicture}
                      alt={profile.username}
                      className='friend_pic'
                    />
                  ))}
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
                    <span className='value'>{profile.username}</span>
                  </p>
                  <p>
                    <span className='label'>Member since:</span>{' '}
                    <span className='value'>{profile.createdAt}</span>
                  </p>
                  <p>
                    <span className='label'>Last Update:</span>{' '}
                    <span className='value'>{profile.updatedAt}</span>
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
                    <span className='value'>{profile.sex}</span>
                  </p>
                  <p>
                    <span className='label'>Residence:</span>{' '}
                    <span className='value'>{profile.residence}</span>
                  </p>
                  <p>
                    <span className='label'>Birthday:</span>{' '}
                    <span className='value'>{profile.dateOfBirth}</span>
                  </p>
                  <p>
                    <span className='label'>Home Town:</span>{' '}
                    <span className='value'>{profile.homeTown}</span>
                  </p>
                  <p>
                    <span className='label'>High School:</span>{' '}
                    <span className='value'>{profile.highSchool}</span>
                  </p>
                </div>

                <div>
                  <p className='section_title'>Contact Info:</p>
                  <p>
                    <span className='label'>Email:</span>{' '}
                    <span className='value'>{profile.email}</span>
                  </p>
                  <p>
                    <span className='label'>Username:</span>{' '}
                    <span className='value'>{profile.username}</span>
                  </p>
                  <p>
                    <span className='label'>Phone:</span>{' '}
                    <span className='value'>{profile.phone}</span>
                  </p>
                  <p>
                    <span className='label'>Website:</span>{' '}
                    <span className='value'>
                      <a href='/profile'>{profile.website}</a>
                    </span>
                  </p>
                </div>

                <div>
                  <p className='section_title'>Personal Info:</p>
                  <p>
                    <span className='label'>Looking for:</span>{' '}
                    <span className='value'>{profile.lookingFor}</span>
                  </p>
                  <p>
                    <span className='label'>Interested In:</span>{' '}
                    <span className='value'>{profile.interestedIn}</span>
                  </p>
                  <p>
                    <span className='label'>Relationship Status:</span>{' '}
                    <span className='value'>{profile.relationshipStatus}</span>
                  </p>
                  <p>
                    <span className='label'>Political Views:</span>{' '}
                    <span className='value'>{profile.politicalViews}</span>
                  </p>
                  <p>
                    <span className='label'>Interests:</span>{' '}
                    <span className='value'>{profile.interests}</span>
                  </p>
                  <p>
                    <span className='label'>Favorite Music:</span>{' '}
                    <span className='value'>{profile.favoriteMusic}</span>
                  </p>
                  <p>
                    <span className='label'>Favorite Movies:</span>{' '}
                    <span className='value'>{profile.favoriteMovies}</span>
                  </p>
                  <p>
                    <span className='label'>About me:</span>{' '}
                    <span className='value'>{profile.bio}</span>
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
