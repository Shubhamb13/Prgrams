import  { useMemo } from 'react'

const Useref = () => {
 
    const inputElement = useMemo 

    function foc(){
      
        inputElement.current.focus();
    }
  return (
    <div>
        <input  ref={inputElement} type="text" />
        <button onClick={foc}>Click</button>
    </div>
  )
}

export default Useref