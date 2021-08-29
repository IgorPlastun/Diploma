import React from 'react'



export default function ProgressBar(){

    return(
        <div style={{width:'100%',maxWidth:'100vw', display:'flex', justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            
            <div style={{display:'flex',width:'800px',maxWidth:'100vw',justifyContent:'flex-end',margin:'5px'}}>
                 <span style={{marginRight:'5px'}}>ТОКЕНЫ</span>
                 <span>200</span>
                 <span>/</span>
           <span style={{marginRight:'10px'}}>200</span>
           <span style={{marginRight:'5px'}}>МИСИИ</span>
               <span>0</span>
               <span>/</span>
               <span>200</span>
         </div>       
            <div style={{display:'flex', width:'800px',maxWidth:'800px',justifyContent:'center', marginBottom:'20px'}}>
                <progress  style={{border:'none',background:'blue',width:'800px',height:'20px'}} value='76' max='100'></progress>
            </div>
        </div>
    )

}