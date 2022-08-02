import './App.css';
import React from 'react';
import AboutYou from './components/AboutYou';
import Field from './components/Field';

class App extends React.Component {
  render() {

    return (
      <div>
        <AboutYou name='' />
        <Field title="Competenze" section="competenze" />
        <Field title="Professione" section="professione" />
        <Field title="Azienda" section="azienda" />
        <Field title="Scuola" section="scuola" />
        <Field title="Abito a" section="città" />
      </div>
    )
  }
}

export default App;
