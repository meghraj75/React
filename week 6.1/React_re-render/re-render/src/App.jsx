//this is re -render parent also 
import { useState } from 'react'

import './App.css'

// parent component
function App() {
  const [title, setTitle] = useState("my name is raj")
        
function updateTitle(){
  setTitle("my name is "+ Math.random());
}
  return (
    <>
    <button onClick={updateTitle}>update the title </button>
    <Header title={title}></Header>
    <Header title="meghraj"></Header>   
    </>
  )
}


//child componenet 
//{title} we destructure here we also can write prop.title
function Header({title}){
  return(
    <div>
      {title}
    </div>
  )
}
export default App
