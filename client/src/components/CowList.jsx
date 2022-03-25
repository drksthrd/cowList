import React from 'react';
import Cow from './Cow.jsx';

const CowList = (props) => {
  return (
    <div className="cow-list">
      {props.cowList && props.cowList.map(cow => {
        return <Cow name={cow.name} key={cow.id}/>
      })}
    </div>
  )
}

export default CowList;