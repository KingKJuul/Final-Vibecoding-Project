import React, { useState } from 'react';

const faqs = [
    {
        question: "How does Butter AI connect to my data?",
        answer: "Butter AI features one-click integrations with popular tools like Salesforce, HubSpot, Stripe, Intercom, and Zendesk. For custom data sources, we offer a robust API and webhook support. The initial sync usually takes less than 30 minutes."
    },
    {
        question: "Is my customer data secure?",
        answer: "Absolutely. Security is our top priority. We use bank-grade encryption for data in transit and at rest. We are SOC 2 Type II compliant and never sell your data to third parties. Our AI models are trained on your data in an isolated environment."
    },
    {
        question: "How accurate are the churn predictions?",
        answer: "Our models typically achieve 90-95% accuracy after the first 4 weeks of learning your specific customer behaviors. The system gets smarter over time as it processes more of your historical and real-time data."
    },
    {
        question: "Can I try it before I buy?",
        answer: "Yes! We are currently opening spots for our Early Access program which includes a 30-day free trial. You can see your customer health scores and receive churn alerts completely free during this period."
    }
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-amber-600' : 'text-gray-900 group-hover:text-amber-600'}`}>
                    {question}
                </span>
                <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
            >
                <p className="text-gray-600 leading-relaxed pr-8">{answer}</p>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-gray-50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
                    <p className="text-gray-600 mt-4">Everything you need to know about getting started.</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;