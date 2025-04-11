import { FC } from "react"
import { IStudent } from "../../types/IStudents"

import style from './StudentCard.module.css'


type Props = {
    estudiante: IStudent
}

const StudentCard: FC<Props> = ({estudiante}) => {
  return (
    <div className={style.card}>
    <p>ID: {estudiante.id}</p>
    <p>Nombre: {estudiante.nombre}</p>
    <p>Edad: {estudiante.edad}</p>
    </div>

  )
}


export default StudentCard