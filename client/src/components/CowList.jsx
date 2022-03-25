import React from 'react';
import Cow from './Cow.jsx';

const CowList = (props) => {
  return (
    <div className="cow-list">
      {props.cowList.data && props.cowList.data.map(cow => {
          console.log('**** ', cow);
        return <Cow name={cow.name} key={cow.id}/>
      })}
    </div>
  )
}

export default CowList;