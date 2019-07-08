import React, { useState, useEffect } from 'react';
import editIcon from './pencil-alt-solid.svg';

function UpdateTarget(props) {
  const [formHidden, setFormHidden] = useState(true);
  const [tName, setTName] = useState(props.currentTarget.name);
  const [tRevenue, setTRevenue] = useState(props.currentTarget.revenue);
  const [tMargin, setTMargin] = useState(props.currentTarget.margin);
  const [tLocation, setTLocation] = useState(props.currentTarget.location);
  const [nameError, setNameError] = useState(false);
  const [revenueError, setRevenueError] = useState(false);
  const [marginError, setMarginError] = useState(false);
  const [locationError, setLocationError] = useState(false);

  useEffect(() => {
      setFormHidden(true);
      setNameError(false);
      setRevenueError(false);
      setMarginError(false);
      setLocationError(false);
      setTName(props.currentTarget.name);
      setTRevenue(props.currentTarget.revenue);
      setTMargin(props.currentTarget.margin);
      setTLocation(props.currentTarget.location);
    },

    [
      props.currentTarget.name, 
      props.currentTarget.revenue,
      props.currentTarget.margin, 
      props.currentTarget.location
    ]
  )

  const formClass = () => {
    if (formHidden === true) {
      return "edit-form hide";
    } else {
      return "edit-form";
    }
  }

  const toggleFormClass = () => {
    if (formHidden === true) {
      setFormHidden(false);
    } else {
      setFormHidden(true);
    }
  }

  const handleChange = (e, currentInput) => {
    const inputMap = {
      "name": setTName,
      "revenue": setTRevenue,
      "margin": setTMargin,
      "location": setTLocation
    }

    inputMap[currentInput](e.target.value);
  }

  const handleError = (e, currentInput) => {
    const inputMap = {
      "name": setNameError,
      "revenue": setRevenueError,
      "margin": setMarginError,
      "location": setLocationError
    }

    if (e.target.value === "") {
      inputMap[currentInput](true);
    } else {
      inputMap[currentInput](false);
    }
  }

  const errorClass = (currentInput) => {
    const inputMap = {
      "name": nameError,
      "revenue": revenueError,
      "margin": marginError,
      "location": locationError
    }

    if (inputMap[currentInput] === true) {
      return " input-error";
    } else {
      return "";
    }
  }

  const displayError = (currentInput) => {
    const inputMap = {
      "name": nameError,
      "revenue": revenueError,
      "margin": marginError,
      "location": locationError
    }

    const messageMap = {
      "name": "Name",
      "revenue": "Revenue",
      "margin": "Margin",
      "location": "Location"
    }

    if (inputMap[currentInput] === true) {
      return (
        <div className="row">
          <div className="col-12 error-text-wrapper">
            <p className="error-text">{messageMap[currentInput]} required</p>
          </div>
        </div>
      );
    } else {
      return;
    }
  }

  const emptyCheck = () => {
    if (tName === "" ||
    tRevenue === "" ||
    tMargin === "" ||
    tLocation === "") {
      return true;
    } else {
      return false;
    }
  }

  const errorCheck = () => {
    if (nameError === true ||
    revenueError === true ||
    marginError === true ||
    locationError === true) {
      return true;
    } else {
      return false;
    }
  }

  const disableIfErrors = () => {
    if (errorCheck() || emptyCheck()) {
      return "disabled";
    } else {
      return "";
    }
  }

  const hideIfFiltered = () => {
    if (props.filter !== "") {
      return " hide";
    } else {
      return "";
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleFormClass();
    props.edit(tName, tRevenue, tMargin, tLocation, props.i);
    setTName(props.currentTarget.name);
    setTRevenue(props.currentTarget.margin);
    setTMargin(props.currentTarget.margin)
    setTLocation(props.currentTarget.location);
  }

  return (
      <div>
        <div className="row">
          <div className="col-12">
            <button className="edit-button" onClick={toggleFormClass}>
              <img src={editIcon} alt="edit" className={"icon" + hideIfFiltered()} />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={formClass()}>
          <div className="row">
            <label className="col-4 label-edit"><span>Name:</span></label>
            <input className={"col-8 input-edit" + errorClass("name")} 
            onChange={(e)=> handleChange(e, "name")} 
            value={tName}
            onBlur={(e) => handleError(e, "name")} />
          </div>

          {displayError("name")}

          <div className="row">
            <label className="col-4 label-edit"><span>Revenue:</span></label>
            <input className={"col-8 input-edit" + errorClass("revenue")} 
            onChange={(e)=> handleChange(e, "revenue")} 
            value={tRevenue}
            onBlur={(e) => handleError(e, "revenue")} />
          </div>

          {displayError("revenue")}

          <div className="row">
            <label className="col-4 label-edit"><span>Margin:</span></label>
            <input className={"col-8 input-edit" + errorClass("margin")} 
            onChange={(e)=> handleChange(e, "margin")} 
            value={tMargin}
            onBlur={(e) => handleError(e, "margin")} />
          </div>

          {displayError("margin")}

          <div className="row">
            <label className="col-4 label-edit"><span>Location:</span></label>
            <input className={"col-8 input-edit" + errorClass("location")} 
            onChange={(e)=> handleChange(e, "location")} 
            value={tLocation}
            onBlur={(e) => handleError(e, "location")} />
          </div>

          {displayError("location")}

          <div className="row">
            <div className="col-12">
              <button 
              className="update-button"
              disabled={disableIfErrors()}>
              Update</button>
            </div>
          </div>
        </form>
      </div>
  );
}

export default UpdateTarget;