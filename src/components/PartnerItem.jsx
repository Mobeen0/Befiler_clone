import React from 'react'

function PartnerItem({ imageUrl, altText }) {
  return (
    <div className="flex items-center justify-center p-2">
      <img src={imageUrl} alt={altText} className="max-h-16 max-w-full object-contain" />
    </div>
  )
}

export default PartnerItem