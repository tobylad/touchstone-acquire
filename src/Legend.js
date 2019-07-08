import React, { useState } from 'react';
import './Legend.css';
import researchIcon from './flask-solid.svg';
import pendingIcon from './hourglass-half-solid.svg';
import approvedIcon from './check-solid.svg';
import declinedIcon from './times-solid.svg';
import deleteIcon from './trash-alt-solid.svg';
import editIcon from './pencil-alt-solid.svg';

function Legend(props) {
  const [legendHidden, setLegendHidden] = useState(true);

  const legendShowHide = () => {
    if (legendHidden === true) {
      return " hide";
    } else {
      return "";
    }
  }

  const toggleLegend = (e) => {
    e.preventDefault();

    if (legendHidden === true) {
      setLegendHidden(false);
    } else {
      setLegendHidden(true);
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col-4 col-lg-2 offset-8 offset-lg-10 toggle-legend-wrapper">
          <button className="toggle-legend"
            onClick={toggleLegend}>
            Toggle Legend
          </button>
        </div>
      </div>

      <div className={"row legend" + legendShowHide()}>
        <div className="col-4 col-lg-2">
          <img src={approvedIcon} alt="approve" className="small-icon" />
          <span className="approved-text">Approved</span>
        </div>        

        <div className="col-4 col-lg-2">
          <img src={pendingIcon} alt="pending" className="small-icon" />
          <span className="pending-text">Pending</span>
        </div>

        <div className="col-4 col-lg-2">
          <img src={researchIcon} alt="research" className="small-icon" />
          <span className="research-text">Researching</span>
        </div>

        <div className="col-4 col-lg-2">
          <img src={declinedIcon} alt="decline" className="small-icon" />
          <span className="declined-text">Declined</span>
        </div>

        <div className="col-4 col-lg-2">
          <img src={deleteIcon} alt="delete" className="small-icon" />
          <span className="delete-text">Delete</span>
        </div>

        <div className="col-4 col-lg-2">
          <img src={editIcon} alt="edit" className="small-icon" />
          <span className="edit-text">Edit</span>
        </div>

      </div>

      <div className={"row" + legendShowHide()}>
        <div className="col-12 toggle-legend-disclaimer">
          <span>Note: If filter is active, updating is disabled.</span>
        </div>
      </div>
    </div>
  )
}

export default Legend;