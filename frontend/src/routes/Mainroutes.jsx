
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'
import Authwrapper from '../authreper/Authwrapper'
import { useSelector } from 'react-redux'
import CreateProduct from '../pages/Createproduct'


const Mainroutes = () => {
  const user = useSelector((state) => state.userReducer.users);
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={!user ? <Login />: <Navigate to="/" />} />
    <Route path='/signup' element={!user ? <Signup />: <Navigate to="/" />} />
    <Route path='/About' element={<About />} />
    <Route path='/Contact' element={<Contact />} />
    <Route path='/Services' element={<Services />} />
    <Route path='/createproduct' element={ user && user.isAdmin ? <CreateProduct /> : <Navigate to="/" />} />
    <Route path='/profile' element={<Authwrapper><Profile /></Authwrapper>} />
    

    </Routes>
  )
}

export default Mainroutes