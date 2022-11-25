import { useContext } from "react"
import { Navigate, Routes, Route } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
export const PublicRoutes = () => {
  const {user} = useContext(AuthContext)
  return user.logged
          ? <Navigate to='/' />
          : (
            <Routes>
              <Route path='/register' element={<Register/>}/>
              <Route index  element={<Login/>}/>
            </Routes>
          )
}
