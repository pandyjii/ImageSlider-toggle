
import { useState } from 'react';
import data from'./Data';
import './Sliders.css'

function Sliders(){
   

   
    const[index,setIndex]=useState(0)
    const[toggle,setToggle]=useState(false);
     
    const Data=data[index]
 
    function handleNext(){
        setIndex(index+1);

        if(index===data.length-1){
            setIndex(0);
        }
    }


    function handlePrevios(){

        setIndex(index-1);
         if(index===0){
            setIndex(10)
         }

    }


    function handleToggle(){
        setToggle(!toggle);
    }

    
    return(
        <>
        <div className='img-botton'>
        <button onClick={handleNext} className='next-img'>next</button>
        <button onClick={handlePrevios}  className='previous-img' >Previous</button>

        </div>

        <div className='product-container'>
        
            {
                <>
                <p className='img-name'>{Data.name} </p>
                <p className='img-index'>Total <span className='total'>({data.length})</span>   Index<span>({index})</span>  </p>
                <img 
                src={Data.url}  
                />
                <button  onClick={handleToggle} className='togglebutton'  >{toggle?'hide':'show'}</button>
               { toggle?<p className='img-desciption'>{Data.description}</p>:''}
                
                </>
            }
        </div>
    

     
        </>
    )
}

export default Sliders;