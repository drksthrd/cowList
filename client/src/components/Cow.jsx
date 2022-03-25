import React from 'react';

const Cow = (props) => {

  const clickCow = () => {
    console.log('THE PROPS', props);
    props.updateSelectedCow(props.id);
  }

  return (
    <div className="cow-item">
      <p onClick={clickCow} className="cow-item-name">{props.name}</p>
    </div>
  )
}

export default Cow;