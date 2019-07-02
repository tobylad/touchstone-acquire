import React, { useState } from 'react';

// Components
import CreateTarget from './CreateTarget';
import UpdateTarget from './UpdateTarget';
import Footer from './Footer';

// Assets
import { mockTargets } from './mock-targets.js';
import { formatCurrency } from './utils.js';
import './App.css';

function App() {
  const [targets, setTargets] = useState(mockTargets);

  // Create
  const addTarget = (targetName, targetPrice, targetLocation) => {
    const newTargets = [...targets, { 
        name: targetName, 
        price: targetPrice, 
        location: targetLocation
      }
    ];

    setTargets(newTargets);
  }

  // Update
  const editTargetName = (i, newName) => {
    const newTargets = [...targets];
    newTargets[i].name = newName;
    setTargets(newTargets);
  }

  const editTargetPrice = (i, newPrice) => {
    const newTargets = [...targets];
    newTargets[i].price = parseInt(newPrice);
    setTargets(newTargets);
  }

  const editTargetLocation = (i, newLocation) => {
    const newTargets = [...targets];
    newTargets[i].location = newLocation;
    setTargets(newTargets);
  }

  // Delete
  const destroyTarget = (i) => {
    const newTargets = [...targets];
    newTargets.splice(i, 1);
    setTargets(newTargets);
  }



  // Read
  const targetList = targets.map((target, index) => {
    return (
      <ul key={index}>
        <li className="row">
          <div className="col-6 col-lg-3"> 
            Name: {target.name} 
          </div>

          <UpdateTarget edit={editTargetName} i={index} currentValue={target.name}/>
        </li>

        <li className="row">
          <div className="col-6 col-lg-3">
            Asking Price: {formatCurrency(target.price)} 
          </div>

          <UpdateTarget edit={editTargetPrice} i={index} currentValue={target.price} />
        </li>

        <li className="row">
          <div className="col-6 col-lg-3">
            Location: {target.location}
          </div>

          <UpdateTarget edit={editTargetLocation} i={index} currentValue={target.location} />
        </li>

        <li><button onClick={() => destroyTarget(index)}>Delete</button></li>
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
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            {targetList}
          </div>
        </div>
      </div>

      <CreateTarget add={addTarget} />

      <Footer />
    </div>
  );
}

export default App;
