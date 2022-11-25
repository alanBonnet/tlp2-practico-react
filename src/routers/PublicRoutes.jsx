import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const PublicRoutes = () => {
  const {user} = useContext(AuthContext)
  return user.logged
          ? <Navigate to='/' />
          : (
            <>
              <Route path='/register' element={<Register/>}/>
              <Route index  element={<Login/>}/>
            </>
          )
}
