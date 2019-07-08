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
import { formatCurrency, formatPercentage } from './utils.js';
import { handleTargetSort } from './sort.js';
import { handleTargetFilter } from './filter.js';
import './App.css';

function App() {
  const [targets, setTargets] = useState(mockTargets);
  const [sortType, setSortType] = useState("unsorted");
  const [filterType, setFilterType] = useState("");

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
          status: 3
        }
      ];

    } else {
      
      newTargets = [...targets];
      newTargets[i].name = targetName;
      newTargets[i].revenue = targetRevenue;
      newTargets[i].margin = targetMargin;
      newTargets[i].location = targetLocation;
      
    }

    setSortType("unsorted");
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

  // Sorting / Filtering
  let modifiedTargets;

  const sortTargets = (e) => {
    if (e.target.value === "") {
      setSortType("unsorted");
    } else {
      setSortType(e.target.value);
    }
  }

  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
  }

  const clearFilters = () => {
    setFilterType("");
  }

  const hideIfFiltered = () => {
    if (filterType !== "") {
      return " hide"
    } else {
      return "";
    }
  }

  modifiedTargets = handleTargetFilter(handleTargetSort(targets, sortType), filterType);

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
              <img src={researchIcon} alt="researching" className={"icon" + hideIfFiltered()} />
            </button>
          </div>

          <div className="col-2">
            <button 
              onClick={() => updateStatus(index, "pending")}
              className="icon-button">
              <img src={pendingIcon} alt="pending" className={"icon" + hideIfFiltered()} />
            </button>
          </div>

          <div className="col-2">
            <button 
              onClick={() => updateStatus(index, "approved")}
              className="icon-button">
              <img src={approvedIcon} alt="approve" className={"icon" + hideIfFiltered()} />
            </button>
          </div>

          <div className="col-2">
            <button 
              onClick={() => updateStatus(index, "declined")}
              className="icon-button">
              <img src={declinedIcon} alt="decline" className={"icon" + hideIfFiltered()} />
            </button>
          </div>

          <div className="col-2 offset-1">
            <button 
              onClick={() => destroyTarget(index)}
              className="icon-button">
              <img src={deleteIcon} alt="delete" className={"icon" + hideIfFiltered()} />
            </button>
          </div> 
        </div>
        
        <UpdateTarget currentTarget={target} edit={targetUpdates} i={index} filter={filterType} />
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


        <div className="row">
          <div className="col-5 col-lg-3">
            <span className="sort-label">Sort by:</span>
            <select className="sort-select" onChange={sortTargets}>
              <option></option>
              <option>Name</option>
              <option>Revenue</option>
              <option>Margin</option>
              <option>Status</option>
            </select>
          </div>
          
          <div className="col-7 col-lg-3">
            <span className="sort-label">Filter by:</span>
            <select className="sort-select" onChange={handleFilterTypeChange}>
              <option></option>
              <option>Status: Approved</option>
              <option>Status: Pending</option>
              <option>Status: Researching</option>
              <option>Status: Declined</option>
              <option>Margin: High</option>
              <option>Margin: Average</option>
              <option>Margin: Low</option>
              <option>Revenue: 9 figures+</option>
              <option>Revenue: 7-8 figures</option>
              <option>Revenue: 6 figures-</option>
            </select>
          </div>

          <div className="col-12 col-lg-6 clear-filters-wrapper">
            <button 
              className="clear-filters"
              onClick={clearFilters}>
              Clear filters
            </button>
          </div>
        </div>

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
