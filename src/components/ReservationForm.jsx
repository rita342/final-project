import React, { Component } from 'react';
import imgpet from '../images/img-pet.jpg'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import {Col,Container,Row} from 'react-bootstrap'



class Main extends Component {
    render() {
        return (
            <Container>
                <Row className="flex flex-wrap  disply-inline">
                    <Col xs={12}sm={12} md={6} lg={3} xl={3}>  

          <div className=" flex item-center m-2 mt-5 space-x-4 
">
              <img src={img1} layout="fill" style={{width:'300px',borderRadius:'10px'}}/>   
              <h4>Outdoor getways</h4>  
         </div>
          <div className=" flex item-center m-2 mt-5 space-x-4 
">
          <img src={img2} layout="fill" style={{width:'300px',borderRadius:'10px'}}/>  
          <h4>Unique Stays</h4>     
     </div>
     <div className=" flex item-center m-2 mt-5 space-x-4 
">
     <img src={img3} layout="fill" style={{width:'300px',borderRadius:'10px'}}/>  
     <h4>Entire homes</h4>     
</div>
 <div className=" flex item-center m-2 mt-5 space-x-4 
">
 <img src={imgpet} layout="fill" style={{width:'300px',borderRadius:'10px'}}/>  
 <h4>Pet allowed</h4>     
</div>
</Col>
</Row>
     </Container>   
               
        );
    }
}

export default Main;