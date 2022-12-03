
import './App.css';
import {useState, useSyncExternalStore } from "react";
import cloud from "./assets/cloud.png"

function App() {

  const [search , setSearch] =  useState("");
const [result , setResult]  = useState("");

  const changeHandler = (e)=>{
    setSearch(e.target.value)

  }


  const submitHandler = (e)=>{
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
        response=> response.json()
        ).then (
        data=>{
        const kelvin = data.main.temp;
        const centigrade =  kelvin -273.15;
        setResult ("Temperature at " + search  + "\n" +  Math.round(centigrade) + "°C")
        setSearch("");

  }
).catch(error=>console.log(error))






  }
  return (
    <div className="App">
      <center>
        <div className='container'>
        <div className=' card'>
          <div className='card-body'>
            <img src={cloud} alt="cloud image"/>
            <h2>Weather app</h2>
            <form onSubmit={submitHandler}>
              <input className='searchbar' type="text" name="search" id="search" value={search}onChange={changeHandler}/><br></br>
              
              <input className='submit' type="submit"   value="Get temperature"/>
            </form>

            <div className='result'>
              <h3>{result}</h3>
            </div>


          </div>
        </div>
        </div>
      </center>

      
     
 
    </div>
  );
  }

export default App;
