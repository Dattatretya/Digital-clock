import {useState} from 'react'
import './App.css';


function App() {


  let time = new Date().toLocaleTimeString()

  const [ctime, setCtime] = useState (time)

  const handleEvent=() => {
    let time = new Date().toLocaleTimeString()
    setCtime(time)
  }


  setInterval(handleEvent,1000)

  return (
    <>
    <h1 className="Time">{ctime}</h1>
    </>
  );
}



export default App;
