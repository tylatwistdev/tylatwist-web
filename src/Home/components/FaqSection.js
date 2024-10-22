// FaqSection.js

import React from 'react';

const FaqSection = () => {
    // Example FAQ data
    const faqs = [
        {
            question: "What services do you offer?",
            answer: "We offer a wide range of software development services including web development, mobile applications, and cloud solutions."
        },
        {
            question: "How can I contact support?",
            answer: "You can contact our support team via email at support@example.com or call us at +123 456 789. "
        },
        {
            question: "What are your pricing plans?",
            answer: "We offer flexible pricing plans based on the specific needs of each project. Contact us for more details."
        },
        {
            question: "Do you provide custom software solutions?",
            answer: "Yes, we specialize in providing custom software solutions tailored to your business needs."
        },
        {
            question: " What industries do you specialize in?",
            answer: "We have expertise working with a variety of industries including sports and fitness, e-commerce, food and beverage, Ed-Tech, Automotive, space exploration, Art and culture, Real estate, Entertainment, Telecommunications, Finance."
        }
    ];

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded={index === 0 ? 'true' : 'false'} aria-controls={`collapse${index}`}>
                                {faq.question}
                            </button>
                        </h2>
                        <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`heading${index}`} data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqSection;
