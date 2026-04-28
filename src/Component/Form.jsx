import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Form = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // 🔹 Email regex (professional standard)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 🔹 Password regex
    // min 8 char, 1 uppercase, 1 lowercase, 1 number, 1 special char
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    // email empty
    if (!email) {
      return setError('Please enter your email');
    }

    // email format
    if (!emailRegex.test(email)) {
      return setError('Invalid email format');
    }

    // password empty
    if (!password) {
      return setError('Please enter your password');
    }

  
    if (!passwordRegex.test(password)) {
      return setError(
        'Password must be strong'
      );
    }

    // success
    alert('Login successful');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto my-10">
        <h2 className="font-bold text-2xl text-center ">Login</h2>

        <label className="label">Email</label>
        <input 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
          type="email" 
          className="input" 
          placeholder="Email" 
        />

        <div className='relative'>
          <label className="label">Password</label>
          <input 
            onChange={(e) => setPassword(e.target.value)} 
            type={showPass ? "text" : "password"} 
            value={password}
            className="input" 
            placeholder="Password" 
          />

          {
            showPass ? (
              <FaEye 
                onClick={() => setShowPass(false)} 
                className='absolute right-3 top-8 cursor-pointer' 
              />
            ) : (
              <FaEyeSlash 
                onClick={() => setShowPass(true)} 
                className='absolute right-3 top-8 cursor-pointer' 
              />
            )
          }
        </div>

        {
          error && <p className="text-red-500 mt-2">{error}</p>
        }

        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>
    </form>
  );
};

export default Form;