import '../../styles/componentsStyle/NavBar.scss'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import UserNavBar from '../UserNavBar/UserNavBar'
import { logoutThunkCreator } from '../../redux/thunks/auth/logout.thunkCreator'
import { merchantRoleSelector } from '../../redux/selectors/user/merchantRole.selector'
import { isAuthSelector } from '../../redux/selectors/auth/isAuth.selector'


const NavBar = () => {
  const isAuth = useSelector(isAuthSelector)
  const isMerchant = useSelector(merchantRoleSelector)
  const dispatch = useDispatch()
  const [searchData, setSearchData] = useState('')

  const searchHandler = event => {
    setSearchData(event.target.value)
  }

  const onLogoutClickHandler = () => {
    dispatch(logoutThunkCreator())
  }

  return (
    <header className="header">
      <h1><Link to="/">JWT_auth</Link></h1>
      <input
        className="search"
        value={searchData}
        placeholder="Search"
        onChange={searchHandler}
      />
      <div className="links">
        <Link to="/">Browse</Link>
        <Link to="/forum">Forum</Link>
        <Link to="/about">About</Link>
        <Link to="/editorials">Editorials</Link>

        {!isAuth ?
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Sign Up</Link>
          </>
          :
          <Link to="/" onClick={onLogoutClickHandler}>logout</Link>
        }

        {isAuth && isMerchant ?
          <Link to="/sell" className="sell">Sell</Link>
          :
          null

        }
        <Link to="/profile"><UserNavBar/></Link>
      </div>

    </header>
  )
}

export default NavBar
