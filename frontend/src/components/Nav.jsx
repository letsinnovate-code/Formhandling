import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom"
import { asynclogoutuser } from "../store/actions/userActions";


const Nav = () => {
  const dispatch = useDispatch();
  

  const user  = useSelector((state) => state.userReducer.users);
  console.log(user);

  const logoutHandler = () => {
    dispatch(asynclogoutuser());
    
  }
  
  
  
 
  return (
    


    

    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          MyApp
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600 transition duration-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600 transition duration-300"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600 transition duration-300"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600 transition duration-300"
            }
          >
            Contact
          </NavLink>
        </div>

        { user !== null ?  <> {user.isAdmin ? <NavLink to="/createproduct">CreateProduct</NavLink> : <NavLink></NavLink> }<NavLink to= "/login">
            <button onClick={logoutHandler} className="bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Logout
        </button>
        </NavLink>
        <NavLink to="/profile">
            <button  className="bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Profile
        </button>
        </NavLink></> : <><NavLink to="/login">
            <button  className="bg-blue-600 text-white px-5 cursor-pointer py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Login
        </button>
        </NavLink></>}

        


        
         
        
      </div>
    </nav>
   
  )
}



export default Nav