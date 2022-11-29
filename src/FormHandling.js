import  {useState} from 'react';

function FormHandling(){

const[email,setEmail]= useState("");

    return(
        <>
        <form>
         <input type="email" value={email}  onChange={ (e)=>{setEmail(e.target.value)} }/>

         <h2>Email :{email}</h2>

         <button  type="button" onClick={()=>{setEmail("")}}>Clear</button>
        </form>

        </>
    )
}

export default FormHandling;