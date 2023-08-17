import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Header({rol, companyname, batch, link, desk})
{  return(
     <Card  style={{ width: '54rem'}}>
     <Card.Title className="text-center" >{companyname}|{rol}|{batch}</Card.Title>
     <Card.Text  className='text-center'>2 days ago</Card.Text>
     <Card.Body>
       <Card.Text>
         <strong style={{fontSize: '1.2em'}}>Company Name: </strong> {companyname}
         <br/>
         <strong style={{fontSize: '1.2em'}}>Job Role: </strong>{rol}<br/>
         <strong style={{fontSize: '1.2em'}}>Experience: </strong>{desk}<br/>
         <strong style={{fontSize: '1.2em'}}>Batch: </strong>{batch}
       </Card.Text>
       <div className='text-center'>
       <Button  href={link} variant="primary">Apply</Button>
       </div>
       
     </Card.Body>
     
   </Card>
);
}
export default Header