import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

function Cards() {
    const cardData = [
        {
            title: "General Diagnostic Testing",
            description: "Lab testing can be a very effective way to understand what’s happening with your…",
            imageUrl: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-sv2-600x500.jpg",
            link: "#"
        },
        {
            title: "Naturopathic Lab Testing",
            description: "Naturopathic doctors use unique lab tests to help us get a picture of what’s…",
            imageUrl: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-sv1-600x500.jpg",
            link: "#"
        },
        {
            title: "Specialized Genetic Testing",
            description: "Genetic testing looks for changes in your DNA that can inform your medical care.…",
            imageUrl: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-3-600x500.jpg",
            link: "#"
        },
        {
            title: "Hormone Insights Testing",
            description: "At-home food sensitivity tests, specifically IgG tests, do not reliably identify triggers for food-induced…",
            imageUrl: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-10-600x500.jpg",
            link: "#"
        },
        {
            title: "Allergy & Sensitivity Testing",
            description: "At-home food sensitivity tests, specifically IgG tests, do not reliably identify triggers for food",
            imageUrl: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-11-600x500.jpg",
            link: "#"
        },
        {
            title: "Complete Health Checkup",
            description: "Once collected, samples will be sent to labs for processing. Detailed reports will be…",
            imageUrl: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-12-600x500.jpg",
            link: "#"
        },
        {
            title: "Complete Health Checkup",
            description: "Once collected, samples will be sent to labs for processing. Detailed reports will be…",
            imageUrl: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-12-600x500.jpg",
            link: "#"
        },
        {
            title: "Complete Health Checkup",
            description: "Once collected, samples will be sent to labs for processing. Detailed reports will be…",
            imageUrl: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-12-600x500.jpg",
            link: "#"
        },
        {
            title: "Complete Health Checkup",
            description: "Once collected, samples will be sent to labs for processing. Detailed reports will be…",
            imageUrl: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-12-600x500.jpg",
            link: "#"
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 8; // Define how many cards to show per page

    // Calculate total pages
    const totalPages = Math.ceil(cardData.length / cardsPerPage);

    // Get the cards for the current page
    const currentCards = cardData.slice(
        (currentPage - 1) * cardsPerPage,
        currentPage * cardsPerPage
    );

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const [isFlipped, setIsFlipped] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsFlipped(true); // Trigger the flip animation
        }, 100); // Slight delay for smooth animation
        return () => clearTimeout(timer);
      }, [currentPage]);

    return (
        <div className="container mx-auto p-4 mt-10 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentCards.map((card, index) => (
                    <div key={index} className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-1000 [transform-style:preserve-3d] ${
              isFlipped ? "[transform:rotateY(360deg)]" : "[transform:rotateY(0deg)]"
            }`}>
                        <div className={`flex flex-col ${index % 2 === 0 ? '' : 'flex-col-reverse'}  `}>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-teal-600">{card.title}</h2>
                                <p className="text-gray-600 mt-2">{card.description}</p>
                                <a href={card.link} className="text-teal-500 mt-4 inline-block">
                                    READ MORE <FontAwesomeIcon icon={faArrowRight} />
                                </a>
                            </div>
                            <img src={card.imageUrl} alt={card.title} className="w-full h-40 object-cover" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-4">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-teal-500 text-white rounded-l-lg"
                >
                    Previous
                </button>
                <span className="px-4 py-2 bg-gray-200 text-gray-700">{currentPage} of {totalPages}</span>
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-teal-500 text-white rounded-r-lg"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Cards;
