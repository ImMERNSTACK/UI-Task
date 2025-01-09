import React from 'react'

function Carousel() {
  return (
    <div className="relative ">
          <div className="w-full ">
            <img
              src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/bg-page-title.png"
              alt="slide"
              className="w-full h-64 object-cover"
            />
            <div className=' flex justify-between'>
            <div className='-mt-36 ml-16 text-3xl text-white font-semibold'>SERVICES</div>
            <div className='-mt-36 mr-16 text-lg text-white'><span className='hover:text-blue-600' >HOME </span> <span className='transform rotate-90 inline-block'>^</span> <span className='hover:text-blue-600'>SERVICES</span></div>
            </div>
          </div>
    
      </div>
  
  )
}

export default Carousel