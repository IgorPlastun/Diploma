import React, {useState} from 'react'
import TaskList from './TaskList'
import tasks1 from './TaskModule'
import ProgressBar from './ProgressBar';
import ListLink from './ListLinks';


export default function FormAddTasks(){
    const time = new Date().getDate();
    const [tasks , setTask] = useState(tasks1);
    const [description, setDescription] = useState('')
    const [hours,setHours] = useState(0)
    const [minuts, setMinuts] = useState(10)
    const [bol, setBol] = useState(false)
    const addNewTask = (e) =>{
        e.preventDefault();
        const newTask={
            id:Date.now(),
            description,
            date:{time},
            hours,
            minuts,
            
        };
        setTask([...tasks, newTask])
        setDescription('');
        setBol(false)
    }
    const addNewTaskWithTimer =(e)=> {
        e.preventDefault();
        const newTaskWithTimer={
            id:Date.now(),
            description,
            date:Date.now(),
            hours,
            minuts,
        }
        setTask([...tasks,newTaskWithTimer])
        setDescription('');
        setBol(true)
    }
    
    return(
        <div style={{borderTop:'1px solid #fafafaed', backdropFilter: "blur(10px)", minHeight: "60px", boxSizing: "border-box",minWidth:'800px' ,maxWidth: "100vw", display: "flex",
        alignItems: "center",justifyContent:'center',flexDirection:'column',backgroundColor: '#fafafaed',flexWrap:'nowrap'}}>  
        <form style={{width:'800px', display:'flex',flexWrap:'nowrap',margin:'10px'}}>  
        <textarea style={{ minWidth: "60%",width:'75%' ,maxWidth:'100%', height:'40px' }} type="text" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
        <span style={{ color: "black", marginLeft: "5px", marginRight: "5px",display:'flex', alignItems:'center' }}>
          ЗА
        </span>
        <input style={{  width: "5%" , maxWidth:'10%' }} type="number" placeholder='Ч'  onChange={e=>setHours(e.target.value)} ></input>
        <span style={{ color: "black", margin: "5px" }}>:</span>
        <input style={{  width:'5%',maxWidth:'10%'}}  type="text" placeholder='МИН' onChange={e=>setMinuts(e.target.value)}></input>
        <button style={{boxShadow:'2px 2px 2px 1px rgb(41, 43, 43) ', border:'none', background:'transparent',width:'35px',height:'35px',fontWeight:'25px',
      borderRadius:'4px',margin:'0 10px' }} onClick={addNewTaskWithTimer} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
<path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
</svg></button>
    <button style={{boxShadow:'2px 2px 2px 1px rgb(41, 43, 43) ', border:'none', background:'transparent',width:'35px',height:'35px',fontWeight:'25px',
      borderRadius:'4px'}} type='submit' onClick={addNewTask}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
<path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
</svg></button>
    </form> 
    <ListLink></ListLink>
    <TaskList bol={bol} tasks={tasks}></TaskList>
    </div>
    )
}