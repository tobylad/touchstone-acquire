import React, { useState } from 'react';
import deleteIcon from './times-solid.svg';

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

  // Create / Update
  const targetUpdates = (targetName, targetPrice, targetLocation, i) => {
    let newTargets;

    if (i === undefined) {
      
      newTargets = [...targets, { 
          name: targetName, 
          price: targetPrice, 
          location: targetLocation
        }
      ];

    } else {
      
      newTargets = [...targets];
      newTargets[i].name = targetName;
      newTargets[i].price = targetPrice;
      newTargets[i].location = targetLocation;
      
    }
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
          <div className="col-12 col-lg-6"> 
            Name: {target.name} 
          </div>
        </li>

        <li className="row">
          <div className="col-12 col-lg-6">
            Asking Price: {formatCurrency(target.price)} 
          </div>
        </li>

        <li className="row">
          <div className="col-12 col-lg-6">
            Location: {target.location}
          </div>
        </li>

        <div className="row">
          <div className="col-2 col-lg-1">
            <button onClick={() => destroyTarget(index)}>
              <img src={deleteIcon} alt="delete" className="icon" />
            </button>
          </div>

          <UpdateTarget currentTarget={target} edit={targetUpdates} i={index} />
        </div>
      </ul>

    );
  })

  return (
    <div className="App">
      <div className="container">
        
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2>Touchstone Acquire</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            {targetList}
          </div>
        </div>
      </div>

      <CreateTarget add={targetUpdates} />

      <Footer />
    </div>
  );
}

export default App;
