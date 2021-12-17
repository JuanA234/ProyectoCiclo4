import { gql } from '@apollo/client';

const GET_USUARIOS = gql`
 query Usuarios($filtro: FiltroUsuarios) {
  Usuarios(filtro: $filtro) {
    _id
    nombre
    apellido
    correo
    estado
    identificacion
    rol
  }
}
`;

// const GET_USUARIO = gql`

// `;

export { GET_USUARIOS};