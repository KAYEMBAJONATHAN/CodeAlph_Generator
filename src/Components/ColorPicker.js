import React, { useState } from 'react';

const ColorPicker = ({ onChange }) => {
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleChange = (e) => {
    const newColor = e.target.value;
    setBackgroundColor(newColor);
    onChange(newColor);
  };

  return (
    <div>
      <input
        type="color"
        value={backgroundColor}
        onChange={handleChange}
      />
    </div>
  );
};

export default ColorPicker;
