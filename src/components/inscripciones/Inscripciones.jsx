import { useQuery } from '@apollo/client';
import PrivateRoute from 'components/PrivateComponent';
import React, {useState, useEffect} from 'react';
import { GET_INSCRIPCIONES } from 'graphql/inscripciones/queries';


const Inscripciones = () => {
   const { data, loading, error } = useQuery(GET_INSCRIPCIONES);

   useEffect(() => {
       console.log(data);
      },[data]);

   if (loading) return <div>Cargando...</div>;
return(
<PrivateRoute roleList= {["ADMINISTRADOR","LIDER"]}>
   <div>
    <div>Página de inscripciones</div>
    <div>
    {data&&
    data.Inscripciones.map(Inscripcion=>{
        return(<inscripcion inscripcion={inscripcion}/>);
    })}
    </div>
   </div> 
</PrivateRoute>
);
};

const inscripcion = ({inscripcion})=>{
    return(<div>
        <span>{inscripcion.proyecto.nombre}</span>
        <span>{inscripcion.estudiante.nombre}</span>
        <span>{inscripcion.estado.nombre}</span>


    </div>)
}

export default Inscripciones;