import React, { useState } from 'react';
import './style.css';
const App =() =>{
 
  const[result , setResult] = useState("")
 
  const handlerClick = (e) =>{
    setResult(result.concat(e.target.name));
  }
  const Clear = () =>{
    setResult("");
  }
  const backspace = () =>{
    setResult(result.slice(0, result.length-1));
  }
  const calculer = () =>{
    try{
      setResult(eval(result).toString());
    }catch(exception){
      setResult("error")
    }
    
  }
  return (
    <>  
    <div className="container">
       <form>
        <input type="text" value={result}/>
       </form>

       <div className="keypad">
        <button className="clear" onClick={Clear} id="Clear">Clear</button>
        <button className="clear" onClick={backspace} id="backspace">C</button>
        <button className="clear" name='/' onClick={handlerClick}>&divide;</button>
        <button className="clear" name='7' onClick={handlerClick}>7</button> 
        <button className="clear" name='8' onClick={handlerClick}>8</button>
        <button className="clear" name='9' onClick={handlerClick}>9</button>
        <button className="clear" name='*' onClick={handlerClick}>&times;</button>
        <button className="clear" name='4' onClick={handlerClick}>4</button> 
        <button className="clear" name='5' onClick={handlerClick}>5</button>
        <button className="clear" name='6' onClick={handlerClick}>6</button>
        <button className="clear" name='-' onClick={handlerClick}>&ndash;</button>
        <button className="clear" name='1' onClick={handlerClick}>1</button> 
        <button className="clear" name='2' onClick={handlerClick}>2</button>
        <button className="clear" name='3' onClick={handlerClick}>3</button>
        <button className="clear" name='+' onClick={handlerClick}>+</button>
        <button className="clear" name='0' onClick={handlerClick}>0</button> 
        <button className="clear" name='.' onClick={handlerClick}>.</button>
        <button className="clear" onClick={calculer} id="result">=</button>
        

       </div>

    </div>
     </>
  );
}

export default App;
