import Image from 'next/image'
import React from 'react'

function SmallCard({img, location, distance}) {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl transition duration-250 transform ease-out cursor-pointer hover:scale-105 hover:bg-gray-100'>

      <div className='relative h-16 w-16'>
        <Image src={img} fill className='rounded-xl' />
      </div>
      <div className=''>
          <h2>{location}</h2>
          <h3 className='text-gray-500'>{distance}</h3>
        </div>
    </div>
  )
}

export default SmallCard