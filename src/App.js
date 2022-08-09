import './App.css';
import React from 'react';
// import AboutYou from './components/AboutYou';
// import Field from './components/Field';
import NomeCognome from './components/NomeCognome';
import Birth from './components/Birth';
import Gender from './components/Gender';
import Phone from './components/Phone';
import City from './components/City';
import SearchJob from './components/SearchJob';

class App extends React.Component {
  render() {

    return (
      <form style={{padding:'0% 2%'}}>
        <NomeCognome title='Nome e Cognome'/>
        <Birth title='Data di nascita'/>
        <Gender title='Sesso'/>
        <div className='title-style'>Recapito telefonico</div>
        <Phone/>
        <City title='Stato, Città'/>
        <SearchJob title='Sono in cerca di lavoro:'/>
        <input type={'submit'}/>
        {/* <AboutYou name='' />
        <Field title="Competenze" section="competenze" />
        <Field title="Professione" section="professione" />
        <Field title="Azienda" section="azienda" />
        <Field title="Scuola" section="scuola" />
        <Field title="Abito a" section="città" /> */}
      </form>
    )
  }
}

export default App;
