import React from 'react';

const SelectedCow = (props) => {
  return (
    <div className="selected-cow">
      <p className="selected-cow-name">{props.selectedCow[0].name}</p>
      <p className="selected-cow-description">{props.selectedCow[0].description}</p>
    </div>
  )
}

export default SelectedCow;