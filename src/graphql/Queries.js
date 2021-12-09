import {gql} from "apollo-boost"

export const GET_USERS = gql`
query{usuarios{nombre,apellido,personalID,rol,correo,estado}}
`;

export const GET_USERS_STUDENTS = gql`
query{usuariosEstudiante{nombre,apellido,personalID,rol,correo,estado}}
`;

export const VALID_USER = gql`
query validarUsuario ($correo: String!)
{validarUsuario(correo:$correo)
  {estado,rol}
}
`;
