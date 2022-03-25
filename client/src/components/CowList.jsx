import React from 'react';
import Cow from './Cow.jsx';

const CowList = (props) => {
  return (
    <div className="cow-list">
      {props.cowList && props.cowList.map(cow => {
        console.log('COW!', cow.id);
        return <Cow name={cow.name} key={cow.id} id={cow.id} updateSelectedCow={props.updateSelectedCow}/>
      })}
    </div>
  )
}

export default CowList;