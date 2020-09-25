import React, { useEffect } from 'react';
import Home from './pages/Home';
import appRuntime from './appRuntime'

function App() {

  useEffect(() => {
    appRuntime.subscribe('fuck', (data) => {
      console.log(data)
    })
  }, [])
  return (
    <div className="App">
      <Home />save
      <button onClick={() => { appRuntime.send('test', 'hello', 'world') }}>hello</button>
      <button onClick={() => { appRuntime.send('fileprocess', 'save', 'save') }}>save</button>
      <button onClick={() => { appRuntime.send('fileprocess', 'delete', 'delete') }}>delete</button>
      <button onClick={() => { appRuntime.send('fileprocess', 'load', 'load') }}>load</button>
    </div>
  );
}

export default App;
