import { useState } from 'react';
import '../styles/components/authBox.scss';
import { useAuthDispatch } from '../context/auth';

const AuthBox = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAuthDispatch()

  const handleRegister = () => {
    // Register logic
    dispatch({ email, password })
  };

  const handleLogin = () => {
    // Login logic
    dispatch({ email, password })
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
