import { IStudent } from "./IStudents"

export interface ICourses{
    id: number
    nombre: string
    estudiantes: IStudent[]
}