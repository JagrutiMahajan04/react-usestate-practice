import './App.css';
import  {useState} from 'react';
import FormHandling from './FormHandling'
import Form2 from './Form2';

function App() {
  //-------------------------------------------------------------------------------------
 //let  count =0;/normal way using js
  //function increment(){
   // count++;
  //  document.getElementById('counter').innerHTML = count;
   // console.log(count);
  //}
  //return (
    //<>
   // <h1>useState</h1>
   // <h2>Count = <span id='counter'>{count}</span></h2>

    //<button onClick={increment}>Increase</button>
    //</>
  //);/---------------------------------------------------------------------------------
       const[count,setCount]=useState(0);

       function increment()
       {
        setCount(count+1);

       }
        return(
          <>
          <h1>useState</h1>
          <h2>Count= {count}</h2>
          <h2>SecondCount= {count}</h2>


          <button type='button' onClick={increment}>Increase</button>


          <FormHandling/><br/><br/>
          <Form2/>
          </>
        )














}

export default App;
