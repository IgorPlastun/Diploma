
import './App.css';
import NewComponent4 from './components/NewComponent4';
import FormAddTasks from './components/FormAddTasks'
import ProgressBar from './components/ProgressBar';
function OnScrollHandler(e){
  console.log(e);
}

function App() {


  return (
    <div className="App" onScroll={(e)=>OnScrollHandler(e)}>
        {/* <NewComponent timer={tomer} text={text}></NewComponent> */}
        <NewComponent4></NewComponent4>
        
       <FormAddTasks></FormAddTasks>
    </div>
  );
}

export default App;
