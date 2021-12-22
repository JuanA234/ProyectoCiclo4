import React from 'react';
import {Carousel} from 'react-bootstrap'


function Contenido(){
return(
//<Container>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("./imgHome/imagen1.jpg").default}
      alt="First slide"
    />



    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("./imgHome/imagen2.jpg").default}
      alt="Second slide"
    />


    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("./imgHome/imagen3.jpg").default}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

//</Container>



)
};


export default Contenido;