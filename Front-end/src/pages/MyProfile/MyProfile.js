import React from 'react'
import { useSelector } from 'react-redux'
import { userInfoSelector } from '../../redux/selectors/user/userInfo.selector'
import '../../styles/componentsStyle/MyProfile.scss'

const MyProfile = () => {
  const {email, firstName, lastName, roles} = useSelector(userInfoSelector)

  return (
    <section className="layout">
      <div className="profile-plate">
        <div className="user-info">First name - {firstName}</div>
        <div className="user-info">Last name - {lastName}</div>
        <div className="user-info">Email - {email}</div>
        <div className="user-info">Roles - {roles}</div>
      </div>
    </section>
  )
}

export default MyProfile
