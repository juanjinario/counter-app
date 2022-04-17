// generate with rafcp snippet

import PropTypes from "prop-types";
import { useState } from "react";

const CounterApp = ({ value }) => {
  const state = useState(value);
  const [ counter, setCounter ] = state;
  const handdleLess = (e) => {
    setCounter((c) => c - 1);
  };
  const handdleReset = (e) => {
    setCounter(value);
  };
  const handdleAdd = (e) => setCounter(counter + 1);
  return (
    <>
      <h1>CounterApp</h1>
      <h2 role="count-value">{ counter }</h2>
      <button className="btn-primary" onClick={ handdleLess }>-1</button>
      <button className="btn-primary" onClick={ handdleReset }>Reset</button>
      <button className="btn-primary" onClick={ handdleAdd }>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
