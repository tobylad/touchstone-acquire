import React, { useState, useEffect } from 'react';
import addIcon from './plus-solid.svg';
import deleteIcon from './trash-alt-solid.svg';

function CreateTarget(props) {
  const [formHidden, setFormHidden] = useState(true);
  const [tName, setTName] = useState("");
  const [tRevenue, setTRevenue] = useState("");
  const [tMargin, setTMargin] = useState("");
  const [tLocation, setTLocation] = useState("");
  const [nameError, setNameError] = useState(false);
  const [revenueError, setRevenueError] = useState(false);
  const [marginError, setMarginError] = useState(false);
  const [locationError, setLocationError] = useState(false);

  useEffect(() => {
      setNameError(false);
      setRevenueError(false);
      setMarginError(false);
      setLocationError(false);
    }, 

    [nameError, revenueError, marginError, locationError]
  )

  const formWrapperClass = () => {
    if (formHidden === true) {
      return "hide";
    } else {
      return "col-10 col-lg-3 offset-1 offset-lg-0 create-tile";
    }
  }

  const toggleFormWrapperClass = () => {
    if (formHidden === true) {
      setFormHidden(false);
    } else {
      setFormHidden(true);
    }
  }

  const resetForm = () => {
    toggleFormWrapperClass();
    setTName("");
    setTRevenue("");
    setTMargin("");
    setTLocation("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    props.add(tName, tRevenue, tMargin, tLocation);
    setTName("");
    setTRevenue("");
    setTMargin("");
    setTLocation("");
  }

  return (
    <React.Fragment>

        <div className={formWrapperClass()}>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <label className="col-4 label-edit"><span>Name:</span></label>
              <input className={"col-8 input-edit" + errorClass("name")} 
              onChange={(e) => handleChange(e, "name")} 
              value={tName} 
              onBlur={(e) => handleError(e, "name")} />
            </div>

            {displayError("name")}

            <div className="row">
              <label className="col-4 label-edit"><span>Revenue:</span></label>
              <input className={"col-8 input-edit" + errorClass("revenue")} 
              onChange={(e) => handleChange(e, "revenue")} 
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
              onChange={(e) => handleChange(e, "location")} 
              value={tLocation} 
              onBlur={(e) => handleError(e, "location")} />
            </div>

            {displayError("location")}

            <div className="row">
              <div className="col-10">
                <button 
                className={"update-button"} 
                onClick={toggleFormWrapperClass}
                disabled={disableIfErrors()}>
                  Add
                </button>
              </div>

              <div className="col-1 cancel-icon-wrapper">
                <img src={deleteIcon} 
                className="icon cancel-icon" 
                alt="cancel"
                onClick={resetForm} />
              </div>
            </div>
          </form>
        </div>
        
        <div className="col-10 col-lg-3 offset-1 offset-lg-0">
          <span><strong>Add a new target</strong></span>
            <img src={addIcon} 
            alt="add"
            className="plus-icon"
            onClick={toggleFormWrapperClass} />
        </div>
    </React.Fragment>
  )
}

export default CreateTarget;