import React from 'react';
import '../styles/pages/register.scss';
import AuthBox from '../components/authBox.jsx';
import { Link } from 'react-router-dom';

const Register = () => {
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
            <form>
              <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' />
              </div>
              <div className='form-group'>
                <label htmlFor='status'>Status:</label>
                <select id='status'>
                  <option value='option1'>Student (full time)</option>
                  <option value='option2'>Student (summer)</option>
                  <option value='option3'>Grad student</option>
                  <option value='option4'>Faculty</option>
                  <option value='option5'>Alumnus/Alumna</option>
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email (school):</label>
                <input type='email' id='email' />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' />
              </div>
              <div className='form-group'>
                <label htmlFor='terms' className="check" >
                  <input type='checkbox' id='terms' />
                  I have read and understood the{' '}
                  <Link to='/register'>Terms of Use</Link>, and I agree to them.
                </label>
              </div>
              <button type='submit'>Register Now!</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
