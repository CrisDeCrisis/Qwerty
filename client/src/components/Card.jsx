import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Cards = React.forwardRef(({NombreUsuario, Genero, Pais, Roles, TipoSangre}, ref) => {
  const cardsBody = (
    
       <Card.Body>
         <Card.Title>{NombreUsuario}</Card.Title>
         <Card.Text>
          {Genero}
         </Card.Text>
         <Card.Text>
          {Pais}
         </Card.Text>
         <Card.Text>
          {Roles}
         </Card.Text>
         <Card.Title>Grupo sanguíneo: {TipoSangre}</Card.Title>
         <Button variant="primary">Comprar</Button>
       </Card.Body>
     
  )

  const content = ref ? (
    <Card ref={ref} style={{ width: "15rem" }}>
      {cardsBody}
    </Card>
  ) : (
    <Card style={{ width: "15rem" }}>
      {cardsBody}
    </Card>
  );

  return content;
})

export default Cards;