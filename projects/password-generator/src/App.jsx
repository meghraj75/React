import { useState,useCallback,useEffect,useRef } from 'react';



function App() {
  //create state variable 
  const [length,setLength] = useState(8);
  const[numberAllowed,setNumberAllowed]=useState(false);
  const[charAllowed,setCharAllowed]=useState(false);
  const[password,setPassword]=useState("")

  //ref hook

  const passwordRef=useRef(null)
  
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    //condition
    if(numberAllowed)str+="0123456789" //if numberallowed then add this numbers
    if(charAllowed)str+="!@#$%^&*()-+=[]{}`~" //similary add special characters

    //create password who peak random character 
    for(let i=1;i<=length;i++){
    let char=Math.floor(Math.random()*str.length+1)  //create random number and multiply by string length and add 1 and round up in the floor
    pass+=str.charAt(char) //passing value to pass
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed]);

  const copyToClipboard=useCallback(()=>{
    passwordRef.current?.select(); // it select entire text from input box
    passwordRef.current?.setSelectionRange(0,3);//it select value 0 to 3 
    window.navigator.clipboard.writeText(password)//this will copy the text from input box using copy button 
  },[password])
  useEffect(()=>{
    passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
       
        <h1 className="text-white text-center my-3">Password Generator</h1>

    <div className='className="flex-shadow rounded-lg overflow-hidden mb-4"'>
      
      
      {/* /* //creating input */} 
        <input type='text' value={password} 
        className='outline-none w-full py-1  '
         placeholder='password' readOnly
         ref={passwordRef}/>  
 
     <button onClick={copyToClipboard}className='outline-none bg-blue-700
      text-white px-3 py-0.5 shrink-0'>copy</button>
    </div>

       <div className='flex text-5m gap-x-2 '>
        <div className='flex items-center-gap-x-1'>
          <input type="range"
           min={6}
            max={100}
          value={length} className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}/> 
          <label >Length:{length}</label>
        </div>

        <div className='flex items-center-gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{
            setNumberAllowed((prev)=>!prev);
          }} 
          />
          <label htmlFor="numberInput">Numbers</label>
          </div>
 
          <div className='flex items-center-gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={()=>{
            setCharAllowed((prev)=> !prev)//true false hogai false true
          }} 
          />
          <label htmlFor="characterInput">Characters</label>
          </div>

         
       </div>
      </div>
    </>
  )
}

export default App


//32
//readOnly:any came and not write in textbox only read not write