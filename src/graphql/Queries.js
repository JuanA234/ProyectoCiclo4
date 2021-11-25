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
