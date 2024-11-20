import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle open/close of FAQ
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ items data
  const faqs = [
    { question: "How do I install the Healthx app?", answer: "The Healthx app is available on both the iOS App Store and Google Play Store for free, depending on your device." },
    { question: "Can I sign up from anywhere in the world?", answer: "Yes, Healthx is accessible globally." },
    { question: "How do I pay for my subscription?", answer: "You can use credit/debit cards or other supported payment methods in your region." },
    { question: "I've signed up and paid - how do I start a call with a doctor?", answer: "Log in to your account and click 'Start Call' on your dashboard." },
    { question: "Who can see my medical records and consultation history?", answer: "Only you and the medical professionals you consult with have access to your data." },
    { question: "How do I delete my account?", answer: "Go to account settings and select 'Delete Account' or contact support." },
    { question: "My payment method isn't working. What should I do?", answer: "Please contact support for assistance or try a different payment method." },
  ];

  const leftColumn = faqs.slice(0, 3);
  const rightColumn = faqs.slice(3);

  return (
    <div className="flex flex-col mt-20">
      <div className="flex flex-row justify-between items-start mt-12 mx-12">
        <div>
          <h2 className="text-[#1F8B7B] text-4xl font-bold">FREQUENTLY <span className="text-[#E9501D]">ASKED QUESTION</span></h2>
        </div>
        <div className="flex flex-row items-center space-x-2 mr-2">
          <h2 className="text-[#E9501D1F] text-4xl font-bold">06</h2>
          <p className="text-gray-600 font-semibold leading-tight">
            FAQ's{" "}
            <span className="font-normal text-gray-600"><br /> We are committed to your health </span>
          </p>
        </div>
      </div>

      <div className="flex flex-row mt-16">
        <div className="w-1/2 pr-20 pl-12">
          {leftColumn.map((faq, index) => (
            <div
              key={index}
              className={`mb-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out
                ${activeIndex === index ? 'bg-gradient-to-r from-[#E9501D1F] to-[#1F8B7B1F] via-[#EBC6621F]' : 'bg-white'}
                border-2 border-[#E9501D1F] px-4 `}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-md font-normal text-[#253239]">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {activeIndex === index && (
                <p className="text-gray-600 mt-6">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="w-1/2 pl-20 pr-12">
          {rightColumn.map((faq, index) => (
            <div
              key={index + 3}
              className={`mb-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out
                ${activeIndex === index + 3 ? 'bg-gradient-to-r from-[#E9501D1F] to-[#1F8B7B1F] via-[#EBC6621F]' : 'bg-white'}
                border-2 border-[#E9501D1F] px-4 `}
              onClick={() => toggleFAQ(index + 3)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-md font-normal text-[#253239]">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 transform transition-transform ${
                    activeIndex === index + 3 ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {activeIndex === index + 3 && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
