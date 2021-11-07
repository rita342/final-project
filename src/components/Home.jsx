
import React, { Component } from 'react';
import CardComponent from './CardComponent'
import MediumCard from './MediumCard'
const Home=() => {
  
        return (
           <div>
            <div className ="relative h-[300] sm: h [400] lg:h-[500px]"id="cover" >
                <img src="https://links.papareact.com/0fm" layout="fill" objectFit="cover"   style={{ backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw'}} />
         
<h6 id="tree">"TREE HOUSES ARE THE ULTIMATE RETURN TO  NATURE"</h6>
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