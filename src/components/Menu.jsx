import { Badge, Col, Container, Row ,Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import items from '../data/menu.json'

const Menu = ({ history }) => (
    <Container id="container">
        {
            items.map(house => (
 
                <Row key={house.id} className="justify-content-start" style={{marginTop:'30px'}}>
                    <Col>
                        <Link to={'/details/' + house.id}>
                            <Image src={house.img} style={{width:'500px',height:'350px',borderRadius:'50px'}} />
                        </Link>
                        {/* another way of doing a redirect */}
                        {/* <img src={dish.image} alt="some pasta" onClick={() => {
                            history.push('/details/' + dish.id)
                        }} /> */}
                         </Col>
                         <Col className="card"style={{width:'200px',height:'350px',borderRadius:'50px'}}>
                        <h4>
                            {house.location}
                            <Badge variant="warning">{house.price}</Badge>
                            
                        </h4>
                   </Col>
                </Row>
                
            ))
        }
    </Container>
)

export default Menu