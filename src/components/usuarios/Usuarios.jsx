import React from 'react';
import {Card,Button,Container} from 'react-bootstrap'



function Usuarios(){
return(


<Card style={{ width: '10rem' }}>

  <Card.Body>
    <Card.Title>Bryan García</Card.Title>
    <Card.Text>
      Ing. electrónico
      Grupo PSI
    </Card.Text>
    <Button variant="primary">Ver</Button>
  </Card.Body>

  <Card.Body>
    <Card.Title>Rosa Libreros</Card.Title>
    <Card.Text>
      Enfermera
      Hospital VL
    </Card.Text>
    <Button variant="primary">Ver</Button>
  </Card.Body>

</Card>

)
};

export default Usuarios;