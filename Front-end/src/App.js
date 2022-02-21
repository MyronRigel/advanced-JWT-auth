import './styles/App.scss'
import AppRouter from './routes/App.router'
import NavBar from './components/NavBar/NavBar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isLoadingSelector } from './redux/selectors/isLoading.selector'
import { setUserThunkCreator } from './redux/thunks/user/setUser.thunkCreator'
import LoadingPage from './pages/LoadingPage/LoadingPage'


const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(isLoadingSelector)

  useEffect(() => {
    dispatch(setUserThunkCreator())
  }, [])

  return (
    <>
      {isLoading ?
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
          <LoadingPage/>
        </div>
        :
        <>
          <NavBar/>
          <AppRouter/>
        </>
      }
    </>
  )
}


export default App
