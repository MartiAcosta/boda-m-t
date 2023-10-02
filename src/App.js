import './App.css';
import React, { useState, useEffect } from 'react';
import imgCircle from '../src/img/imgcircle.PNG';


function App() {
  const targetDate = new Date('2024-02-02 19:00:00');
  const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
        const now = new Date();
        const differenceInSeconds = (targetDate - now) / 1000;
        const days = Math.floor(differenceInSeconds / (3600 * 24));
        const hours = Math.floor((differenceInSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((differenceInSeconds % 3600) / 60);
        const seconds = Math.floor(differenceInSeconds % 60);

        setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <body className="App-header">
      <div className='container'>
        <div className='rectanguloPadre'>
          <header>
            <div className='parentContainer '>
              <div className='circleTitle'>
                <img src={imgCircle} alt="Imagen titulo" /> 
                <div className='bar'>
                  <div className="myt">
                    <span>Manu</span>
                    <span>Tania</span>
                  </div>
                  <p className='ampersand'>&</p>
                </div>
                <p className='date'>02.02.2024</p>
              </div>
            </div>
          </header>

          <div className="container">
              <div className='primerimg'></div>
          </div>
          
          <div className="container">
              <div className='card'>
                <div className='text'>
                  <p>De común acuerdo y en plena</p>
                  <p>posesión de nuestras facultades</p>
                  <p>mentales (sean las que sean)</p>
                  <p>hemos decidico</p>
                </div>
                <p className='casarnos'>¡Casarnos!</p>

                <div className="white-line"></div> 

                <div className="squares-container">
                  <div className="square">
                      <div>{timeLeft.days}</div>
                      <div>Días</div>
                  </div>
                  <div className="square">
                      <div>{timeLeft.hours}</div>
                      <div>Horas</div>
                  </div>
                  <div className="square">
                      <div>{timeLeft.minutes}</div>
                      <div>Minutos</div>
                  </div>
                  <div className="square">
                      <div>{timeLeft.seconds}</div>
                      <div>Segundos</div>
                  </div>
              </div>
            </div>
          </div>


          <div className="cards1">
              <div className="tarjeta1">
                <div className="tarjeta2">
                  {/* <p style={{color:'#fff', fontFamil: 'montigny',  fontSize:'30px', fontStyle: 'normal', fontWeight: '400', lineHeight: '72%' }}>Celebración</p>
                  <p style={{color:'#fff', fontFamil: 'Open Seans',  fontSize:'20px', fontStyle: 'normal', fontWeight: '400', lineHeight: '72%' }}>Salón</p>
                  <p>María Hotel & Eventos</p>
                  <p>19 hs</p>
                  <button style={{color:'#B670349C', fontFamily: 'Open Sans',borderRadius: '16px',  width: '241px', height: '21px', flexShrink: 0}}>¿Cómo llegar?</button>
                */}
                </div>
              </div>
              <div className='img2'></div>
          </div>

          <div className="cards3">
            <div className='img3'></div>
            <div className="tarjeta3">
              <div className="tarjeta4">
                {/* <p style={{color:'#fff', fontFamil: 'montigny',  fontSize:'30px', fontStyle: 'normal', fontWeight: '400', lineHeight: '72%' }}>Celebración</p>
                <p style={{color:'#fff', fontFamil: 'Open Seans',  fontSize:'20px', fontStyle: 'normal', fontWeight: '400', lineHeight: '72%' }}>Salón</p>
                <p>María Hotel & Eventos</p>
                <p>19 hs</p>
                <button style={{color:'#B670349C', fontFamily: 'Open Sans',borderRadius: '16px',  width: '241px', height: '21px', flexShrink: 0}}>¿Cómo llegar?</button>
                */}
              </div>
            </div>
          </div>

          <div className="cardDress">
              <div className='container2'>

              <div className="iconContainer">
                <div className='circleDress'></div>
                <div className='iconDress'></div>
              </div>
                
                <div className='dress'>
                  <p style={{fontFamily:'montigny', fontSize: '100px'}}>Dress Code</p>
                  <div style={{  width: '100%', height: '1px', backgroundColor: 'white', margin: '10px 0 10px'}}></div>
                  <p>Elegante o elegante sport.</p>
                  <p>Si ves a una chica deslumbrante</p>
                  <p>vestida de rojo...esa es la novia.</p>
                </div>
              </div>
          </div>

          <div className="parentContainer">
            <div className="circleContainer">
              <div className="circleConfir">
                <div className="textGroup">
                  <p>"¡Esperamos contar contigo</p>
                  <p>en nuestro día especial!</p>
                  <p>Por favor, confirma tu asistencia.</p>
                  <p>¡Gracias!"</p> 
                </div>
                <div style={{marginTop: '30px'}}>
                  <button className='buttonConfir'>
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
