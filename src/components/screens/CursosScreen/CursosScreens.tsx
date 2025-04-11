import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./CursosScreens.module.css";
import { ICourses } from "../../../types/ICourses";
import CoursesCard from "../../CoursesCard/CoursesCard";
import { cursosServices } from "../../../http/cursosService";

export const CursosScreens = () => {
  const [cursos, setCursos] = useState<ICourses[]>([]);
  const [loading, setLoading] = useState(true);

 

  useEffect(() => {

    cursosServices.getCursos().then(data => setCursos(data)).catch(err => console.error(err)).finally(() => setLoading(false))

  }, []);

  return (
    <div className={style.screen}>
      <header className={style.header}>
      <h1>Cursos disponibles</h1>

      </header>

      <div className={style.mainContainer}>
        {loading ? (
          <p>Cargando cursos...</p>
        ) : (
          cursos.map((curso) => {
          

            return (
             <CoursesCard curso={curso}></CoursesCard>
            );
          })
        )}
      </div>
    </div>
  );
};
