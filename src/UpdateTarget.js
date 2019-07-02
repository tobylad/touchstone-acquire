import React, { useState } from 'react';

function UpdateTarget(props) {
  const [formHidden, setFormHidden] = useState(true);
  const [value, setValue] = useState(props.currentValue);

  const formClass = () => {
    if (formHidden === true) {
      return "col-4 hide";
    } else {
      return "col-4";
    }
  }

  const toggleFormClass = () => {
    if (formHidden === true) {
      setFormHidden(false);
    } else {
      setFormHidden(true);
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleFormClass();
    props.edit(props.i, value);
    setValue(value);
  }

  return (
      <div className="col-3 col-lg-3">
        <div className="row">
          <button className="col-4" onClick={toggleFormClass}>Edit</button>

          <form onSubmit={handleSubmit} className={formClass()}>
              <input onChange={handleChange} value={value} />
              <button>Update</button>
          </form>
        </div>
      </div>
  );
}

export default UpdateTarget;