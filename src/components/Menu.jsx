import { Badge, Col, Container, Row ,Image,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import items from '../data/menu.json'
import img2 from '../images/img2.jpg'
import { MdOutlineFacebook } from "react-icons/md";
import { BsTwitter  } from "react-icons/bs";

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
        <hr style={{background:'pink'}}/>
    <div class="container" style={{fontSize: '11px',color: 'grey',background:'transparent'}}>

        <div class="row" style={{marginRight: '75px',color: 'black',fontSize:'18px',fontWeight:'600'}}>
            <div class="col-12 col-md-3">ABOUT</div>
            <div class="col-12 col-md-3">COMMUNITY</div>
            <div class="col-12 col-md-3">HOST</div>
            <div class="col-12 col-md-3">SUPPORT</div>

        </div>
        <div class="row" style={{marginRight:'75px',marginTop: '5px',color: 'white',fontSize:'12px'}}>
            <div class="col-12 col-md-3">How Airbnb Works</div>
            <div class="col-12 col-md-3">Diversity & Belonging</div>
            <div class="col-12 col-md-3">Host your home</div>
            <div class="col-12 col-md-3">Our Covid-19 Response</div>

        </div>
        <div class="row" style={{marginRight: '75px',color: 'white',fontSize:'12px'}}>
            <div class="col-12 col-md-3">Newstroom</div>
            <div class="col-12 col-md-3">Accessiblity</div>
            <div class="col-12 col-md-3">Host Online Experience</div>
            <div class="col-12 col-md-3">Help Center</div>

        </div>
        <div class="row"  style={{marginRight:'75px',marginTop: '5px',color: 'white',fontSize:'12px'}}>
            <div class="col-12 col-md-3">Airbnb 2021</div>
            <div class="col-12 col-md-3">Airbnb Associates</div>
            <div class="col-12 col-md-3">Host an Experience</div>
            <div class="col-12 col-md-3">Cancellation options</div>

        </div>
        <div class="row" style={{marginRight:'75px',marginTop: '5px',color: 'grey'}}>
            <div class="col-12 col-md-3">Investors</div>
            <div class="col-12 col-md-3">Frontline Stays</div>
            <div class="col-12 col-md-3">Responsible hosting</div>
            <div class="col-12 col-md-3">Neighbourhood Support</div>

        </div>
        <div class="row" style={{marginRight:'75px',marginTop: '5px',color: 'grey'}}>
            <div class="col-12 col-md-3">Airbnb plus</div>
            <div class="col-12 col-md-3">Guest Referrals</div>
            <div class="col-12 col-md-3">Resource Center</div>
            <div class="col-12 col-md-3">Trust & Saftey</div>

        </div>
        <div class="row" style={{marginRight:'75px',marginTop: '5px',color: 'grey'}}>
            <div class="col-12 col-md-3">Airbnb Lux</div>
            <div class="col-12 col-md-3">Airbnb.org</div>
            <div class="col-12 col-md-3">Community Center</div>


        </div>
        <div class="row" style={{marginRight:'75px',marginTop: '5px'}}>
            <div class="col-12 col-md-3">HotelTonight</div>
        </div>
        <div class="row" style={{marginRight:'75px',marginTop: '5px',color: 'grey'}}>
            <div class="col-12 col-md-3">Airbnb for Work</div>
        </div>
        <div class="row" style={{marginRight:'75px',marginTop: '5px',color: 'grey'}}>
            <div class="col-12 col-md-3">Made possible by Hosts</div>
        </div>
        <div class="row" style={{marginRight:'75px',marginTop: '5px',color: 'grey'}}>
            <div class="col-12 col-md-3">Careers</div>
        </div>
        <div class="row" style={{marginRight:'75px',marginTop: '5px',color: 'grey'}}>
            <div class="col-12 col-md-3">Founder's Letter</div>
            
            <p><MdOutlineFacebook style={{fontSize:'30px'}}/></p>
            <p>< BsTwitter style={{fontSize:'30px',padding:'5px'}}/></p>
         
        </div>  <h6>2021 Airbnb,Inc.</h6>
           <h6>Privacy .Terms .Sitemap</h6></div>
    </Container>
    </div>
    )
    }

export default Menu