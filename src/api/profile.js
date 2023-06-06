const url = 'http://localhost:5000/api'

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
    const response = await fetch(`${url}/profile`, {
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
    const response = await fetch(`${url}/profile`, {
      method: 'PATCH',
      ...authConfig(),
      body: JSON.stringify(userdata),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    throw new Error('Error occurred during updating profile.')
  }
}
