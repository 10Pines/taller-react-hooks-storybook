import React from 'react';
import './App.scss';
import Button from "./Button/HooplaButton";

function App() {
  return (
    <div className="App">
      <Button className="boton" onClick={() => alert("Funciona!")}>Funciona?</Button>
    </div>
  );
}

export default App;
