import { Route, Routes } from "react-router-dom"
import { CursosScreens } from "../components/screens/CursosScreen/CursosScreens"
import { EstudiantesScreen } from "../components/screens/EstudiantesScreen/EstudiantesScreen"


export const AppRouter = () => {
  return (
    
    <Routes>



      <Route path="/" element={<CursosScreens></CursosScreens>}></Route>
      <Route path="/estudiantes/:idCurso" element={<EstudiantesScreen></EstudiantesScreen>}></Route>



    </Routes>

)
}
