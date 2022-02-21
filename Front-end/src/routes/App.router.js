import '../styles/App.scss'
import { Routes, Route } from 'react-router'
import NotFound from '../pages/404/404'
import { publicRoutes, authRoutes, merchantRoutes } from './index'
import { useSelector } from 'react-redux'
import { isAuthSelector } from '../redux/selectors/auth/isAuth.selector'
import { merchantRoleSelector } from '../redux/selectors/user/merchantRole.selector'

const AppRouter = () => {
  const isAuth = useSelector(isAuthSelector)
  const isMerchant = useSelector(merchantRoleSelector)

  return (
    <div className="App">
      <Routes>
        {isAuth ?
          authRoutes.map(route => (
            <Route path={route.path} element={<route.component/>} key={route.path}/>
          ))
          :
          publicRoutes.map(route => (
            <Route path={route.path} element={<route.component/>} key={route.path}/>
          ))
        }

        {isAuth && isMerchant ?
          merchantRoutes.map(route => (
            <Route path={route.path} element={<route.component/>} key={route.path}/>
          ))
          :
          null
        }
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default AppRouter
