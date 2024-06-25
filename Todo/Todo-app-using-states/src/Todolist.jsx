import { useState } from "react";
import {v4 as uuidv4} from 'uuid';//unique key 
export default function Todolist(){  //array of object
    let [todos,setTodo]=useState([{task:"sample task",id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo]=useState(""); 
    let addNewTask=()=>{
        // console.log("we have to add new task" );
        // setTodo([...todos,newTodo]);  //change in array here we destructure and pass 

        // setTodo([...todos,{task:newTodo,id:uuidv4()}]); //here we give object bcz we want each task has unique id 
        // setNewTodo("");//here we reset the value of that is inside in input box

        setTodo((prevTodos)=>{
            return [...prevTodos,{task:newTodo,id:uuidv4(),isDone:false}];//when  entering task the isDone value is false 
        });
        setNewTodo("");
    }
    //in our input anything change then call updatatodo value
    let updateTodoValue=(event)=>{
        // console.log(event.target.value);
        setNewTodo(event.target.value)
    }

    //delete from array we use filter method
    let deleteTodo=(id)=>{
      setTodo((prevTodos) =>todos.filter((prevTodos)=>prevTodos.id!=id));
    
    }
    //all update
    let UpperCaseAll=()=>{
        setTodo((prevTodos)=> 
        prevTodos.map((todo)=>{
            return{
                ...todo,
                task:todo.task.toUpperCase(),
        };
        })
    );
    };

   // single update
    let UpperCaseOne=(id)=>{
    setTodo((prevTodos)=>
       prevTodos.map((todo)=>{
            if(todo.id==id) {
        return {
            ...todo,
            task:todo.task.toUpperCase(),
            };
        } else{
           return todo; 
        }
        })
    );
    }

    let markASDone=(id)=>{
        setTodo((prevTodos)=>
           prevTodos.map((todo)=>{
                if(todo.id==id) {
            return {
                ...todo,
                isDone:true,
                };
            } else{
               return todo; 
            }
            })
        );
        }

        let markAllAsDone=()=>{
            setTodo((prevTodos)=> 
            prevTodos.map((todo)=>{
                return{
                    ...todo,
                  isDone:true,
            };
            })
        );
        };
    return (
        <div>
            <input type="text" placeholder="add a task" 
            value={newTodo}
             onChange={updateTodoValue}/>
            <button onClick={addNewTask}>add task</button>
            <br /><br />
            <br />
            <br />
            <hr />
            <h4 >task todo </h4>
            <ul>
                {
                    todos.map((todo)=>(
                       <li key={todo.id}>
                        <span style={todo.isDone?{textDecorationLine:"line-through"}: {}}> {todo.task}</span>
                        &nbsp;
                    <button onClick={()=>deleteTodo(todo.id)}>delete </button>  
                                    {/* the arrow function not excuted method it will create copy with some arguments */}
                                    &nbsp;   &nbsp;
                                    <button onClick={()=>UpperCaseOne(todo.id)}>UpperCase </button> 
                   <button onClick={()=>markASDone(todo.id)}>MarkASDone</button>  
                        </li>
                    )) }
            </ul>
            <button onClick={UpperCaseAll}>UpperCaseAll</button><br /><br />
            <button onClick={markAllAsDone}>Mark all as done</button>
        </div>
    );
}


// here we creating todo using state we use array 

//when input value change newTodo update
//and when the add task is clicked todo update


//jo input ke andr value hai usko track krne ke liye we create newTodo state




//flow
//1 we create input tab and button and task that is added
//2 set each task has unique id that user enter
// 3 deleting specific task  adding delete btn with each list
//4 update single todo 





//some pattern in react for array  react documentation update array in state 
// when we want to render in form of list we use map method
// delete from array we use filter method






//problem occure when we clicked on add task button and if we not enter any task in input field that task also added 