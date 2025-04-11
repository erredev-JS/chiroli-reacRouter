import { useNavigate, useParams } from 'react-router-dom'
import style from './EstudiantesScreen.module.css'
import { useEffect, useState } from 'react';
import { IStudent } from '../../../types/IStudents';
import StudentCard from '../../StudentCard/StudentCard';
import { ICourses } from '../../../types/ICourses';
import { cursosServices } from '../../../http/cursosService';
export const EstudiantesScreen = () => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/")
    }


    const {idCurso} = useParams<{idCurso: string}>()

      const [cursos, setCursos] = useState<ICourses[]>([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        cursosServices.getCursos().then(data => setCursos(data)).catch(err => console.error(err)).finally(() => setLoading(false))
      }, []);
      
      const curso = cursos.find((curso) => curso.id == Number(idCurso))
      const estudiantes = curso?.estudiantes ?? []
  return (
  <div className={style.screen}>
        <div className={style.header}>Estudiantes del curso {idCurso} <button onClick={handleClick} className={style.btnCustom}>Volver a cursos</button></div> 
    <div className={style.mainContainer}>
        {loading ? (<p>Cargando alumnos del curso...</p>) : estudiantes.map((e: IStudent) => (
          
              <StudentCard estudiante={e}></StudentCard>
      
        ))  }
    
    </div>
  </div>
  )
}
