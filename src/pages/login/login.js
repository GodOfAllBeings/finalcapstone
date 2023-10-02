import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [isSignUp, setIsSignUp] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    if (isSignUp) {
      console.log('User registered with Username:', username);
    } else {
      console.log('User logged in with Username:', username);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-page" style={{ backgroundColor: '#fbdabb', minHeight: 'calc(100vh - 53px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}>
          <h2 style={{ color: '#495e57', textAlign: 'center' }}>{isSignUp ? 'Sign Up' : 'Login'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username" style={{ color: '#495e57' }}>Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #edefee', borderRadius: '4px' }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" style={{ color: '#495e57' }}>Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #edefee', borderRadius: '4px' }}
              />
            </div>
            <button type="submit" style={{ background: '#f4ce14', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}>{isSignUp ? 'Sign Up' : 'Login'}</button>
            <p style={{ textAlign: 'center', marginTop: '10px' }}>
              {isSignUp ? 'Already have an account?' : 'Don\'t have an account?'}
              <span
                style={{ color: '#f4ce14', cursor: 'pointer', fontWeight: 'bold', marginLeft: '5px' }}
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? 'Login' : 'Sign Up'}
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;