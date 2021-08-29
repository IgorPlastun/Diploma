import React, {useState} from 'react'


export default function TaskItem(props){
    const running = props.task.running;
    const [check, setCheck] = useState(false)
    let nameRef = React.createRef();
    const handleCheckbox=({target:{checked}})=>{
        console.log(check)
        setCheck(checked)

         //setCheck(nameRef.current.check)
    }
    return(
        <div style={{height:'55px',width:'800px',maxWidth:'800px'}}>          
                {/* {running ?<div>Running</div> : <button>Run</button>} */}
           
                     
            <div style={{width:'100%',maxWidth:'780' ,display:'flex',justifyContent:'center'}}>
            <div style={{width:'80%',maxWidth:'800px'}}>
              <input ref={nameRef} style={{width:'16px',height:'16px'}} checked={check} type='checkbox' onChange={handleCheckbox}></input>
              <span style={{width:'100%',marginLeft:'5px'}}>{props.task.description}</span>
              </div>
              <div style={{width:'10%',maxWidth:'800px'}}>
                 <span style={{marginRight:'10px'}}>
                     <span style={{marginRight:'2px'}}>{props.task.minuts>0?props.task.minuts+'мин':''}</span>
                     <span>{props.task.minuts>0? '/':''}</span>
                     <span>{props.task.hours>0?props.task.hours+'ч':''}</span>
                     </span>
                     </div>
                   {
                       // доделать отображение кнопок по чекбоксу
                       check === true ? <div style={{display:'flex',flexWrap:'nowrap'}}>
                       <button style={{outline:'none',borderRadius:'4px',width:'20px',height:'20px',marginRight:'10px'}}></button>
                       <button style={{outline:'none',borderRadius:'4px',width:'20px',height:'20px',marginRight:'10px'}}></button>
                                         
                       </div> : <div style={{display:'flex',flexWrap:'nowrap'}}>
                         <button style={{outline:'none',borderRadius:'4px',width:'20px',height:'20px',marginRight:'10px'}}></button>
                       <button style={{outline:'none',borderRadius:'4px',width:'20px',height:'20px'}}></button> 
                        </div>
                   }
                     
        </div>
        <div style={{width:'100%', maxWidth:'780px',display:'flex',alignContent:'center'}}>
            <progress style={{height:'2px' , borderRadius:'0px', color:'teal',width:'100%'}} max='100' value='70'></progress>
        </div>
        </div>
       
    )
}