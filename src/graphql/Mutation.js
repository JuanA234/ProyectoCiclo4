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


export const CREATE_PROJECT = gql`
mutation createProject ($nombre:String!,$iPrincipal:String!,$investigadores:[String!],$objPrincipal:String!,$objSecundario:[String!],$estado:String!,$presupuesto:Int!,$avances:[String!],$habilitado:String!){ 
  createProject(
    nombre: $nombre,
    iPrincipal:$iPrincipal,
    investigadores:$investigadores,
    objPrincipal: $objPrincipal,
    objSecundario:$objSecundario,
    estado:$estado,
    presupuesto:$presupuesto,
    avances:$avances,
    habilitado:$habilitado
  )
    {
      _id
    }
  }
`;


export const DELETE_PROJECT = gql`
mutation deleteProject ($nombre:String!){ 
  deleteProject(
    nombre: $nombre
  )
    {
      _id
    }
  }
`;


export const UPDATE_PROJECT = gql`
  mutation actualizarProject ($nombre:String!,$iPrincipal:String!,$investigadores:[String!],$objPrincipal:String!,$objSecundario:[String!],$estado:String!,$presupuesto:Int!,$avances:[String!],$habilitado:String!){ 
    actualizarProject(
      nombre: $nombre,
      iPrincipal:$iPrincipal,
      investigadores:$investigadores,
      objPrincipal: $objPrincipal,
      objSecundario:$objSecundario,
      estado:$estado,
      presupuesto:$presupuesto,
      avances:$avances,
      habilitado:$habilitado
      )
  {
    _id
  }
  }
`;


export const DELETE_INSCRIPCION = gql`
mutation deleteInscription ($nombre:String!,$proyecto:String!){ 
  deleteInscription(
    nombre: $nombre,
    proyecto:$proyecto
  )
    {
      _id
    }
  }
`;

export const CREATE_INSCRIPCION = gql`
mutation createInscription ($nombre:String!,$apellido:String!,$idEstudiante:Int!,$proyecto:String!,$estadoSolicitud:String!){ 

  createInscription(
    nombre: $nombre,
    apellido:$apellido,
    idEstudiante:$idEstudiante,
    proyecto: $proyecto,
    estadoSolicitud:$estadoSolicitud,
  )
    {
      _id
    }
  }
`;

export const UPDATE_INSCRIPCION = gql`
  mutation actualizarInscripcion ($nombre:String!,$proyecto:String!,$estadoSolicitud:String!){ 
    actualizarInscripcion(
      nombre:$nombre,
      proyecto:$proyecto,
      estadoSolicitud:$estadoSolicitud
      )
  {
    _id
  }
  }
`;

export const UPDATE_INVESTI = gql`
  mutation agregarInvestigador ($nombre:String!,$estudianteAgregado:String!){ 
    agregarInvestigador(
      nombre:$nombre,
      estudianteAgregado:$estudianteAgregado,
      )
  {
    _id
  }
  }
`;


  



  