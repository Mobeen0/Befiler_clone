import React from 'react'

function AwardItem({image,heading,description}) {
  return (
    <div className="flex flex-col items-center p-4 text-center">
      <img src={image} alt={heading} className="w-16 h-16 mb-4" />
      <h3 className="font-bold mb-2">{heading}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default AwardItem