import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PublicRoutes } from "./PublicRoutes"
import { PrivateRoutes } from "./PrivateRoutes"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { TodosScreen } from "../pages/TodosScreen"
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={ 
          <PublicRoutes>
            {/* Colocar el componente a proteger */}
            
          </PublicRoutes>
        } />

        <Route path='/*' element={
          // Proteger las rutas privadas
          <PrivateRoutes>
            <TodosScreen/>
          </PrivateRoutes>
        } />

      </Routes>
    </BrowserRouter>
  )
}
