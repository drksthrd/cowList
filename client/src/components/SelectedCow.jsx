import React from 'react';

const SelectedCow = (props) => {
  console.log('prrroops: ', props);
  return (

    <div className="selected-cow">
       {props.selectedCow.length && <p className="selected-cow-name">{props.selectedCow[0].name}</p>}
      {props.selectedCow.length && <p className="selected-cow-description">{props.selectedCow[0].description}</p>}
    </div>
  )
}

export default SelectedCow;