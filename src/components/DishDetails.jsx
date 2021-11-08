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
        <div className="DishDetails"style={{backgroundImage:`url("https://ipt.imgix.net/200427/x/0/iceland-photo-tours-iurie55.jpg?ar=1.91%3A1&w=1400&fit=crop")`,repeat:'norepeat'}}>
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
                                <div className="card" style={{marginTop:'50px',borderRadius:'20px',background:'transparent',textAlign:'center',border:'1px solid grey',marginBottom:'200px'}}>
                                
                        <h4 style={{alignItems:'center',fontFamily:'Lucida Handwriting, Brush Script MT,cursive',color:'pink',marginTop:'30px'}}>
                            {pastaItem.location}
                           
                 
                        </h4>

                        <p style={{color:'white',fontSize:'15px'}}>Number Of Rooms:{pastaItem.rooms}</p>
                        <p style={{color:'white',fontSize:'15px'}}>Number Of Rooms:{pastaItem.description}</p>
                        <p style={{color:'white',fontSize:'15px'}}>Total Price: {pastaItem.price}$</p>
                        <button style={{backgroundColor:'transparent',border:'0.5px solid grey',borderRadius:'10px',color:'white',width:'150px',marginLeft:'20rem',marginBottom:'20px'}}>Add To your list</button>
    </div>
    </Col>

 
   
 
  </>
                                
                            )
                }
            </Row>
        </Container>
        <div>
        
        </div>
        </div>
    )
}

export default DishDetails