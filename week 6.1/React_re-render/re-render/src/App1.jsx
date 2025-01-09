//pushing state down (to make our application slightly optimal)
// what does this do?
// only re -render child component if state change not re-rendering parent component 
import { useState } from 'react'



// parent component
function App1() {
  
  return (
    <>
   <HeaderWithButton/>
    <Header title="meghraj"></Header>   
    </>
  )
}

function HeaderWithButton(){
    const [title, setTitle] = useState("my name is raj")
        
function updateTitle(){
  setTitle("my name is "+ Math.random());
}
return <div>
 <button onClick={updateTitle}>update the title </button>
 <Header title={title}></Header>
</div>
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
export default App1
