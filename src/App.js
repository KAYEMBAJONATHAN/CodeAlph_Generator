import React, { useState } from 'react';
import ColorPicker from './Components/ColorPicker';
import BackgroundColor from './Components/BackgroundColor';

function App() {
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="App">
      <h1>Background Generator</h1>
      <ColorPicker onChange={handleColorChange} />
      <BackgroundColor color={selectedColor} />
    </div>
  );
}

export default App;
