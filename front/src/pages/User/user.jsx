import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { updateProfile } from "@services/apiCaller"
import "./user.scss"


function User() {

  const { isAuthenticated, data } = useSelector((state) => state.global)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const upDateContext = (data) => {
    let tmp = { ...data }
    tmp.firstName = newFirstName
    tmp.lastName = newLastName
    dispatch({ type: "global/setNames", payload: tmp })
  }

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login")
    } else {
      setFirstName(data.firstName)
      setLastName(data.lastName)
    }
  }, [])

  // État local pour gérer l'affichage des champs d'input et des boutons
  const [isEditing, setIsEditing] = useState(false)
  const [newFirstName, setNewFirstName] = useState("")
  const [newLastName, setNewLastName] = useState("")
  const [previousFirstName, setPreviousFirstName] = useState("")
  const [previousLastName, setPreviousLastName] = useState("")
  
  const handleEditClick = () => {
    setPreviousFirstName(newFirstName)
    setPreviousLastName(newLastName)
    setIsEditing(true)
  }
  
  const handleCancelClick = () => {
    setIsEditing(false)
    setNewFirstName(previousFirstName)
    setNewLastName(previousLastName)
  }
  const handleSaveClick = () => {
    upDateContext(data)
    let tmp = {
      firstName: newFirstName,
      lastName: newLastName,
    }
    // Mettre à jour l'état Redux avec les nouvelles valeurs
    updateProfile(localStorage.getItem("token"), tmp)
    setIsEditing(false)
  }



  return (
    <main className="main bg-dark">
      <div className="header">
        <p>Welcome back</p>
        <h1>
          {newFirstName !== "" ? newFirstName : firstName}{" "}
          {newLastName !== "" ? newLastName : lastName} !
        </h1>
        <button className="edit-button" onClick={handleEditClick}>
          Edit Name
        </button>
        {isEditing && (
          <div className="input-button-container">
            <div className="input-wrapper">
              <input
                type="text"
                onChange={(e) => setNewFirstName(e.target.value)}
              />
              <input
                type="text"
                onChange={(e) => setNewLastName(e.target.value)}
              />
            </div>
            <div className="button-wrapper">
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </div>
          </div>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  )
}

export default User