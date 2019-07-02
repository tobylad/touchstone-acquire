import React, { useState, useEffect } from 'react';
import editIcon from './pencil-alt-solid.svg';

function UpdateTarget(props) {
  const [formHidden, setFormHidden] = useState(true);
  const [tName, setTName] = useState(props.currentTarget.name);
  const [tPrice, setTPrice] = useState(props.currentTarget.price);
  const [tLocation, setTLocation] = useState(props.currentTarget.location);

  useEffect(() => {
      setTName(props.currentTarget.name);
      setTPrice(props.currentTarget.price);
      setTLocation(props.currentTarget.location);
    },
    
    [
      props.currentTarget.name, 
      props.currentTarget.price, 
      props.currentTarget.location
    ]
  )

  const formClass = () => {
    if (formHidden === true) {
      return "col-12 edit-form hide";
    } else {
      return "col-12 edit-form";
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
    toggleFormClass();
    props.edit(tName, tPrice, tLocation, props.i);
    setTName(props.currentTarget.name);
    setTPrice(props.currentTarget.price);
    setTLocation(props.currentTarget.location);
  }

  return (
      <div className="col-10 col-lg-5">
        <div className="row">
          <button className="col-12 col-lg-4 edit-button" onClick={toggleFormClass}>
            <img src={editIcon} alt="edit" className="icon" />
          </button>

          <form onSubmit={handleSubmit} className={formClass()}>
              <input onChange={handleNameChange} value={tName} /> <br/>
              <input onChange={handlePriceChange} value={tPrice} /> <br/>
              <input onChange={handleLocationChange} value={tLocation} /> <br/>


              <button className="update-button">Update</button>
          </form>
        </div>
      </div>
  );
}

export default UpdateTarget;