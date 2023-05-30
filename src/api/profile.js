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

export const onboardUser = async (userData) => {
  try {
    const response = await fetch(`${url}/profile/onboarding`, {
      method: 'POST',
      ...authConfig(),
      body: JSON.stringify({ ...userData }),
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    throw new Error('Error occurred during onboarding.')
  }
}

export const fetchProfile = async (id) => {
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
