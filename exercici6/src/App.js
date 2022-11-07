import React, { useState } from 'react';
import { Nav, ButtonNav, GlobalStyle } from './styled'
import Escena from './components/Escena/Escena';
import Intro from './components/Intro/Intro';
import scenes from './assets/assets'


function App() {

  const [showIntro, setShowIntro] = useState(true);

  function closeIntro() { setShowIntro (!showIntro) }

  const [numEscena, setNumEscena] = useState(0); 

  const showEscena = scenes.map(( scene, index ) => <Escena key={ index } text={ scene.txt } isActivated={ index === numEscena } />);

  const textMaxim = scenes.length - 1;

  const bgImg = scenes[numEscena].img;

  return (
    <>

      <GlobalStyle handleImg={bgImg} />
      
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
