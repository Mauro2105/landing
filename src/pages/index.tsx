import React from 'react';
import "../styles/index.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">

      <div className='container'>
        <h1 className='title'>Zone Sports</h1>
        <h3 className='subtitle'>¡Bienvenido a nuestra tienda deportiva!</h3>
        <p className='description'>Encuentra los mejores productos para tus actividades deportivas favoritas.</p>
        <button className='btn'><a href='/catalog'>Explorar Catálogo</a></button>
      </div>

      <div className='beneficios'>
        <h2>¿Por qué elegir Zone Sports?</h2>
        <ul className='beneficios-list'>
          <li>🚚<strong>Envíos Rápidos:</strong> Recibe tu compra máximo en 3 días.</li>
          <li>🏆<strong>Marcas Reconocidas:</strong> Productos de alta calidad.</li>
          <li>💬<strong>Atención Personalizada:</strong> Estamos aquí para ayudarte.</li>
        </ul>
      </div>

      <div className='categories'>
        <h2>Categorías Populares:</h2>
        <div className='categories-list'>
          <div className='category'>⚽ Fútbol</div>
          <div className='category'>🏀 Baloncesto</div>
          <div className='category'>🥊 Boxeo</div>
          <div className='category'>🎾 Tenis</div>
        </div>
      </div>

      <div className='contact'>
        <h2>¿Tienes alguna pregunta?</h2>
        <p>No dudes en contactar con nosotros, estaremos encantados de ayudarte.</p>
        <button className='btn'><a href='/contact'>Contáctanos</a></button>
      </div>

    </div>
  )
}


export default Home;