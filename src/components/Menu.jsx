import { Badge, Col, Container, Row ,Image,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import items from '../data/menu.json'
import img2 from '../images/img2.jpg'
import { MdOutlineFacebook } from "react-icons/md";
import { BsTwitter  } from "react-icons/bs";
import { useState} from 'react'

const Menu = ({ history }) => {
    const [searchTerm, setSearchTerm] = useState("")
    return(
<Container style={{marginTop:'5rem'}}>
                <Row   id="search-result" style={{flexWrap:'wrap',display:'flex'}}>           
{items.filter((val)=>{
        if(searchTerm ==""){
                return val
        }else if (val.country.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
        }
}).map((val,key)=>{
      
        return(
              
        <Col xs={12} md={6} lg={6} xl={3} style={{marginTop:'20px'}}>
        
        
           
        <Link to={'/details/' + val.id}>   <Image src={val.img} layout="fill" style={{width:'100%',height:'200px',borderRadius:'20px'}}/></Link>
            <div style={{float:'right', marginTop:'20px'}}>
        <h6 style={{fontsize:'15px'}}>{val.country}</h6>
        <h6 style={{fontsize:'15px'}}>{val.price}$</h6>
      
        </div>
   
 
                
                 
             </Col>
              
            )
        
})}  </Row>
      
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
   
    )
    }

export default Menu