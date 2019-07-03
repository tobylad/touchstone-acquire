import React, { useState } from 'react';
import deleteIcon from './times-solid.svg';

// Components
import CreateTarget from './CreateTarget';
import UpdateTarget from './UpdateTarget';
import Footer from './Footer';

// Assets
import { mockTargets } from './mock-targets.js';
import './App.css';

function App() {
  const [targets, setTargets] = useState(mockTargets);

  // Create / Update
  const targetUpdates = (targetName, targetRevenue, targetMargin, targetLocation, i) => {
    let newTargets;

    if (i === undefined) {
      
      newTargets = [...targets, { 
          name: targetName, 
          revenue: targetRevenue,
          margin: targetMargin,
          location: targetLocation,
          status: "researching"
        }
      ];

    } else {
      
      newTargets = [...targets];
      newTargets[i].name = targetName;
      newTargets[i].revenue = targetRevenue;
      newTargets[i].margin = targetMargin;
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
      <ul key={index} className="col-10 col-lg-3 offset-1 offset-lg-0 tile">
        <div className="row">
          <div className="col-12">
            <li className="tile-title">
                <h4>{target.name}</h4>
            </li>
          </div>

          <div className="col-12">
            <li>
              <span className="property">Revenue:</span> {target.revenue} 
            </li>
          </div>

          <div className="col-12">
            <li>  
              <span className="property">Margin:</span> {target.margin}
            </li>
          </div>

          <div className="col-12">
            <li>
                <span className="property">Location:</span> {target.location}
            </li>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <button onClick={() => destroyTarget(index)}>
              <img src={deleteIcon} alt="delete" className="icon" />
            </button>
          </div> 
        </div>
        
        <UpdateTarget currentTarget={target} edit={targetUpdates} i={index} />
      </ul>


    );
  })

  return (
    <div className="App">
      <div className="container">
        
        <div className="row">
          <div className="col-12 page-title">
            <h1>Touchstone Acquire</h1>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="row">
          {targetList}
          <CreateTarget add={targetUpdates} />
        </div>
      </div>



      <Footer />
    </div>
  );
}

export default App;
