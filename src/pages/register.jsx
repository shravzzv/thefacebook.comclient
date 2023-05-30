import { useState } from 'react';
import '../styles/pages/register.scss';
import AuthBox from '../components/authBox.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthDispatch } from '../context/auth';
import { registerUser } from '../api/auth';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('')
  const [terms, setTerms] = useState(false)
  const dispatch = useAuthDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (password.length < 8) {
        alert('Password must be at least 8 characters long.')
        return;
      }

      const data = await registerUser(email, password, name, status);
      if (data.error) {
        alert(data.error);
      } else {
        dispatch({
          type: 'USER_REGISTERED',
          payload: data,
        });
        navigate("/onboarding")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='register'>
      <div className='wrapper'>
        <AuthBox />

        <div className='content'>
          <p className='top'>Registration</p>
          <div className='main'>
            <p>
              To register for thefacebook.com, just fill in the four fields
              below. You will have a chance to enter additional information and
              submit a picture once you have registered.
            </p>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input type='text' value={name} onChange={e => setName(e.target.value)} required />
              </div>
              <div className='form-group'>
                <label htmlFor='status'>Status:</label>
                <select id='status' value={status} onChange={e => setStatus(e.target.value)} required>
                  <option value='' disabled>Select status</option>
                  <option value='student(full time)'>Student (full time)</option>
                  <option value='student(summer)'>Student (summer)</option>
                  <option value='grad student'>Grad student</option>
                  <option value='faculty'>Faculty</option>
                  <option value='alumni'>Alumnus/Alumna</option>
                  <option value='staff'>Staff</option>
                  <option value='other'>Other</option>
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email (school):</label>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} required />
              </div>
              <div>
                <label htmlFor='terms' className="check" >
                  <input type='checkbox' id="terms" checked={terms} onChange={e => setTerms(e.target.checked)} required />
                  I have read and agree to the <Link to='/terms'>Terms of Use</Link>.
                </label>
              </div>
              <button type='submit' disabled={!terms}>Register Now!</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
