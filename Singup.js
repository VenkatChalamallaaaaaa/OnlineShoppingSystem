import React, { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    // Basic validation (you can add more robust validation logic here)
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Please fill out all fields.');
      return;
    }

    // Simulate successful registration
    setIsRegistered(true);
    alert('Registration successful!');
  };

  const handleReset = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setIsRegistered(false);
  };

  return (
    <div>
      {isRegistered ? (
        <div>
          <p>Registration successful! Please proceed to login.</p>
          <button onClick={handleReset}>Register Another Account</button>
        </div>
      ) : (
        <form onSubmit={handleSignup}>
          <h2>Signup</h2>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Signup</button>
        </form>
      )}
    </div>
  );
};

export default Signup;
