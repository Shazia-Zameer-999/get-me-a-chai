"use client"
import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';



const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none"
            >
                <h3 className="text-lg font-medium text-slate-100">{question}</h3>
                <span className="text-blue-400">
                    {isOpen ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                </span>
            </button>
            <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pb-5 px-6 text-slate-400">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FaqPage = () => {

    const faqs = [
        {
            question: "What is 'Get me a Chai'?",
            answer: "Get me a Chai is a crowdfunding platform that allows fans and followers to support their favorite creators through small, one-time donations, similar to buying them a chai as a token of appreciation."
        },
        {
            question: "How do I receive payments as a creator?",
            answer: "You can connect your Razorpay account to your 'Get me a Chai' profile. All donations from your supporters are processed securely through Razorpay and transferred directly to your linked account."
        },
        {
            question: "Is it free to use for creators?",
            answer: "Yes! Creating a page on 'Get me a Chai' is completely free. We believe in supporting creators without adding financial barriers. Standard payment processor fees from Razorpay may apply to the donations you receive."
        },
        {
            question: "Can I support a creator anonymously?",
            answer: "While you need to provide a name for the supporter leaderboard, you can choose to use a pseudonym or a general name if you wish to remain relatively anonymous. The creator will see the name you provide."
        },
        {
            question: "What percentage does 'Get me a Chai' take?",
            answer: "We take a 0% platform fee. Our goal is to ensure that the maximum amount of support goes directly to the creators. You only have to cover the standard transaction fees charged by our payment partner, Razorpay."
        },
        {
            question: "How can I contact support?",
            answer: "If you have any questions or need assistance, please feel free to reach out to us through our contact page or email us at datendiva.mailer@gmail.com."
        }
    ];

    return (
        <div className="text-white container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center flex-col items-center h-[40vh] gap-4 text-center">
                <h1 className="font-bold text-4xl sm:text-5xl">Frequently Asked Questions</h1>
                <p className="max-w-2xl text-base sm:text-lg text-slate-300">
                    Have a question? We're here to help. Find answers to common questions about our platform below.
                </p>
            </div>

            <div className="max-w-3xl mx-auto my-12">
                <div className="bg-gray-900 rounded-lg shadow-lg">
                    {faqs.map((faq, index) => (
                        <FaqItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FaqPage