import './App.css';
import React, { useState, useEffect } from 'react';
import imgCircle from '../src/img/imgcircle.PNG';
import ConfirmarInvitados from './modal';

function App() {
  const targetDate = new Date('2024-02-02 19:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(
    () => {
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
    },
    [targetDate]
  );


  const handleClickSpotify = () => {
    window.location.href = 'https://spotify.link/MPxJfs2a2Db'
  };

  const handleClick = () => {
    window.location.href = 'https://maps.apple.com/?ll=-31.063378,-61.460237&q=Marcador&t=h';
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <body className="App-header">
      <div className="container">
        <div className="rectanguloPadre">
          <header>
            <div className="parentContainer ">
              <div className="circleTitle">
                <img src={imgCircle} alt="Imagen titulo" />
                <div className="bar">
                  <div className="myt">
                    <span>Manu</span>
                    <span>Tania</span>
                  </div>
                  <p className="ampersand">&</p>
                </div>
                <p className="date">02.02.2024</p>
              </div>
            </div>
          </header>

          <div className="container">
            <div className="primerimg" />
          </div>
          <div className="container">
            <div className="card">
              <div className="text">
                <p>De común acuerdo y en plena</p>
                <p>posesión de nuestras facultades</p>
                <p>mentales (sean las que sean)</p>
                <p>hemos decidido</p>
              </div>
              <p className="casarnos">¡Casarnos!</p>

              <div className="white-line" />

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
                <div className="text">
                  <div className='iconAnillos'>
                    <div className='alianzas'></div>
                  </div>
                  <p
                    style={{
                      fontSize: '90px',
                      fontWeight: '400',
                      fontFamily: 'montigny',
                      marginRight: '20px'
                    }}
                  >
                    Celebración
                  </p>
                  <p style={{ fontSize: '45px', fontWeight: '400' }}>Salón</p>
                  <p style={{ fontSize: '25px', fontWeight: '100' }}>María Hotel</p>
                  <p style={{ fontSize: '25px', fontWeight: '100' }}>& Eventos</p>
                  <p style={{ fontSize: '34px', fontWeight: '600' }}>19 hs</p>
                  <div
                    style={{
                      marginTop: '16px',
                      marginLeft: '52px',
                      boxshadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    <button onClick={handleClick} className="buttonConfir">
                      ¿Cómo llegar?
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="img2" />
          </div>

          <div className="cards3">
            <div className="img3" />
            <div className="tarjeta3">
              <div className="tarjeta4">
                  <div className='iconSpotify'>
                    <div className='spotify'></div>
                  </div>
                  <div style={{marginTop: '70px'}}>
                    <p>Queremos divertirnos con</p>
                    <p>vos y tus temas favoritos</p>
                    <p>no pueden faltar en</p>
                    <p>nuestra boda</p>
                    <p>¿Los agregas?</p>
                  </div>
                  <div
                    style={{
                      marginTop: '-30px',
                      marginLeft: '52px',
                      boxshadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    <button onClick={handleClickSpotify} className="buttonSpotify">
                      Ir a Spotify
                    </button>
                  </div>
              </div>
            </div>
          </div>

          <div className="cardNinos">
            <p className="titulo">Niños, dulce sueños</p>
            <p className="mensaje">Amamos a sus pequeños pero queremos que este día</p>
            <p className="mensaje">solo tengan que preocuparse por pasarla increible.</p>
          </div>

          <div className="cardDress">
            <div className="container2">
              <div className="iconContainer">
                <div className="circleDress" />
                <div className="iconDress" />
              </div>

              <div className="dress">
                <p className='tituloDress'>Dress Code</p>
                <div
                  style={{
                    width: '100%',
                    height: '1px',
                    backgroundColor: 'white',
                    margin: '10px 0 10px'
                  }}
                />
                <p className='msjDress'>Viviremos una noche de</p>
                <p className='msjDress'>mucha pasión, el color rojo</p>
                <p className='msjDress'>no es opción...lo lleva la novia.</p>
              </div>
            </div>
          </div>

          <div className="parentContainer">
            <div className="circleContainer">
              <div className="circleConfir">
                <div className="textGroup">
                  <p>"¡Nuestro único y más preciado</p>
                  <p>regalo es tu presencia!</p>
                  <p>¡No podes faltar!"</p>
                </div>
                <div style={{ marginTop: '30px' }}>
                  <button className="buttonConfir" onClick={() => setShowModal(true)}>
                    Confirmar
                  </button>
                  {showModal && <ConfirmarInvitados onClose={() => setShowModal(false)} />}
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
