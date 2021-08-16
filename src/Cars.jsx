import React, { useContext } from 'react';
import Provider from './context/Provider';
import CarsContext from './context/CarsContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars() {
  const { redCar, blueCar, yellowCar, moveCar } = useContext(CarsContext);

  return (
    <Provider>
      <div>
        <div>
          <img
            className={redCar ? 'car-right' : 'car-left'}
            src={carRed}
            alt='red car'
          />
          <button onClick={() => moveCar('redCar', !redCar)} type='button'>
            Move
          </button>
        </div>
        <div>
          <img
            className={blueCar ? 'car-right' : 'car-left'}
            src={carBlue}
            alt='blue car'
          />
          <button onClick={() => moveCar('blueCar', !blueCar)} type='button'>
            Move
          </button>
        </div>
        <div>
          <img
            className={yellowCar ? 'car-right' : 'car-left'}
            src={carYellow}
            alt='yellow car'
          />
          <button
            onClick={() => moveCar('yellowCar', !yellowCar)}
            type='button'
          >
            Move
          </button>
        </div>
      </div>
    </Provider>
  );
}

export default Cars;

