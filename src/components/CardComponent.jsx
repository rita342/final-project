import React,{Component} from 'react';
import smallCard from "../data/smallCard.json"
import {Col,Image,Container,Row} from 'react-bootstrap'


const CardComponent=()=>{
 
        return (

         <Container>
            <Row className="flex flex-wrap ">

         {
            smallCard.map(card => {
return<Col xs={12}sm={12} md={6} lg={6} xl={3}> <div className=" flex item-center m-2 mt-5 space-x-4 rounded-xl 
flex-flow: column wrap;" >
 
  
    <Image src={card.img}rounded layout="fill" className="rounded-lg"style={{width:'100px',borderRadius:'20px'}}/>
  
         {/*Right*/}
         <div style={{float:'right', marginTop:'20px'}}>
        <h6 style={{fontsize:'15px'}}>{card.location}</h6>
        <h6 style={{fontsize:'15px'}}>{card.distance}</h6>
        </div>
</div> </Col>
            } 
)

    }
   
    </Row>
    </Container>
        ) 
}
export default CardComponent