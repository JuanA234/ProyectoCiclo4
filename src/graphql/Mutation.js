import {gql} from "apollo-boost"


export const CREATE_USERS = gql`
mutation createUser($nombre:String!,$apellido:Sprint!,$correo:Sprint!,$rol:Sprint!,$estado:Sprint!)
{
    createUser(nombre: $nombre,apellido:$apellido,correo: $correo,rol:$rol,estado:$estado)
{
  _id
  }
}
`;

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

export const CREATE_USERS2 = gql`

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

  


  