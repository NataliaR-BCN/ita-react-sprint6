import React, { useState } from 'react';
import { Nav, ButtonNav } from './styled'
import Escena from './components/Escena/Escena';
import texts from './components/Escena/texts';
import Intro from './components/Intro/Intro';


function App() {

  const [showIntro, setShowIntro] = useState(true);

  function closeIntro() { setShowIntro (!showIntro) }

  const [numEscena, setNumEscena] = useState(0); 

  const showEscena = texts.map(( text, index ) => <Escena key={ index } text={ text } isActivated={ index === numEscena } />);

  const textMaxim = texts.length - 1;

  return (
    <>

      { showIntro 
        ? <Intro handleClick={closeIntro}/>
        : <> 
            <Nav>
              <ButtonNav onClick={() => setNumEscena ( 
                              prevState => prevState === 0 ? prevState + textMaxim : prevState - 1
                              )}>Anterior</ButtonNav>
              <ButtonNav onClick={() => setNumEscena ( 
                              prevState => prevState === textMaxim ? prevState - textMaxim : prevState + 1
                              )}>Següent</ButtonNav>
            </Nav> 

            {showEscena}
          </>
      }
    </>
  );
}

export default App;
