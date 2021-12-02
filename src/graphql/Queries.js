import {gql} from "apollo-boost"

export const GET_USERS = gql`
query{usuarios{nombre,apellido,personalID,rol,correo,estado}}
`;


