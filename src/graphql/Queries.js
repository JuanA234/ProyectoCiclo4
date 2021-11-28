import {gql} from "apollo-boost"


export const GET_CHARACTERS = gql`
query{
    characters{
      results{
        name
      } 
    }
    }

`;

export const GET_USERS = gql`
query{usuarios{nombre,apellido,rol,correo,estado}}
`;




  
  