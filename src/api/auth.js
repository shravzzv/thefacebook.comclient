const url = 'http://localhost:5000/api'

export const registerUser = async (credentials) => {
  try {
    const response = await fetch(`${url}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    throw new Error('Error occurred during registration.')
  }
}

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${url}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    throw new Error('Error occurred during login.')
  }
}
