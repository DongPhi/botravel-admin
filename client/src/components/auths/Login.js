import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper text-center">
        <h1>ĐĂNG NHẬP</h1>
        <form className="d-flex flex-column bd-highlight" onSubmit={handleSubmit} >
          <label className="mb-3">
            <p className="text-login text-left ml35">Tên đăng nhập</p>
            <input type="text" onChange={e => setUserName(e.target.value)} />
          </label>
          <label className="mb-3">
            <p className="text-login text-left ml35">Mật khẩu</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit" class="btn btn-outline-dark">Đăng nhập</button>
          </div>
        </form>
      </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};