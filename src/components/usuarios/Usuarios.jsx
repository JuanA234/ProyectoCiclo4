import React, { useState, useEffect } from "react";
import { Card, Button, Container, Table, FormGroup } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_USERS } from "../../graphql/Queries.js";
import { CREATE_USERS } from "../../graphql/Mutation.js";
import { DELETE_USERS } from "../../graphql/Mutation.js";
import { UPDATE_USER } from "../../graphql/Mutation.js";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [varShow, setVarShow] = useState(false);
  const [invisibleBotonActualizar, setInvisibleBotonActualizar] =
    useState(true);
  const [invisibleBotonInsertar, setInvisibleBotonInsertar] = useState(true);

  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [correo, setCorreo] = useState();
  const [rol, setRol] = useState();
  const [estado, setEstado] = useState();
  const [canDatos, setCanDatos] = useState();

  //Parte Graphql

  //const { loading, error, data } = useQuery(GET_CHARACTERS);
  const { loading, error, data } = useQuery(GET_USERS);
  loading ? console.log("cargando") : console.log(data.usuarios);

  const [
    createUser,
    {
      data: dataCrearUsuario,
      error: errorCrearUsario,
      loading: loadingCrearUsuario,
    },
  ] = useMutation(CREATE_USERS);

  const [
    deleteUser,
    {
      data: dataDeleteUsuario,
      error: errorDeleteUsario,
      loading: loadingDeleterUsuario,
    },
  ] = useMutation(DELETE_USERS);


  const [
    actualizarUser,
    {
      data: dataActualizarUsuario,
      error: errorActualizarUsario,
      loading: loadingActualizarUsuario,
    },
  ] = useMutation(UPDATE_USER);

  /*--------------------------------*/

  //Cuando hay un cambio en el dato mencionado se ejecuta la funcion interna
  useEffect(() => {
    console.log("Datos cambiaron", dataDeleteUsuario);
  }, [dataDeleteUsuario]);

  const infoInicial = "Usarios Almacenados en el sistema";

  return (
    <>
      <Container>
        <h1>{infoInicial}</h1>
        <br />
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Estado</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.usuarios.map((datos) => (
                <tr key={datos.nombre}>
                  <td>{datos.nombre}</td>
                  <td>{datos.apellido}</td>
                  <td>{datos.correo}</td>
                  <td>{datos.rol}</td>
                  <td>{datos.estado}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() =>
                        handlerEditarUser(
                          datos.nombre,
                          datos.apellido,
                          datos.correo,
                          datos.rol,
                          datos.estado
                        )
                      }
                    >
                      Editar
                    </Button>{" "}
                    <Button
                      key={datos.nombre}
                      className="btn btn-danger"
                      onClick={() => handlerEliminarUser(datos.nombre)}
                    >
                      Eliminar
                    </Button>{" "}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <Button color="primary" onClick={() => handlerInsertarUsuario()}>
          Agregar Nuevo Usuario
        </Button>{" "}
        <Button
          className="btn btn-danger"
          onClick={() => handlerActualizarPage()}
        >
          Actualizar
        </Button>
      </Container>

      <Modal isOpen={varShow}>
        <ModalHeader>
          <div>
            <h3>Insertar Personaje</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>
            <input
              className="form-control"
              readOnly
              type="text"
              value={canDatos}
            />
          </FormGroup>

          <FormGroup>
            <label>Nombre:</label>
            <input
              className="form-control"
              name="personaje"
              type="text"
              onChange={(e) => setNombre(e.target.value)}
              placeholder={nombre}
            />
          </FormGroup>

          <FormGroup>
            <label>Apellido:</label>
            <input
              className="form-control"
              name="apellido"
              type="text"
              onChange={(e) => setApellido(e.target.value)}
              placeholder={apellido}
            />
          </FormGroup>

          <FormGroup>
            <label>Correo:</label>
            <input
              className="form-control"
              name="correo"
              type="email"
              onChange={(e) => setCorreo(e.target.value)}
              placeholder={correo}
            />
          </FormGroup>

          <FormGroup>
            <label>Rol:</label>
            <input
              className="form-control"
              name="rol"
              type="text"
              onChange={(e) => setRol(e.target.value)}
              placeholder={rol}
            />
          </FormGroup>

          <FormGroup>
            <label>Estado:</label>
            <input
              className="form-control"
              name="estado"
              type="text"
              onChange={(e) => setEstado(e.target.value)}
              placeholder={estado}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
            disabled={invisibleBotonInsertar}
            onClick={() => handlerCrearUsuario()}
          >
            Insertar
          </Button>

          <Button color="primary" disabled={invisibleBotonActualizar} onClick={() => handlerEnviarEditUser()}>
            Actualizar
          </Button>

          

          <Button
            className="btn btn-danger" onClick={() => handlerCerrarModal()}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );

  function handlerInsertarUsuario() {
    setInvisibleBotonActualizar(true);
    setInvisibleBotonInsertar(false);

    setVarShow(true);
    setCanDatos(data.usuarios.length + 1);
  }

  function handlerCerrarModal() {
    //console.log(nombre,apellido,correo,rol,estado);
    setNombre("");
    setApellido("");
    setCorreo("");
    setRol("");
    setEstado("");
    setInvisibleBotonActualizar(true);

    setVarShow(false);
  }

  function handlerCrearUsuario() {
    //console.log(varShow);
    //createUser( {variables: {nombre: "Martina",apellido:"Gutierres",correo:"gm@gmail.com",rol:"Estudiante",estado:"Pendiente"} })  ;
    createUser({
      variables: {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        rol: rol,
        estado: estado,
      },
    });

    setVarShow(false);
    alert("Usuario Creado");
    window.location.reload(false);
  }

  function handlerEliminarUser(keyValue) {
    console.log(keyValue);
    alert("Elimando a " + keyValue);

    deleteUser({
      variables: {
        nombre: keyValue,
      },
    });
    window.location.reload(false);
  }

  function handlerEditarUser(nom, apelli, corr, role, estat) {
    setNombre(nom);
    setApellido(apelli);
    setCorreo(corr);
    setRol(role);
    setEstado(estat);
    alert("Editando a " + nom);
    setInvisibleBotonActualizar(false);
    setInvisibleBotonInsertar(true);
    setVarShow(true);
  }

  function handlerEnviarEditUser() {
    console.log(nombre,apellido,correo,rol,estado);
    actualizarUser({
      variables: {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        rol: rol,
        estado: estado,
      },
    });
    window.location.reload(false);
    setVarShow(false);
  }

  function handlerActualizarPage() {
    window.location.reload(false);
  }
}

export default Usuarios;
