import React, { useState } from 'react';

function App() {

  const [color, setColor] = useState()
  console.log("teste", color)
  return (
    <div style={{backgroundColor:(color),
    width: "100vw",
    height: "100vh"}} className="App">
      <input type='color' onChange={(e) => setColor(e.target.value)}></input>
    </div>
  );
}

export default App;
