import React, { useState } from 'react';
import addIcon from './plus-solid.svg';

function CreateTarget(props) {
  const [formHidden, setFormHidden] = useState(true);
  const [tName, setTName] = useState("");
  const [tPrice, setTPrice] = useState("");
  const [tLocation, setTLocation] = useState("");

  const formClass = () => {
    if (formHidden === true) {
      return "hide";
    } else {
      return "";
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

  const handlePriceChange = (e) => {
    setTPrice(parseInt(e.target.value));
  }

  const handleLocationChange = (e) => {
    setTLocation(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.add(tName, tPrice, tLocation);
    setTName("");
    setTPrice("");
    setTLocation("");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <span><strong>Add a new target</strong></span>
            <img src={addIcon} 
            alt="add"
            className="plus-icon"
            onClick={toggleFormClass} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className={formClass()}>
        <div className="row">
          <label className="col-lg-6 col-12">
            Name:
            <input type="text" value={tName} onChange={handleNameChange} />
          </label>
        </div>

          <div className="row">
          <label className="col-lg-6 col-12">
            Price:
            <input type="text" value={tPrice} onChange={handlePriceChange} />
          </label>
        </div>

          <div className="row">
          <label className="col-lg-6 col-12">
            Location:
            <input type="text" value={tLocation} onChange={handleLocationChange} />
          </label>
        </div>

        <button className="update-button" onClick={toggleFormClass}>
          Add
        </button>
      </form>
    </div>
  )
}

export default CreateTarget;