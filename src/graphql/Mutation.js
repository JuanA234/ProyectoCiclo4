import {gql} from "apollo-boost"

export const CREATE_USERS = gql`

mutation createUser ($nombre:String!,$apellido:String!,$personalID:Int!,$correo:String!,$rol:String!,$estado:String!){ 
    createUser(
      nombre: $nombre,
      apellido:$apellido,
      personalID:$personalID,
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
mutation deleteUser ($personalID:Int!){ 
  deleteUser(
    personalID: $personalID
  )
    {
      _id
    }
  }
`;

export const UPDATE_USER = gql`
  mutation actualizarUser ($nombre:String!,$apellido:String!,$personalID:Int!,$correo:String!,$rol:String!,$estado:String!){ 
    actualizarUser(
      nombre:$nombre 
      apellido:$apellido 
      personalID:$personalID
      correo:$correo 
      rol:$rol 
      estado:$estado
      )
  {
    _id
  }
  }
`;







  


  