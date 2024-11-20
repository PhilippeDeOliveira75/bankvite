import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '@components/Header/header.scss'
import { argentBankLogo } from '@assets/index.jsx'
import { Link, useNavigate } from 'react-router-dom'

function Header () {
    
  // Utiliser useSelector pour récupérer firstName du store Redux
  const { isAuthenticated, data } = useSelector(state => state.global)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = (event) => {
    if (isAuthenticated) {
      event.preventDefault()

      // Supprimer le token du local storage
      localStorage.removeItem('token')

      // Réinitialiser firstName dans l'état Redux
      dispatch({type: 'global/removeGlobal'})

      // Rediriger l'utilisateur vers la page de connexion
      navigate('/')
    }
  }

    return (
        <header>
            <nav className="main-nav">
                <Link to="/" className="main-nav-logo">
                    <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div className='avatar-log-container'>
                    <i className="fa fa-user-circle"></i>
                    <p>{isAuthenticated ? data.firstName : ''}</p>
                    {isAuthenticated ? <i className="fa fa-sign-out"></i> : null}
                    <Link className="main-nav-item" to="/login" onClick={handleLogout}>
                        {isAuthenticated ? 'Sign Out' : 'Sign In'}
                    </Link>
                </div>
            </nav>    
        </header>
    )
}

export default Header