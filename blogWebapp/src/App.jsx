import { useState ,useEffect} from 'react'
import './App.css'
import authServices from './appwrite/auth'
import {useDispatch} from 'react-redux'
import { login, logout } from './Store/authSlice'
import {Header,Footer} from './components/index'
import {main_Loading_page as Loading_page} from './components/index'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch=useDispatch()
  useEffect(()=>{
    authServices.getCurrentUser()
    .then((useData)=>{
      if(useData){
        dispatch(login({useData}))
      }
      else{
        dispatch(logout())
      }
    })
    .catch(()=>{
      dispatch(logout())
    })
    .finally(()=>{
      setLoading(true)
    })
  },[])
  return !loading ? (
    <div>
      <div className='w-full block'>
      <Header />
      <Footer />
    </div>
   </div>
  ) : (
    <Loading_page />
  )
}

export default App
