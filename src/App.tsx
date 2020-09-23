import React, { useEffect } from 'react';
import Home from './pages/Home';
import appRuntime from './appRuntime'

function App() {

  useEffect(() => {
    appRuntime.subscribe('world', (data) => {
      console.log(data)
    })
  }, [])
  return (
    <div className="App">
      <Home />
      <button onClick={() => { appRuntime.send('hello', 'world') }}>hello</button>
    </div>
  );
}

export default App;
