import React from 'react';
import Card from './components/card';
import Loader from './components/loader'
import useFood from './hooks/useFood';

const Home = () => {
  const foods = useFood();

  if (!foods) {
    return (
      <Loader/>
    );
  }

  return (
    <div className='container py-3'>
      <div className='row'>
          {foods.map(food => (
            <div className='col-md-4 col-6'>
              <Card
                {...food}
              />
            </div>
          ))}
      </div>

      <div className='text-center'>
        <button style={styleSheet.button}>Learn more</button>
      </div>
    </div>
  )
};

const styleSheet = {
    button: {
      border: 'none',
      outline: 'none',
      borderRadius: '30px',
      backgroundColor: 'orange',
      fontWeight: 'bold',
      color: 'white',
      padding: '1rem 1.5rem',
    }
};

export default Home;
