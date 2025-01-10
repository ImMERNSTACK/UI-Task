import React from 'react'
import Cards from '../sections/Cards'
import Footer from './Footer'
import Cards2 from '../sections/Cards2'
function CardSection() {
  return (
    
        <div className='bg-teal-400 w-full lg:h-[34vw]'>
            <div className='flex justify-center'>
                <img src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/09/title-icon.png" className='mt-10 transition duration-750 animate-bounce' alt="" />
            </div>
            <div className='flex flex-col -mt-12'>
                <div className='self-center text-white mb-3'>High Performance Laboratory Services </div>
                <div className='self-center font-bold chakra-petch-bold text-white text-3xl mb-3'>OUR PREMIUM SERVICES </div>
                <div className='self-center text-white text-lg'>Our mission is to provide the highest standard of clinical laboratory service to physicians, clinics, hospitals, and health care providers. </div>
            </div>
            <Cards/>
            <Cards2/>
            <Footer/>

        </div>
        
    
  )
}

export default CardSection