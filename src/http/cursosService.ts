import {ICourses} from "../types/ICourses"


const API_URL = "http://localhost:3000"

export const cursosServices = {
    async getCursos(): Promise<ICourses[]> {
        const res = await fetch(`${API_URL}/cursos`)
        if(!res.ok) throw new Error("Error al hacer el fetch de datos")
        return await res.json()
    }
}