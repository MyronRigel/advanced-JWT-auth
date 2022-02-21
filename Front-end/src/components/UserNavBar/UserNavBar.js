import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { isAuthSelector } from '../../redux/selectors/auth/isAuth.selector'
import { userInfoSelector } from '../../redux/selectors/user/userInfo.selector'
import '../../styles/componentsStyle/UserNavBar.scss'

const UserNavBar = () => {
  const {firstName, lastName} = useSelector(userInfoSelector)
  const isAuth = useSelector(isAuthSelector)

  return (
    <>
      {isAuth ?
          <div className='container'>{`${firstName} ${lastName}`}</div>
        :
        null
      }
    </>
  )
}

export default UserNavBar
