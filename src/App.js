import logo from './logo.svg';
import quotes from './quotes.json'
import './App.css';
import MessageTwo from './components/MessageTwo';
import QuotesBox from './components/QuotesBox';
import { useState } from 'react';

const getRamdon = () => Math.floor(Math.random() * quotes.length );

const generateRandomColor = () =>{
  const r = Math.floor(Math.random() * 256 );
  const g = Math.floor(Math.random() * 256 );
  const b = Math.floor(Math.random() * 256 );

  const rgbColor = `rgb(${r},${g},${b})`;
  return rgbColor;
}
function App() {
  const [quote, setQuote] = useState(quotes[getRamdon()]);

  const changeQuotes = ()=>{
   return setQuote(quotes[getRamdon()])
   
    
   
  }
  const rgbColor = generateRandomColor();
  
  document.body.style = `background: ${rgbColor}`
  
  return (
    <div className="App" >
      <QuotesBox messageOne={quote.quote} color={rgbColor} />
      
      <MessageTwo  messageTwo={quote.author} color={rgbColor}/>
      
      <button  style={{background: rgbColor}} onClick={changeQuotes}><i className="fa-solid fa-angle-right" ></i></button>
         
          </div>
  );
}

export default App;
