import React from 'react';

const SelectedCow = (props) => {
  return (
    <div className="selected-cow">
      <p className="selected-cow-name">{props.selectedCow.name}</p>
      <p className="selected-cow-description">{props.selectedCow.description}</p>
    </div>
  )
}

export default SelectedCow;