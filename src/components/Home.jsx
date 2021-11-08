
import React, { Component } from 'react';
import CardComponent from './CardComponent'
import MediumCard from './MediumCard'
const Home=() => {
  
        return (
           <div>
            <div className ="relative h-[300] sm: h [400] lg:h-[500px]"id="cover" >
                <img src="https://reformarchitekt.pl/wp-content/uploads/2017/01/Dom-RE-JOSHUA-TREE-HOUSE-projektu-architekta-Marcina-Tomaszewskiego-REFORM-Architekt-4.jpg" layout="fill" objectFit="cover"   style={{ backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw'}} />
         
<h5 id="tree">"TREE HOUSES ARE THE ULTIMATE RETURN TO  NATURE"</h5>
</div>           



<div>
  < CardComponent /> 


</div> 
<div>
<MediumCard/>
</div> 
</div>           
        );
    }


export default Home;