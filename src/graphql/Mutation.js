import {gql} from "apollo-boost"

export const CREATE_USERS = gql`

mutation createUser ($nombre:String!,$apellido:String!,$correo:String!,$rol:String!,$estado:String!){ 
    createUser(
      nombre: $nombre,
      apellido:$apellido,
      correo: $correo,
        rol:$rol,
        estado:$estado,
    )
      {
        _id
      }
    }
`;


export const DELETE_USERS = gql`
mutation deleteUser ($nombre:String!){ 
  deleteUser(
    nombre: $nombre
  )
    {
      _id
    }
  }
`;

export const UPDATE_USER = gql`
  mutation actualizarUser ($nombre:String!,$apellido:String!,$correo:String!,$rol:String!,$estado:String!){ 
    actualizarUser(
      nombre:$nombre 
      apellido:$apellido 
      correo:$correo 
      rol:$rol 
      estado:$estado
      )
  {
    _id
  }
  }
`;







  


  