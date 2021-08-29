import React from 'react'
import TaskItem from './TaskItem'
import ProgressBar from './ProgressBar'


export default function TaskList({tasks, bol}){
    
    return(
        <div style={{display:'flex',maxWidth:'800px' ,width:'100vw',flexDirection:'column',alignItems:'center'}}>
        <div style={{width:'100%',maxWidth:'800px' ,justifyContent:'space-between',display:'flex',flexDirection:'column'}}>
        <ProgressBar></ProgressBar>
                <div style={{display:'flex',justifyContent:'space-between',marginBottom:'20px',width:'800px',maxWidth:'800px'}}>
                    <span style={{fontSize:'20px',color:'silver'}}>
                   {
                        tasks.map(task=><span>{task.date}</span>)
                  }
                  </span>
                  <div>
                      <span>5сек</span>               
                      <span>35сек</span>
                  </div>
                  
                </div> 
               
                {
                        tasks.map(task=><TaskItem bol={bol} task={task}></TaskItem>)
                }
            </div>
        </div>
        
    )

}