import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import '../../styles/pagesStyle/LoginPages.scss'
import { authThunkCreator } from '../../redux/thunks/auth/auth.thunkCreator'
import { useDispatch, useSelector } from 'react-redux'
import { isAuthSelector } from '../../redux/selectors/auth/isAuth.selector'
import { errorAuthSelector } from '../../redux/selectors/auth/errorAuth.selector'

const LoginPage = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(isAuthSelector)
  const error = useSelector(errorAuthSelector)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) {
      navigate('/')
    }
  }, [isAuth])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeHandler = useCallback(setFunc => event => {
    setFunc(event.target.value)
  }, [])

  const onClickHandler = useCallback(() => {
    dispatch(authThunkCreator({email, password}))
  }, [email, password])


  return (
    <div className="login-page">
      <div className="login-form">
        {error &&
          <div style={{color: 'red', marginTop: '20px'}}>
            {error}
          </div>
        }
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
        <button onClick={onClickHandler}>send</button>
      </div>
    </div>
  )
}

export default LoginPage
