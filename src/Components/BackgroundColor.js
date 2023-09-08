import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import '../Style/background.css';

const BackgroundColor = () => {
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');
    const [gradientColor, setGradientColor] = useState('#000000');
  
    const handleBackgroundColorChange = (color) => {
      setBackgroundColor(color);
    };
  
    const handleGradientColorChange = (color) => {
      setGradientColor(color);
    };
  
    const generateGradientBackground = () => {
      return `linear-gradient(${gradientColor}, ${backgroundColor})`;
    };
  
    return (
      <div>
        <div className="color-picker">
          <p>Select Background Color:</p>
          <ColorPicker onChange={handleBackgroundColorChange} />
        </div>
        <div className="color-picker">
          <p>Select Gradient Color:</p>
          <ColorPicker onChange={handleGradientColorChange} />
        </div>
        <div className="result" style={{ background: generateGradientBackground() }}>
          <p>Generated Background</p>
        </div>
      </div>
    );
  };

export default BackgroundColor;
