import {Col,Container,Row,Image,Nav} from 'react-bootstrap'
import React, { Component } from 'react';
import CardComponent from './CardComponent'
import MediumCard from './MediumCard'
import { useState} from 'react'
import items from '../data/menu.json'
import { Link } from 'react-router-dom'
import { BiGlobe,BiSearch } from "react-icons/bi";
const Home=({history}) => {
        const [searchTerm, setSearchTerm] = useState("")
        const [show,setShow]= useState(true)
    const [show2,setShow2]= useState(true)
  
        return (
                <>
                <div>
                <button onClick ={()=>setShow(!show)} style={{marginLeft:'30%',width:'250px',borderRadius:'15px'}}>Search...<BiSearch style={{marginLeft:'6rem',background:'#ff1493',borderRadius:'10px',color:'white',border:'1px solid grey'}}/></button>
              <div className ="relative h-[300] sm: h [400] lg:h-[200px]"id="cover" >
     <img src="https://a0.muscache.com/im/pictures/9d928940-f0d1-4504-99d3-b69a5f737012.jpg?im_w=1200" layout="fill" objectFit="cover"   style={{ backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
width: '100%',height:'100%',marginBottom:'10%'}} />
</div ><h5 id="tree2">"TREE  HOUSES ARE THE ULTIMATE RETURN TO  NATURE"</h5>
<div id="tree">{show?<Nav id="nav" style={{borderRadius:'20px'}}>
    <li><h6>Location</h6><h6 onClick ={()=>setShow2(!show2)} style={{color:'grey'}}>Where are you going</h6></li>
    <li><h6>Check in</h6><h6 style={{color:'grey'}}>Add date</h6></li>
    <li><h6>Check Out</h6><h6 style={{color:'grey'}}>Add dates</h6></li>
    <li><h6>Guests</h6><h6 style={{color:'grey'}}>Add guests</h6></li>
</Nav>:null}

</div>
<div> {show2?<div className="card"  id = "tree3"style={{width:'320px',height:'100px',borderRadius:'20px'}}><p style={{color:'black',fontSize:'10px',marginLeft:'20px',marginTop:'10px',fontWeight:'600'}}>GO ANY WHERE ANY TIME</p>
<p onClick={() => {
                    console.log('hello!')
                    history.push('/menu')
                }} style={{background:'',borderRadius:'20px',boxShadow:'1px 1px  1px 1px grey',padding:'3px',fontWeight:'700',color:'#8A2BE2'}}>I'M flexible</p></div>:null}</div>
              
        <div >
       
                 </div> 

</div>



<div>
  
 <CardComponent/> 

</div> 
<div>
<MediumCard/>
</div> 
         
        </>  );
    }


export default Home;