import { Badge, Col, Container, Row ,Image,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import items from '../data/menu.json'
import img2 from '../images/img2.jpg'

const Menu = ({ history }) => {
    return(
<div className="Menu"style={{backgroundImage:`url("https://latenitesunlite.files.wordpress.com/2014/10/wood-texture-rnhi1ed1.jpg")` ,padding:'30px'}}>
    <Container id="container">
        {
            items.map(house => (
 
                <Row key={house.id} className="justify-content-start" style={{}}>
                    <Col>
                    <Card style={{width:'300px',marginTop:'30px'}}>
    <Card.Img variant="top" src={house.img} style={{width:'300px'}}/>
    
    
 
   
  </Card>
                         
                       
                       
                         </Col>
                         <Col>
                             <div className="">
                        <h4 style={{alignItems:'center',fontFamily:'Lucida Handwriting, Brush Script MT,cursive',color:'pink',marginTop:'30px'}}>
                            {house.location}
                           
                 
                        </h4>
                        <p style={{color:'white',fontSize:'15px'}}> {house.description}</p>
                        <Link to={'/details/' + house.id}> <button style={{backgroundColor:'transparent',border:'0.5px solid grey',borderRadius:'10px',color:'white'}}>Learn More</button> </Link>
                      
                        </div>
                   </Col>
                </Row>
                
            ))
        }
    </Container>
    </div>
    )
    }

export default Menu