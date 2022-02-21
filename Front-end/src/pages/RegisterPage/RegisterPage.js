import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { isAuthSelector } from '../../redux/selectors/auth/isAuth.selector'
import { registerThunkCreator } from '../../redux/thunks/auth/register.thunkCreator'
import '../../styles/pagesStyle/RegisterPage.scss'

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [role, setRole] = useState('CUSTOMER')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isAuth = useSelector(isAuthSelector)

  const onChangeHandler = setFunc => event => {
    setFunc(event.target.value)
  }

  const onClickHandler = async () => {
    dispatch(registerThunkCreator({
      email,
      password,
      firstName,
      lastName,
      role,
    }))

    navigate('/login')
  }

  useEffect(() => {
    if (isAuth) {
      navigate('/')
    }
  }, [isAuth])

  return (
    <div className="register-page">
      <div className="register-form">
        <input
          type="email"
          value={email}
          name="email"
          placeholder="email"
          onChange={onChangeHandler(setEmail)}
        />
        <input
          type="password"
          value={password}
          name="password"
          placeholder="password"
          onChange={onChangeHandler(setPassword)}
        />
        <input
          type="text"
          value={firstName}
          name="firstName"
          placeholder="first name"
          onChange={onChangeHandler(setFirstName)}
        />
        <input
          type="text"
          value={lastName}
          name="lastName"
          placeholder="last name"
          onChange={onChangeHandler(setLastName)}
        />
        <label className="label"> I'm a merchant
          <input
            className="radio"
            type="radio"
            value="MERCHANT"
            name="role"
            placeholder=""
            onChange={onChangeHandler(setRole)}
          />
        </label>

        <label> I'm a customer
          <input
            className="radio"
            type="radio"
            value="CUSTOMER"
            name="role"
            onChange={onChangeHandler(setRole)}
          />
        </label>

        <button onClick={onClickHandler}>Register</button>
      </div>
    </div>
  )
}

export default RegisterPage
