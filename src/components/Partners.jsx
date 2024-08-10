import React from 'react'
import partners from '../config/partners';
import PartnerItem from './PartnerItem';

function Partners() {
  return (
    <div className="container mx-auto px-8 py-8">
      <h2 className="text-4xl font-bold text-center mb-8">Our Partners & Collaborators</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
        {partners.map((partner, index) => (
          <PartnerItem key={index} imageUrl={partner.imageUrl} altText={partner.altText} />
        ))}
      </div>
    </div>
  )
}

export default Partners