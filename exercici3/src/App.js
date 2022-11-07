import React from 'react';
import Escena from './components/Escena/Escena';
import texts from './components/Escena/texts';


function App() {

  const showEscena = texts.map(text => <Escena text={text} />);

  return (
    <>
      {showEscena}
    </>
  );
}

export default App;
