import React, { useState, useEffect } from 'react';
import editIcon from './pencil-alt-solid.svg';

function UpdateTarget(props) {
  const [formHidden, setFormHidden] = useState(true);
  const [tName, setTName] = useState(props.currentTarget.name);
  const [tRevenue, setTRevenue] = useState(props.currentTarget.revenue);
  const [tMargin, setTMargin] = useState(props.currentTarget.margin);
  const [tLocation, setTLocation] = useState(props.currentTarget.location);

  useEffect(() => {
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
              <img src={editIcon} alt="edit" className="icon" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={formClass()}>
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
            <div className="col-12">
              <button className="update-button">Update</button>
            </div>
          </div>
        </form>
      </div>
  );
}

export default UpdateTarget;