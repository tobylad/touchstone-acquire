import React, { useState } from 'react';

function TargetForm(props) {
  const [tName, setTName] = useState("");
  const [tPrice, setTPrice] = useState("");
  const [tLocation, setTLocation] = useState("");

  const handleNameChange = (e) => {
    setTName(e.target.value);
  }

  const handlePriceChange = (e) => {
    setTPrice(e.target.value);
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
    <form onSubmit={handleSubmit} className="container">
      <p>Add a company</p>

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

      <button>Submit</button>
    </form>
  )
}

export default TargetForm;