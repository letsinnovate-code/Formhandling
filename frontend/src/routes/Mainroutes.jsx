
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import Signup from '../pages/Signup'

const Mainroutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/About' element={<About />} />
    <Route path='/Contact' element={<Contact />} />
    <Route path='/Services' element={<Services />} />
    

    </Routes>
  )
}

export default Mainroutes