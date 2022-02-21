import LoginPage from '../pages/LoginPage/LoginPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import MainPage from '../pages/MainPage/MainPage'
import SellPage from '../pages/SellPage/SellPage'
import MyProfile from '../pages/MyProfile/MyProfile'

const routesNames = {
  MAIN: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  SELL: '/sell',
  PROFILE: '/profile',
}

const publicRoutes = [
  {path: routesNames.LOGIN, component: LoginPage},
  {path: routesNames.REGISTER, component: RegisterPage},
  {path: routesNames.MAIN, component: MainPage},
]

const authRoutes = [
  ...publicRoutes,
  {path: routesNames.PROFILE, component: MyProfile},
]

const merchantRoutes = [
  {path: routesNames.SELL, component: SellPage},
]


export {
  publicRoutes,
  authRoutes,
  merchantRoutes
}