import { useEffect, useState } from 'react'
import { Card, Col, Container, Row,Button ,Carousel} from 'react-bootstrap'
import items from '../data/menu.json'
import DatePicker from './DatePickerComponent'
import { MdOutlineFacebook } from "react-icons/md";
import { BsTwitter  } from "react-icons/bs";

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
        <div className="DishDetails">
      <Container> 
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
     <Container>
 
    
  <Row style={{marginTop:'8rem'}}>
    <Col xs={12} md={12} lg={6} xl={6}><div className="" ><img src={pastaItem.img}  style={{width:'100%',height:'100%'}} /></div></Col>
    <Col><Row>  <Col xs={12} md={12} lg={6} xl={6}>
  <div clssName="">  <img src={pastaItem.img1}alt="display image" style={{width:'100%',height:'100%',marginBottom:'33px'}}/></div>
  </Col></Row>  <Row><Col xs={12} md={12} lg={6} xl={6}>
 <div className=""> <img src={pastaItem.img2}alt="display image" style={{width:'100%',height:'100%'}}/></div>
    </Col></Row> </Col>
  
  </Row>
</Container>
  
<h4>enter your date</h4>
<div className="card">
    <DatePicker/></div>


   
 
  </>
                                
                            )
                }
           

            <hr style={{background:'pink'}}/>
    <div class="container" style={{fontSize: '11px',color: 'grey',background:'black'}}>

        <div class="row" style={{marginRight: '75px',color: 'pink',fontSize:'16px',fontWeight:'600',marginTop:'30px'}}>
            <div class="col-12 col-md-3">ABOUT</div>
            <div class="col-12 col-md-3">COMMUNITY</div>
            <div class="col-12 col-md-3">HOST</div>
            <div class="col-12 col-md-3">SUPPORT</div>

        </div>
        <div class="row" style={{marginRight:'75px',marginTop: '5px',color: 'grey'}}>
            <div class="col-12 col-md-3">How Airbnb Works</div>
            <div class="col-12 col-md-3">Diversity & Belonging</div>
            <div class="col-12 col-md-3">Host your home</div>
            <div class="col-12 col-md-3">Our Covid-19 Response</div>

        </div>
        <div class="row" style={{marginRight: '75px',color: 'grey'}}>
            <div class="col-12 col-md-3">Newstroom</div>
            <div class="col-12 col-md-3">Accessiblity</div>
            <div class="col-12 col-md-3">Host Online Experience</div>
            <div class="col-12 col-md-3">Help Center</div>

        </div>
        <div class="row"  style={{marginRight:'75px',marginTop: '5px',color: 'grey'}}>
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
           <h6>Privacy .Terms .Sitemap</h6> </div>
        </Container>
        <div>
        
        </div>
        </div>
    )
}

export default DishDetails