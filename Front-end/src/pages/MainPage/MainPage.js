import React from 'react'
import { useSelector } from 'react-redux'
import { userInfoSelector } from '../../redux/selectors/user/userInfo.selector'
import { isAuthSelector } from '../../redux/selectors/auth/isAuth.selector'

const MainPage = () => {
  const {firstName, lastName} = useSelector(userInfoSelector)
  const isAuth = useSelector(isAuthSelector)
  return (
    <>
      {isAuth ?
        <h1>Welcome {firstName} {lastName}</h1>
        :
        <h1>You are not authorized</h1>
      }
    </>
  )
}

export default MainPage
