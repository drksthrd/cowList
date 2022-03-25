import React from 'react';

const Cow = (props) => {
  console.log('%%%', props.name);
  return (
    <div className="cow-item">
      <p onClick={props.clickCow} className="cow-item-name">{props.name}</p>
    </div>
  )
}

export default Cow;