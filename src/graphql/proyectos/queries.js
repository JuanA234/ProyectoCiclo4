import { gql } from '@apollo/client';


const PROYECTOS = gql`
query Proyectos {
  Proyectos {
    nombre
    estado
    fase
    objetivos {
      tipo
      descripcion
    }
  }
}

`
export { PROYECTOS };