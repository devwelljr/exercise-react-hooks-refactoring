import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider(props) {
  const [cars, setCars] = useState({ red: false, blue: false, yellow: false });

  const moveCar = (car, side) => {
    setCars({
      ...cars,
      [car]: side,
    });
  };

    const context = {
      ...cars,
      moveCar: moveCar,
    };

    const { children } = props;

    return (
      <CarsContext.Provider value={ context }>
        { children }
      </CarsContext.Provider>
    );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
