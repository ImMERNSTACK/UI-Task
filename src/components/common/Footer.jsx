import { faFacebook, faGoogle, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMap, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <div className='mt-20 text-white relative'>
    <div className='flex justify-center absolute  w-full -top-16'>
    <div class="flex flex-col  md:flex-col sm:flex-col lg:flex-row bg-gradient-to-r from-teal-400 to-green-300 p-6 w-[70vw] rounded-3xl  self-center">
    <h2 class="text-2xl font-bold flex-1">
     For Latest Updates Subscribe To Our Newsletter
    </h2>
    <div class="mt-4 mb-8 flex justify-center relative flex-1">
     <input class="lg:p-2 rounded-full h-11 bg-transparent shadow-lg w-[25vw] absolute outline-none placeholder-white text-white" placeholder="Enter Your Email" type="email"/>
     <button class="bg-white text-teal-500 font-semibold p-2 px-6 rounded-full absolute right-[12%]">
      Subscribe
     </button>
    </div>
   </div>
   </div>
   <footer class="p-10 bg-blue-900 lg:h-[38vw] " style={{ backgroundImage: "url('https://example.com/your-image.jpg')" }} >
    <div class="grid grid-cols-1 md:grid-cols-5 gap-7 mt-20 ">
     <div>
      <img alt="Patholab logo" class="mb-4" height="100" src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/logo-light.png" width="100"/>
      <p>
       Patholab laboratory is a very well equipped laboratory of this country &amp; they promised to provide best services
      </p>
      <div class="flex space-x-4 mt-4">
       <a class="text-white" href="#">
        <FontAwesomeIcon icon={faFacebook}/>
       </a>
       <a class="text-white" href="#">
       <FontAwesomeIcon icon={faGoogle}/>
       </a>
       <a class="text-white" href="#">
       <FontAwesomeIcon icon={faTwitter}/>
       </a>
       <a class="text-white" href="#">
       <FontAwesomeIcon icon={faInstagram}/>
       </a>
       <a class="text-white" href="#">
       <FontAwesomeIcon icon={faPinterest}/>
       </a>
      </div>
     </div>
     <div>
      <h3 class="text-xl font-bold mb-4">
       Our Services
      </h3>
      <ul>
       <li>
        Clinical Histopathology Tests
       </li>
       <li>
        Clinical Biochemistry Tests
       </li>
       <li>
        Vaccine Research Center
       </li>
       <li>
        Clinical Microbiology Tests
       </li>
       <li>
        Complete Health Checkup
       </li>
      </ul>
     </div>
     <div>
      <h3 class="text-xl font-bold mb-4">
       For Customers
      </h3>
      <ul>
       <li>
        Upload Prescription
       </li>
       <li>
        Request a call Back
       </li>
       <li>
        Healthcare Packages
       </li>
       <li>
        Download Reports
       </li>
       <li>
        Track Progress
       </li>
      </ul>
     </div>
     <div>
      <h3 class="text-xl font-bold mb-4">
       Opening Hour
      </h3>
      <ul>
       <li>
        Monday
       </li>
       <li>
        Tuesday
       </li>
       <li>
        Wednesday
       </li>
       <li>
        Thursday
       </li>
       <li>
        Friday
       </li>
       <li>
        Saturday
       </li>
       <li>
        Sunday
       </li>
      </ul>
     </div>
     <div className='mt-11 mr-20'>
      <ul>
       <li>
        <span class="text-green-400">
         9am - 7am
        </span>
       </li>
       <li>
        <span class="text-green-400">
         9am - 7am
        </span>
       </li>
       <li>
        <span class="text-green-400">
         9am - 7am
        </span>
       </li>
       <li>
        <span class="text-green-400">
         9am - 7am
        </span>
       </li>
       <li>
        <span class="text-green-400">
         9am - 7am
        </span>
       </li>
       <li>
        <span class="text-green-400">
         9am - 7am
        </span>
       </li>
       <li>
        <span class="text-red-500">
         Closed
        </span>
       </li>
      </ul>
     </div>
    </div>
    <div class="mt-10 inline-block flex-col md:flex-row justify-between items-center border-t -ml-4 border-white pt-6 ">
     
     <div class="flex flex-col lg:flex-row  sm:flex-col items-center space-x-5 justify-around w-[95vw] ">
      <div class="flex items-center space-x-2 border-gray-700 ">
      <FontAwesomeIcon icon={faPhone}/>
       <span>
        +234 567 899
       </span>
      </div>
      <div class="flex items-center space-x-2">
       <FontAwesomeIcon icon={faEnvelope}/>
       <span className='ml-10'>
        Info@Patholab.com
       </span>
      </div>
      <div class="flex items-center space-x-2">
        <FontAwesomeIcon icon={faMap}/>
       <span>
        183 Marina Avenue, Miami Ci Mall, USA
       </span>
      </div>
     </div>
     <div className="flex flex-col lg:flex-row items-center lg:justify-between w-[95vw] mt-8 space-y-4 lg:space-y-0">
  {/* Copyright Section */}
  <div className="text-center lg:text-left">
    <span>© 2023, BRAVISTHEME, All rights reserved</span>
  </div>

  {/* Links Section */}
  <div className="flex space-x-4">
    <a className="text-white hover:underline" href="#" aria-label="Privacy Policy">
      Privacy Policy
    </a>
    <a className="text-white hover:underline" href="#" aria-label="Terms and Condition">
      Terms &amp; Condition
    </a>
    <a className="text-white hover:underline" href="#" aria-label="Promo Terms and Conditions">
      *Promo T&amp;Cs Apply
    </a>
  </div>

  {/* Payment Gateways Section */}
  <div className="flex items-center space-x-3">
    <span>Payment Gateways:</span>
    <div className="flex space-x-2">
      {[
        "card-5.png",
        "card-3.png",
        "card-2.png",
        "card-1.png",
      ].map((img, idx) => (
        <img
          key={idx}
          alt={`Payment Gateway ${idx + 1}`}
          src={`https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/${img}`}
          width="25"
          height="20"
          className="hover:scale-110 transition-transform"
        />
      ))}
    </div>
  </div>
</div>


    </div>
   </footer></div>
  )
}

export default Footer