import React from 'react';

import Card from 'react-bootstrap/Card';

const Filmcard =({titre,description,posterURL,note}) =>{
  return (
    <div>
    <Card>
      <Card.Body>
        <p>titre  :  {titre}</p>
        <p>description  :  {description}</p>
        <p>posterURL  :  {posterURL}</p>
        <p>note  :  {note}</p>
      
      </Card.Body>
    </Card>
    
    </div>
  );
}

export default Filmcard;