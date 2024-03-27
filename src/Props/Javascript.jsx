import React from 'react'

const Javascript=()=> {
    function clicked(){
        document.body.style.background='green'
    }
    function cli(){
        document.body.style.background="orange"
    }
    function ku(){
        document.body.style.background="black"
    }
    function kd(){
        document.body.style.background="pink"
    }
    function my(){
        let x=document.getElementById("in")
        x.value=x.value.toUpperCase();
    }
    function myy(){
        let x=document.getElementById("in")
        x.style.backgroundColor="black"
        x.style.color="white"
        x.style.caretColor="blue"
    }
  return (
    <div>
        <input type="text" onKeyUp={ku} onKeyDown={kd} onBlur={my} onFocus={myy} id='in'/>
        <button onClick={clicked} onDoubleClick={cli} >Click</button>
    </div>
  )
}

export default Javascript