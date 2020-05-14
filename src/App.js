import React from 'react';
import "./styles/styles.scss";
import Book from './Book'

const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" alt="banner" src="https://www.itl.cat/pngfile/big/0-1938_best-top-desktop-beautiful-nature-wallpapers-hd-nature.jpg" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Poemas cortos</p>
          <p> Pequenos poemas cortos para mostrar</p>
          <a href="http://test.com" className="button">Subscribirse</a>
        </div>
      </div>
    </div>
  </div>

  <div className="ed-grid m-grid-3">
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </div>
  
  </>
)

export default App;
