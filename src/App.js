import React, { useState } from 'react';
import './App.css';
import { mockTargets } from './mock-targets.js';
import { formatCurrency } from './utils.js';
import TargetForm from './TargetForm';

function App() {
  const [targets, setTargets] = useState(mockTargets);

  const addTarget = (targetName, targetPrice, targetLocation) => {
    const newTargets = [...targets, { 
        name: targetName, 
        price: targetPrice, 
        location: targetLocation
      }
    ];

    setTargets(newTargets);
  }

  const targetList = targets.map((target, index) => {
    return (
      <ul key={index}>
        <li>Name: {target.name}</li>
        <li>Asking Price: {formatCurrency(target.price)}</li>
        <li>Location: {target.location}</li>
      </ul>
    );
  })

  let logState = () => {
    console.log(targets);
  }



  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2>Touchstone Acquire</h2>
            <button onClick={logState}>Companies</button>
            
            <div>{targetList}</div>

            <TargetForm add={addTarget} />

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
