const url = 'http://localhost:5000'
// const url = 'https://thefacebook-comserver.vercel.app'

const authConfig = () => {
  const token = localStorage.getItem('accessToken')
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  }
}

export const fetchUserProfile = async () => {
  try {
    const response = await fetch(`${url}/api/profile`, {
      method: 'GET',
      ...authConfig(),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    throw new Error('Error occurred during fetching profile.')
  }
}

export const updateUserProfile = async (userdata) => {
  try {
    const response = await fetch(`${url}/api/profile`, {
      method: 'PATCH',
      ...authConfig(),
      body: JSON.stringify(userdata),
    })
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    throw new Error('Error occurred during updating profile.')
  }
}
