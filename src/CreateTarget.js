import React, { useState } from 'react';
import addIcon from './plus-solid.svg';
import deleteIcon from './times-solid.svg';

function CreateTarget(props) {
  const [formHidden, setFormHidden] = useState(true);
  const [tName, setTName] = useState("");
  const [tRevenue, setTRevenue] = useState("");
  const [tMargin, setTMargin] = useState("");
  const [tLocation, setTLocation] = useState("");

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

  const handleNameChange = (e) => {
    setTName(e.target.value);
  }

  const handleRevenueChange = (e) => {
    setTRevenue(e.target.value);
  }

  const handleMarginChange = (e) => {
    setTMargin(e.target.value);
  }

  const handleLocationChange = (e) => {
    setTLocation(e.target.value);
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
              <input className="col-8 input-edit" onChange={handleNameChange} value={tName} />
            </div>

            <div className="row">
              <label className="col-4 label-edit"><span>Revenue:</span></label>
              <input className="col-8 input-edit" onChange={handleRevenueChange} value={tRevenue} /> <br/>
            </div>

            <div className="row">
              <label className="col-4 label-edit"><span>Margin:</span></label>
              <input className="col-8 input-edit" onChange={handleMarginChange} value={tMargin} /> <br/>
            </div>

            <div className="row">
              <label className="col-4 label-edit"><span>Location:</span></label>
              <input className="col-8 input-edit" onChange={handleLocationChange} value={tLocation} /> <br/>
            </div>

            <div className="row">
              <div className="col-10">
                <button className="update-button" onClick={toggleFormWrapperClass}>
                  Add
                </button>
              </div>

              <div className="col-1 cancel-icon-wrapper">
                <img src={deleteIcon} 
                className="icon cancel-icon" 
                alt="cancel"
                onClick={toggleFormWrapperClass} />
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