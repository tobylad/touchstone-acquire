import React, { useState } from 'react';

import researchIcon from './flask-solid.svg';
import pendingIcon from './hourglass-half-solid.svg';
import approvedIcon from './check-solid.svg';
import declinedIcon from './times-solid.svg';
import deleteIcon from './trash-alt-solid.svg';

// Components
import CreateTarget from './CreateTarget';
import UpdateTarget from './UpdateTarget';
import Footer from './Footer';
import Legend from './Legend';

// Assets
import { mockTargets } from './mock-targets.js';
import { formatCurrency, formatPercentage, modifyTargets } from './utils.js';
import './App.css';

function App() {
  const [targets, setTargets] = useState(mockTargets);
  const [sortType, setSortType] = useState("unsorted");

  const tileStatusClass = (status) => {
    if (status === 1) {
      return " approved";
    } else if (status === 2) {
      return " pending";
    } else if (status === 3) {
      return " researching";
    } else if (status === 4) {
      return " declined";
    }
  }

  // Create / Update
  const targetUpdates = (targetName, targetRevenue, targetMargin, targetLocation, i) => {
    let newTargets;

    if (i === undefined) {
      
      newTargets = [...targets, { 
          name: targetName, 
          revenue: targetRevenue,
          margin: targetMargin,
          location: targetLocation,
          status: 1
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

  const updateStatus = (i, newStatus) => {
    const statusMap = {
      "approved": 1,
      "pending": 2,
      "researching": 3,
      "declined": 4
    };

    let newTargets = [...targets];
    newTargets[i].status = statusMap[newStatus];
    setTargets(newTargets);
    setSortType("unsorted");
  }

  // Update - Sorting
  const sortTargets = (e) => {
    if (e.target.value === "") {
      setSortType("unsorted");
    } else {
      setSortType(e.target.value);
    }
  }

  let modifiedTargets = modifyTargets(targets, sortType);

  // Delete
  const destroyTarget = (i) => {
    const newTargets = [...targets];
    newTargets.splice(i, 1);
    setTargets(newTargets);
  }


  // Read
  const targetList = modifiedTargets.map((target, index) => {
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
              <span className="property">Revenue:</span> {formatCurrency(target.revenue)} 
            </li>
          </div>

          <div className="col-12">
            <li>  
              <span className="property">Margin:</span> {formatPercentage(target.margin)}
            </li>
          </div>

          <div className="col-12">
            <li>
              <span className="property">Location:</span> {target.location}
            </li>
          </div>

          <div className="col-12">
            <li className={"status" + tileStatusClass(target.status)}></li>
          </div>
        </div>

        <div className="row">

          <div className="col-2">
            <button 
              onClick={() => updateStatus(index, "researching")}
              className="icon-button">
              <img src={researchIcon} alt="researching" className="icon" />
            </button>
          </div>

          <div className="col-2">
            <button 
              onClick={() => updateStatus(index, "pending")}
              className="icon-button">
              <img src={pendingIcon} alt="pending" className="icon" />
            </button>
          </div>

          <div className="col-2">
            <button 
              onClick={() => updateStatus(index, "approved")}
              className="icon-button">
              <img src={approvedIcon} alt="approve" className="icon" />
            </button>
          </div>

          <div className="col-2">
            <button 
              onClick={() => updateStatus(index, "declined")}
              className="icon-button">
              <img src={declinedIcon} alt="decline" className="icon" />
            </button>
          </div>

          <div className="col-2 offset-1">
            <button 
              onClick={() => destroyTarget(index)}
              className="icon-button">
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
        <Legend />
        <span className="sort-label">Sort by:</span>
        <select className="sort-select" onChange={sortTargets}>
          <option></option>
          <option>Name</option>
          <option>Revenue</option>
          <option>Margin</option>
          <option>Status</option>
        </select>
        
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
