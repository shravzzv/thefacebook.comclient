import { useState } from 'react';
import '../styles/components/authBox.scss';
import { useAuthDispatch } from '../context/auth';

const AuthBox = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAuthDispatch()
  const url = 'http://localhost:5000/api'

  const handleRegister = async () => {
    fetch(`${url}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'user_registered',
          payload: data
        })
      })
      .catch((err) => console.log(err))
  };

  const handleLogin = () => {
    fetch(`${url}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'user_logged_in',
          payload: data
        })
      })
      .catch((err) => console.log(err))
  };

  return (
    <div className='authBox'>
      <label htmlFor='email'>Email:</label>
      <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor='password'>Password:</label>
      <input type='password' id='password' autoComplete='true' value={password} onChange={e => setPassword(e.target.value)} />
      <div>
        <button onClick={handleRegister}>Register</button>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default AuthBox;
