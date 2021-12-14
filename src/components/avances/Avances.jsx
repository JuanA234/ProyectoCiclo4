import React, { useState, useEffect } from "react";
import {Button, Container, Table, FormGroup,Dropdown,DropdownButton } from "react-bootstrap";

import Forbiden from "../shared/forbiden/Forbiden";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_PROJECTS } from "../../graphql/Queries.js";
import { CREATE_PROJECT,DELETE_PROJECT,UPDATE_PROJECT } from "../../graphql/Mutation.js";
import { useAuth0 } from "@auth0/auth0-react";
import Validar from "../../functions/Validar.js";

function Proyectos() {
  //const [usuarios, setUsuarios] = useState([]);
  const [varShow, setVarShow] = useState(false);
  const [invisibleBotonActualizar, setInvisibleBotonActualizar] = useState(true);
  const [invisibleBotonInsertar, setInvisibleBotonInsertar] = useState(true);

  const [canDatos, setCanDatos] = useState();

  const [nombreProyecto, setNombreProyecto] = useState("");
  const [iprincipal, setIprincipal] = useState("");
  const [investigadores, setInvestigadores] = useState("");
  const [objPrincipal, setObjPrincipal] = useState("");
  const [objSecundario, setObjSecundario] = useState("");
  const [estadoProyecto, setEstadoProyecto] = useState("Detenido");
  const [presupuesto, setPresupuesto] = useState(0);
  const [avances, setAvances] = useState("");
  const [habilitado, setHabilitado] = useState("Inactivo");

  const { user, isAuthenticated } = useAuth0();


  const { loading, error, data } = useQuery(GET_PROJECTS);
  
  const [
    createProject,
    {
      data: dataCrearProyecto,
      error: errorCrearProyecto,
      loading: loadingCrearProyecto,
    },
  ] = useMutation(CREATE_PROJECT);


  const [
    deleteProject,
    {
      data: dataProject,
      error: errorProject,
      loading: loadingProject,
    },
  ] = useMutation(DELETE_PROJECT);


  const [
    actualizarProject,
    {
      data: dataActualizarProject,
      error: errorActualizarProject,
      loading: loadingActualizarProject,
    },
  ] = useMutation(UPDATE_PROJECT);



  // Fin GraphQL

  const infoInicial = "Proyectos Almacenados en el sistema";

  let tipoUsuario = Validar();
  console.log(tipoUsuario);

  if (isAuthenticated) {
    return (
      <>
        <Container>
          <h1>{infoInicial}</h1>
          <br />
          <Table>
            <thead>
              <tr>
                <th>Nombre del proyecto</th>
                <th>Objetivo Principal</th>
                <th>Objetivos Secundarios</th>
              </tr>
            </thead>

            <tbody>
              {data &&
                data.proyectos.map((datos) => (
                  <tr key={datos.nombre}>

                    <td>{datos.nombre}</td>
                    <td>{datos.objPrincipal}</td>
                    <td>{datos.objSecundario}</td>

                    <td>
                    <Button
                        color="primary"
                        onClick={() =>
                          handlerEditarProject(
                            datos.nombre,
                          )
                        }
                      >
                        Ver Avances
                      </Button>
                  </td>
                  </tr>

                ))}

            </tbody>
          </Table>
       
        </Container>


        <Container>
          <h1>Avances del Proyecto</h1>
          <br />
          <Table>
            <thead>
              <tr>
                <th>Nombre del proyecto</th>
                <th>Avances</th>
                <th>Observaciones</th>
              </tr>
            </thead>

            <tbody>
              {data &&
                data.proyectos.map((datos) => (
                  <tr key={datos.nombre}>

                    <td>{datos.nombre}</td>
                    <td>{datos.nombre}</td>
                    <td>{datos.nombre}</td>

                    <td>
                    <Button
                        color="primary"
                        onClick={() =>
                          handlerEditarProject(
                            datos.nombre,
                          )
                        }
                      >
                        Agregar Observacion
                      </Button>
                  </td>
                  </tr>

                ))}

            </tbody>
          </Table>
       
        </Container>

        

        








      </>
    );
  } else {
    return <Forbiden />;
  }

  function handlerInsertarProyecto() {
    setInvisibleBotonActualizar(true);
    setInvisibleBotonInsertar(false);
    setVarShow(true);
    setCanDatos(data.proyectos.length + 1);
  }

  function handlerCerrarModal() {
    setNombreProyecto("");
    setIprincipal("");
    setInvestigadores("");
    setObjPrincipal("");
    setObjSecundario("");
    setPresupuesto("");
    setEstadoProyecto("");
    setAvances("");

    setInvisibleBotonActualizar(true);
    setVarShow(false);
  }

  function handlerCrearProyecto() {
    createProject({
      variables: {
        nombre: nombreProyecto,
        iPrincipal: iprincipal,
        investigadores: investigadores,
        objPrincipal: objPrincipal,
        objSecundario: objSecundario,
        estado: estadoProyecto,
        presupuesto: presupuesto,
        avances: avances,
        habilitado: habilitado,
      },
    });

    setVarShow(false);
    alert("Proyecto Creado");
    window.location.reload(false);
  }

  function handlerEliminarProject(keyValue) {
    alert("Elimando proyecto " + keyValue);

    deleteProject({
      variables: {
        nombre: keyValue,
      },
    });
    window.location.reload(false);
  }

  function handlerEditarProject(nombre,iPrincipal,investigadores,objPrincipal,objSecundario,estado,presupuesto,avances,habilitado) {

    setNombreProyecto(nombre);
    setIprincipal(iPrincipal);
    setInvestigadores(investigadores);
    setObjPrincipal(objPrincipal);
    setObjSecundario(objSecundario);
    setPresupuesto(presupuesto);
    setEstadoProyecto(estado);
    setAvances(avances);
    setHabilitado(habilitado);

    alert("Editando a " + nombre);
    setInvisibleBotonActualizar(false);
    setInvisibleBotonInsertar(true);
    setVarShow(true);
  }
  

  function handlerEnviarEditProject() {

    actualizarProject({
      variables: {
        nombre: nombreProyecto,
        iPrincipal: iprincipal,
        investigadores: investigadores,
        objPrincipal: objPrincipal,
        objSecundario: objSecundario,
        estado: estadoProyecto,
        presupuesto: presupuesto,
        avances: avances,
        habilitado: habilitado,
      },
    });
    window.location.reload(false);
    setVarShow(false);
  }

  function handlerActualizarPage() {
    window.location.reload(false);
  }

}

export default Proyectos;
