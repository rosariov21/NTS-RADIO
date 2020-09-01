import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>NTS RADIO </h1> 

     <figure>
            <figcaption>Listen</figcaption>
            <audio
                controls
                src="./media/audio-file1.mp3">
                    Your browser does not support the
                    <code>audio</code> element.
            </audio>
        </figure>
       




    </div>
  );
}

export default App;
