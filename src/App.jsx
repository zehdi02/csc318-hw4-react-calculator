import { useState } from 'react';
import './App.css'

function App() {
  const [result, setResult] = useState('');
  
  const [isEnteringSinValue, setIsEnteringSinValue] = useState(false);
  const [sinValue, setSinValue] = useState('');

  const [isEnteringCosValue, setIsEnteringCosValue] = useState(false);
  const [cosValue, setCosValue] = useState('');

  const [isEnteringTanValue, setIsEnteringTanValue] = useState(false);
  const [tanValue, setTanValue] = useState('');

  const [isEnteringLnValue, setIsEnteringLnValue] = useState(false);
  const [lnValue, setLnValue] = useState('');

  const [isEnteringLogValue, setIsEnteringLogValue] = useState(false);
  const [logValue, setLogValue] = useState('');

  const [isEnteringSqrtValue, setIsEnteringSqrtValue] = useState(false);
  const [sqrtValue, setSqrtValue] = useState('');
  

  const handleClick = (e) => {
    const buttonValue = e.target.id;

    if (buttonValue === '=') {
      calculate();
    } 
    
    else if (buttonValue === 'AC') {
      clear();
    } 
    
    else if (buttonValue === '%') {
      handlePercentage();
    } 
    
    else if (buttonValue === 'sin') {
      setIsEnteringSinValue(true);
      setSinValue('');
      setResult('sin()');
    } 
    else if (buttonValue === 'cos') {
      setIsEnteringCosValue(true);
      setCosValue('');
      setResult('cos()');
    } 
    else if (buttonValue === 'tan') {
      setIsEnteringTanValue(true);
      setTanValue('');
      setResult('tan()');
    } 

    else if (buttonValue === 'ln') {
      setIsEnteringLnValue(true);
      setLnValue(''); // Reset the lnValue when 'ln' is clicked
      setResult('ln()'); // Display 'ln()' on the input box
    } 
    else if (buttonValue === 'log') {
      setIsEnteringLogValue(true);
      setLogValue('');
      setResult('log()'); 
    } 

    else if (e.target.innerText === '√') {
      setIsEnteringSqrtValue(true);
      setSqrtValue('');
      setResult('√()');
    } 
    
    else {
      if (isEnteringSinValue) {
        setSinValue(sinValue.concat(buttonValue));
        setResult(`sin(${sinValue}${buttonValue})`); 
        setIsEnteringSinValue(false);
      } 
      else if (isEnteringCosValue) {
        setCosValue(cosValue.concat(buttonValue)); 
        setResult(`cos(${cosValue}${buttonValue})`);
        setIsEnteringCosValue(false);
      } 
      else if (isEnteringTanValue) {
        setTanValue(tanValue.concat(buttonValue));
        setResult(`tan(${tanValue}${buttonValue})`); 
        setIsEnteringTanValue(false);
      } 
      
      else if (isEnteringLnValue) {
        setLnValue(lnValue.concat(buttonValue)); // Update the lnValue
        setResult(`ln(${lnValue}${buttonValue})`); // Display 'ln()' with entered number
        setIsEnteringLnValue(false);
      } 
      else if (isEnteringLogValue) {
        setLogValue(logValue.concat(buttonValue)); 
        setResult(`log(${logValue}${buttonValue})`);
        setIsEnteringLogValue(false);
      } 
      
      else if (isEnteringSqrtValue) {
        setSqrtValue(sqrtValue.concat(buttonValue));
        setResult(`√(${sqrtValue}${buttonValue})`); 
        setIsEnteringSqrtValue(false);
      } 
      
      else {
        setResult(result.concat(buttonValue));
      }
    }
  };

  const clear = () => {
    setResult('');
  };

  const evaluateExpression = (expression) => {
    try {
      if (expression.includes('sin')) {
        const parsedExpression = expression.replace(/sin/g, 'Math.sin');
        return eval(parsedExpression).toString();
      } 
      
      else if (expression.includes('cos')) {
        const parsedExpression = expression.replace(/cos/g, 'Math.cos');
        return eval(parsedExpression).toString();
      } 
      else if (expression.includes('tan')) {
        const parsedExpression = expression.replace(/tan/g, 'Math.tan');
        return eval(parsedExpression).toString();
      } 

      else if (expression.includes('ln')) {
        const parsedExpression = expression.replace(/ln/g, 'Math.log');
        return eval(parsedExpression).toString();
      }
      else if (expression.includes('log')) {
        const parsedExpression = expression.replace(/log/g, 'Math.log10');
        return eval(parsedExpression).toString();
      }
      
      else if (expression.includes('√')) {
        const parsedExpression = expression.replace(/√/g, 'Math.sqrt');
        return eval(parsedExpression).toString();
      }
      return eval(expression).toString();
    } catch (error) {
      return 'Error';
    }
  };

  const calculate = () => {
    setResult(evaluateExpression(result));
  };

  const handlePercentage = () => {
    try {
      if (result !== '') {
        let number = parseFloat(result);
        number = number / 100;
        setResult(number.toString());
      }
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className='calculator flex flex-col gap-1.5'>
      <a className='text-blue-800 hover:underline'
      href="https://zehdi02.github.io/csc-318-HWs/">
        Go Back
      </a>
      <input className='border rounded border-gray-200 text-2xl px-2 pt-5 text-end placeholder-black'
        placeholder='0' type='text' value={result} disabled />
      
      <div className='buttons flex flex-col text-xs'>
        <div className='flex justify-between my-1 gap-1.5'>
          <button id='deg' className='op' onClick={handleClick}>Deg</button>
          <button id='fact' className='op' onClick={handleClick}>x!</button>

          <button id='(' className='op' onClick={handleClick}>(</button>
          <button id=')' className='op' onClick={handleClick}>)</button>
          <button id='%' className='op' onClick={handleClick}>%</button>
          <button className='op' onClick={clear}>AC</button>
        </div>

        <div className='flex justify-between my-1'>
          <button id='sin' className='op' onClick={handleClick}>sin</button>
          <button id='ln' className='op' onClick={handleClick}>ln</button>

          <button id='7' className='num' onClick={handleClick}>7</button>
          <button id='8' className='num' onClick={handleClick}>8</button>
          <button id='9' className='num' onClick={handleClick}>9</button>
          <button id='/' className='op' onClick={handleClick}>÷</button>
        </div>

        <div className='flex justify-between my-1'>
          <button id='cos' className='op' onClick={handleClick}>cos</button>
          <button id='log' className='op' onClick={handleClick}>log</button>

          <button id='4' className='num' onClick={handleClick}>4</button>
          <button id='5' className='num' onClick={handleClick}>5</button>
          <button id='6' className='num' onClick={handleClick}>6</button>
          <button id='*' className='op' onClick={handleClick}>×</button>
        </div>
        
        <div className='flex justify-between my-1'>
          <button id='tan' className='op' onClick={handleClick}>tan</button>
          <button id='√' className='op' onClick={handleClick}>√</button>

          <button id='1' className='num' onClick={handleClick}>1</button>
          <button id='2' className='num' onClick={handleClick}>2</button>
          <button id='3' className='num' onClick={handleClick}>3</button>
          <button id='-' className='op' onClick={handleClick}>-</button>
        </div>
        
        <div className='flex justify-between my-1'>
          <button id='E' className='op' onClick={handleClick}>EXP</button>
          <button id='xy' className='op' onClick={handleClick}>x<sup>y</sup></button>
          
          <button id='0' className='num' onClick={handleClick}>0</button>
          <button id='.' className='num' onClick={handleClick}>.</button>
          <button id='eq' className='op' onClick={calculate}>=</button>
          <button id='+' className='op' onClick={handleClick}>+</button>
        </div>
      </div>
    </div>
  )
}

export default App