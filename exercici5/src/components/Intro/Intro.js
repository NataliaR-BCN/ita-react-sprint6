import React from 'react';
import { IntroModal} from './Intro.styles'; 
import './styles.css';

const modal = (props) => 
    <IntroModal>
        <main>
            <h1>Benvingut al tutorial d'exemple!</h1>
            <section>
                <div>
                    <h4>Aquesta web ha estat desenvolupada amb React</h4> 
                    <p>A continuació hi trobaràs una pàgina de mostra <br/>que permet la navegació per diferents apartats. </p>
                    <p>Clica en el següent botó quan estiguis a punt. </p>
                </div>
                <div>
                    <button onClick={props.handleClick}>Comença!</button>
                </div>
            </section>
        </main>
    </IntroModal>;

export default modal;