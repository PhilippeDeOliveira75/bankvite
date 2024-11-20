import React, { useState } from 'react'
import axios from 'axios'
import './login.scss'

function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const loginApi = 'http://localhost:3001/api/v1/user/login'

  const handleLogin = (e) => {
    e.preventDefault()

    axios
    .post(loginApi, { email: username, password })
    .then(response => {
      // Stocker le token dans le local storage
      localStorage.setItem('token', response.data.body.token)
      
      // Rediriger l'utilisateur vers la page de profil
      window.location.href = '/user'
    })
    .catch(error => {
      setErrorMessage('Email ou mot de passe incorrect')
    })
  }

  return (
    <div className="sign-in">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" autoComplete="username" value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </div>
  )
}

export default Login