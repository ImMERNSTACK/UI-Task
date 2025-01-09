import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";

function HeaderTop() {
  return (
    <section className="header">
      <div className="border-b-2 border-gray-200">
        <div className="flex flex-wrap justify-between mx-auto  ">
          {/* Left Section */}
          <div className="flex items-center space-x-4 bg-blue-950 text-white p-3 rounded-r-lg w-full lg:w-auto ">
            <div className="text-center lg:text-left">
              BOOK <span className="text-teal-300">FREE</span> HOME COLLECTION
            </div>
            <div>
              <FontAwesomeIcon
                icon={faPhone}
                className="p-2 rounded-full bg-gradient-to-r from-teal-300 to-teal-400"
              />
            </div>
            <div className="font-bold text-lg">+123 456 7899 90</div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col space-y-3 w-full mt-3 lg:mt-0 lg:w-auto lg:space-y-0 lg:flex-row lg:items-center lg:space-x-8">
            <ul className="space-y-3 lg:space-y-0 lg:space-x-4 flex flex-col lg:flex-row items-start lg:items-center">
              <li className="flex items-center space-x-2">
                <span className="text-teal-300">
                  <FontAwesomeIcon icon={faClock} className="animate-spin" />
                </span>
                <small className="text-gray-600 font-semibold">
                  Mon - Sat 8.00-18.00, Sun - Closed
                </small>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-teal-300">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <small className="text-gray-600 font-semibold">Info@Patholab.com</small>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-teal-300">
                  <FontAwesomeIcon icon={faMap} />
                </span>
                <small className="text-gray-600 font-semibold">
                  183 Marina Avenue, Miami Ci Mall, USA
                </small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderTop;
