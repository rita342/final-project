import { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import items from '../data/menu.json'
import DatePicker from './DatePickerComponent'

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
        <div className="DishDetails"style={{backgroundImage:`url("https://the.ismaili/sites/default/files/7._nature_is_awesome_1.jpg")`,repeat:'norepeat'}}>
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
                                
                        <h2 style={{alignItems:'center',fontFamily:'Lucida Handwriting, Brush Script MT,cursive',color:'black',marginTop:'30px'}}>
                            {pastaItem.location}
                           
                 
                        </h2>

                        <p style={{color:'pink',fontSize:'15px'}}>Number Of Rooms:{pastaItem.rooms}</p>
                        <p style={{color:'black',fontSize:'20px',fontWeight:'500'}}>Number Of Rooms:{pastaItem.description}</p>
                        <p style={{color:'white',fontSize:'15px'}}>Total Price: {pastaItem.price}$</p>
                        <button style={{backgroundColor:'transparent',border:'0.5px solid black',borderRadius:'10px',color:'white',width:'150px',marginLeft:'20rem',marginBottom:'20px'}}>Add To your list</button>
    </div>
    </Col>
<Col style={{marginTop:'70px',fontFamily:'Lucida Handwriting, Brush Script MT,cursive'}}>
<h4>check your date</h4>
<div className="card">
    <DatePicker/></div>

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