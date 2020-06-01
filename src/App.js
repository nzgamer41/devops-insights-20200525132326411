import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader';
import AppContainer from './containers/AppContainer';
import MapContainer from './containers/MapContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppContainer />
      <MapContainer />
    </div>
  );
}

export default App;
