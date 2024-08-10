import React from 'react'
import awards from '../config/awardConfig';
import AwardItem from './AwardItem';

function Awards() {
    return (
        <div className="flex flex-wrap justify-center gap-8 my-5">
          {awards.map((item, index) => (
            <AwardItem
              key={index}
              image={item.image}
              heading={item.heading}
              description={item.description}
            />
          ))}
        </div>
      );
}

export default Awards