import React from 'react'
import { useReducer } from 'react'
const App = () => {
  const initialState={name:'',age:0}
  const [state,dispatch]=useReducer(reducer,initialState)

  function reducer(state,action){
    switch(action.type)
    {
     
      case "clicked":
          return {
            name:state.name,
            age:state.age+1
          }

          case "Changed":
          return {
             name:action.nextName,
             age:state.age
          }

          default:
            break ;
    }

         function handleclick(){
          dispatch ({type:"clicked"})
         }

         function handlechange(e){

          dispatch ({
              
            type:"Changed",
            nextname: e.target.value
          })
          
         }

  }
  return (
    <div>
         <h1>My naem is {state.name} and my age is{state.age}</h1>
         <input type="text" onChange={handlechange}/>
         <button onClick={handleclick}>Increment age</button>
         
    </div>
  )
}

export default App