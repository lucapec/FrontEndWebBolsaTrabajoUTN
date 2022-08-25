import React from 'react'
import UserForm from '../components/forms/UserForm'

const Register = () => {
  return (
    <div className="div-wrapper">
        <UserForm loginSetup={false} h1Text="Registrarse" btnText="Registrarse" linkToText="Ya tengo una cuenta" linkTo="/login"/>
    </div>
  )
}

export default Register