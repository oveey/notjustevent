import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './faq.css';






const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "What is SteezyKicks?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "What is your return policy?",
      answer: "You can get involved by joining our community and participating in events.",
    },
    {
      question: "Do you offer free shipping?",
      answer: "You can get involved by joining our community and participating in events.",
    },
    {
      question: "Are the shoes on SteezyKicks authentic?",
      answer: "You can get involved by joining our community and participating in events.",
    },
    {
      question: "What payment methods are accepted on SteezyKicks?",
      answer: "You can get involved by joining our community and participating in events.",
    },
    // Add more FAQ data as needed
  ];

  return (
    <div className="faq-section section__padding" id='faq'>
      <div className='faq'>
        <h1>Frequently Asked Questions (F.A.Qs)</h1>
        <p>Find answers to commonly asked questions about shopping on SteezyKicks, payment methods, shipping, returns, and more. If you have any additional inquiries, feel free to reach out to our customer support team.</p>
      </div>
     
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          {/* <div className="question" onClick={() => toggleAnswer(index)}>
            {item.question}
            <FontAwesomeIcon icon={activeIndex === index ? faChevronUp : faChevronDown} />

          </div> */}
          {activeIndex === index && (
            <div className="answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;

