import React from 'react';

export const metadata = {
    title: "Terms of Service - Get me a Chai",
};

const LegalLayout = ({ title, children }) => (
    <div className="bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-4">{title}</h1>
            <p className="text-center text-slate-400 mb-10">Last Updated: September 20, 2025</p>
            <div className="prose prose-invert prose-lg max-w-4xl mx-auto text-slate-300">
                {children}
            </div>
        </div>
    </div>
);

const TermsPage = () => {
    return (
        <LegalLayout title="Terms of Service">
            <p>
                Welcome to Get me a Chai! These terms and conditions outline the rules and regulations for the use of our website, located at getmeachai.com. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Get me a Chai if you do not agree to all of the terms and conditions stated on this page.
            </p>

            <h2>1. Accounts</h2>
            <p>
                When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>

            <h2>2. Content</h2>
            <p>
                Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.
            </p>

            <h2>3. Payments and Funding</h2>
            <p>
                Get me a Chai provides a platform for fans to support creators. We are not responsible for the promises, rewards, or content offered by creators. All payments are processed through third-party payment gateways (e.g., Razorpay). We do not store your credit card details.
            </p>

            <h2>4. Limitation Of Liability</h2>
            <p>
                In no event shall Get me a Chai, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
            <p className="mt-8 p-4 border border-blue-400/30 bg-blue-400/10 rounded-lg text-slate-300">
                <strong>Our Community Promise:</strong> By continuing, you agree to our Terms of Service. This helps us ensure a safe, fair, and transparent platform for all creators and their supporters.
            </p>
        </LegalLayout>
    );
};

export default TermsPage;
