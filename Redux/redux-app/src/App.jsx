
import { useSelector } from 'react-redux'
import './App.css'

function App() {
  
  const count=useSelector ((state)=>state.counter.value);
  function handleIncrementClick(){
   count+1;
  }

  function handleDecrementClick(){

  }

  return (
    <div className='container'>
      <button onClick={handleIncrementClick}>+</button>
      <button onClick={handleDecrementClick}>-</button>
    </div>
  )
}

export default App
