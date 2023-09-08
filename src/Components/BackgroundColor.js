import React from 'react';

const BackgroundColor = ({ color }) => {
  const style = {
    width: '100%',
    height: '100vh',
    backgroundColor: color,
    transition: 'background-color 0.5s',
  };

  return <div style={style}></div>;
};

export default BackgroundColor;
