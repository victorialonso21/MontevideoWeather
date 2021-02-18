import './Info.css'

function Info(props){

    return (
        <div className="principal">
            <h1 className="ubicacion">  Montevideo, UY </h1>
            <img className="icono" src={`http://openweathermap.org/img/wn/${props.datos.imagen}@2x.png`} />
            <p className="temp"> {Math.round(props.datos.temp)} °C </p>
            <p className="desc"> {props.datos.desc} </p>
            <p className="info-item">Humedad:{props.datos.humedad} % </p>
            <p className="info-item">Viento: {Math.round(props.datos.viento)} m/s </p>
         </div>
    );

}

export default Info;