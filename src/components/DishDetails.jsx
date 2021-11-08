import { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import items from '../data/menu.json'

const DishDetails = ({ match }) => {

    const [pastaItem, setPastaItem] = useState(null)

    useEffect(() => {
        let retrievedIdFromURL = match.params.pastaId

       
        let foundPasta = items.find(pasta => pasta.id.toString() === retrievedIdFromURL)
        // 1 !== '1'
        console.log(foundPasta)
        setPastaItem(foundPasta)
      
    }, [])

    return (
        <div className="DishDetails"style={{backgroundImage:`url("https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=3000")`}}>
        <Container>
            <Row className="justify-content-start">
                {
                    typeof pastaItem === 'undefined'
                        ? (
                            <h1>404 - Pasta Not Found</h1>
                        )
                        : !pastaItem
                            ? (
                                <p>LOADING...</p>
                            )
                            : (
                                <>
                                <Col md={8} className="text-center">
                                      <Card style={{width:'300px',marginTop:'40px'}}>
    <Card.Img variant="top" src={pastaItem.img} style={{width:'300px'}}/>
    <Card.Body>
      <Card.Title>add to my store</Card.Title>
    
    </Card.Body>
   
  </Card></Col>
 <Col>
 <div className="">
                        <h4 style={{alignItems:'center',fontFamily:'Lucida Handwriting, Brush Script MT,cursive',color:'pink',marginTop:'30px'}}>
                            {pastaItem.location}
                           
                 
                        </h4>
                        <p style={{color:'white',fontSize:'15px'}}> {pastaItem.description}</p>
    <button style={{backgroundColor:'transparent',border:'0.5px solid grey',borderRadius:'10px',color:'white'}}>Learn More</button> 
    </div>
 </Col>
  </>
                                
                            )
                }
            </Row>
        </Container>
        </div>
    )
}

export default DishDetails