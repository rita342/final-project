import { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
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
<h4>enter your date</h4>
<div className="card">
    <DatePicker/></div>

</Col>
 
   
 
  </>
                                
                            )
                }
            </Row>

            <hr style={{background:'pink'}}/>
    <div class="container" style={{fontSize: '11px',color: 'grey',background:'black'}}>

        <div class="row" style={{marginRight: '75px',color: 'pink',fontSize:'18px',fontWeight:'600'}}>
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