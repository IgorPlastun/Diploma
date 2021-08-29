import React from 'react'
import Top from './Top100'

export default function ListLink(){

    return(
        <div style={{width:'100%',maxWidth:'100vw', display:'flex', justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
             <div style={{display:'flex',width:'800px',maxWidth:'100vw',justifyContent:'flex-end',marginBottom:'20px'}}>
                <ul style={{}}>
                    <li><a href='#'>#-</a></li>
                    <li><a href='#'>МОЯ ПРОДУКТИВНОСТЬ</a></li>
                    <li><a href='#'>ЗАКАЗЫ</a></li>
                    <li><button style={{width:'20px',height:'20px'}}></button></li>
                </ul>
            </div>  
        </div>
    )
}