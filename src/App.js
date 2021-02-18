import React, {useState, useEffect} from 'react';
import Info from './components/Info';
import './App.css';


function App() {

  const [datos, setDatos ]= useState({
    temp:0,
    desc:"", 
    humedad:0,
    viento:0,
    imagen:""
  })

  
  const getDatos = async ()=> {
     await fetch("https://api.openweathermap.org/data/2.5/weather?q=Montevideo&lang=ES&units=metric&appid=30ee10d9506e36c32504ceee70e522d4")
    .then(
       res => res.json())
       .then(
         data =>{
          console.log(data);
          const nuevosDatos = {
          temp:data.main.temp,
          desc:data.weather[0].description, 
          humedad:data.main.humidity,
          viento:data.wind.speed,
          imagen:data.weather[0].icon
        }
        setDatos(nuevosDatos);
      }
      ) 
    
    }
  useEffect(()=>getDatos(), []);

  return (
    <div className="App">
      <Info datos={datos} />
    </div>
  );
}

export default App
