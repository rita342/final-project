import React from 'react';
import imgpet from '../images/img-pet.jpg'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/imgcrop.jpg'
import {Col,Container,Row,Image} from 'react-bootstrap'




    const MediumCard = () => {
        return(
            <Container style={{marginTop:'5rem'}}>
            <Row>
    <Col xs={12} md={6} lg={6} xl={3}>
    <div class="card">
              <Image src={img1} layout="fill" style={{}}/>   
              <h5>Outdoor getways</h5>  
              </div>
         </Col>
    <Col  xs={12} md={6} lg={6} xl={3}> 
    
    <div class="card">
          <Image src={img2} layout="fill" />  
          <h5>Unique Stays</h5>     
          </div>
     </Col>
    <Col xs={12} md={6} lg={6} xl={3}> 
      
    <div class="card">
     <Image src={img3} layout="fill" />  
     <h5>Entire homes</h5>     
     </div>
</Col>
    <Col xs={12} md={6} lg={6} xl={3}>
    <div class="card"> 
 <Image src={imgpet} layout="fill"/>  
 <h5>Pet allowed</h5>     
 </div>
</Col>
  </Row>
  
  <Row>
    <Col xs={12} md={12} lg={12}><Image src={img4} layout="fill" objectFit="cover"  style={{width:'100%',borderRadius:'10px',height:'400px',marginTop:'5rem',marginBottom:'5rem'}}/> 
    <h2 id=" big-card"style={{marginTop:'-40%'}}></h2>
     </Col>
    
  </Row>

  

</Container>
              
        )
}

export default MediumCard;