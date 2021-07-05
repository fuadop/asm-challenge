import React from 'react';
import './loader.css';

const Loader = () => {
  return (
    <div style={styleSheet.container}>
      <div style={styleSheet.box} className='spinner'></div>
    </div>
  );
};

const styleSheet = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '100px',
    height: '100px',
    backgroundColor: 'orange',
  },
};

export default Loader;
