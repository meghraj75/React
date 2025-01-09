// react memo :- let u skip re-rendering component when its props are unchanged

import { useState } from 'react'
import React from 'react';
import './App.css'

// parent component
function App2() {
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

const Header = React.memo(function Header({title}){
    return (
        <div>
          {title}
        </div>
      );
      
})
export default App2
//45.12