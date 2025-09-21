import React from 'react';

export const metadata = {
    title: "Privacy Policy - Get me a Chai",
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

const PrivacyPage = () => {
    return (
        <LegalLayout title="Privacy Policy">
            <p>
                Your privacy is important to us. It is Get me a Chai's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.
            </p>

            <h2>1. Information We Collect</h2>
            <div>
                We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. The types of information we collect include:
                <ul>
                    <li><strong>Personal Identification Information:</strong> Name, email address, profile picture.</li>
                    <li><strong>Payment Information:</strong> We do not store your payment information. It is handled securely by our payment processor.</li>
                    <li><strong>Usage Data:</strong> Information on how you use the site, such as pages visited and links clicked.</li>
                </ul>
            </div>

            <h2>2. How We Use Your Information</h2>
            <div>
                We use the information we collect in various ways, including to:
                <ul>
                    <li>Provide, operate, and maintain our website</li>
                    <li>Improve, personalize, and expand our website</li>
                    <li>Understand and analyze how you use our website</li>
                    <li>Process your transactions and prevent fraud</li>
                    <li>Communicate with you, either directly or through one of our partners, for customer service, to provide you with updates and other information relating to the website.</li>
                </ul>
            </div>

            <h2>3. Data Security</h2>
            <p>
                We protect your personal information within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>

            <p className="mt-8 p-4 border border-blue-400/30 bg-blue-400/10 rounded-lg text-slate-300">
                <strong>Your Data, Your Trust:</strong> We are committed to protecting your privacy. Our Privacy Policy details how we handle your information securely and with respect. By continuing, you acknowledge you understand our approach.
            </p>

        </LegalLayout>
    );
};

export default PrivacyPage;