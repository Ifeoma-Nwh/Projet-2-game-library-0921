import './App.css';
import React, { useState } from 'react';
import Main from './components/Main';

function App() {
  const [apiFilter, setApiFilter] = useState(
    `https://rawg.io/api/games?key=a9d50f2881ee441fbaf3e0368a2f3589&page=1`
  );
  return (
    <div className="App">
      <Main setApiFilter={setApiFilter} apiFilter={apiFilter} />
    </div>
  );
}
export default App;
