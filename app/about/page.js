import React from 'react';

export const metadata = {
  title: "About - Get me a Chai",
}

const AboutPage = () => {
  return (
    <div className="text-white container mx-auto px-4 sm:px-6 lg:px-8">

      <div className="flex justify-center flex-col items-center h-[50vh] gap-4 text-center">
        <div className="font-bold text-3xl sm:text-5xl flex gap-2 justify-center items-center">
          <h1>About Get me a Chai</h1>
          <span>
            <img className="w-10 sm:w-16" src="/chai.gif" alt="Chai animation" />
          </span>
        </div>
        <p className="max-w-2xl text-base sm:text-lg text-slate-300">
          We are a passionate team dedicated to empowering creators by providing a simple, effective, and fun way to receive support from their audience. We believe that every creator, big or small, deserves the chance to turn their passion into a profession.
        </p>
      </div>

      <div className="bg-white h-1 opacity-10 my-12"></div>

      <div className="py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-10 justify-around text-center">

          <div className="item space-y-3 flex flex-col justify-center items-center max-w-xs mx-auto">
            <img className="bg-slate-800 rounded-full p-3" width={90} src="/man.gif" alt="Create a page icon" />
            <h3 className="font-bold text-xl">1. Create Your Page</h3>
            <p className="text-slate-400">Sign up in seconds and create your personalized creator page. Add your story, goals, and let your personality shine.</p>
          </div>

          <div className="item space-y-3 flex flex-col justify-center items-center max-w-xs mx-auto">
            <img className="bg-slate-800 rounded-full p-3" width={90} src="/group.gif" alt="Share with fans icon" />
            <h3 className="font-bold text-xl">2. Share with Your Fans</h3>
            <p className="text-slate-400">Share your page link across your social media. Your fans can now easily support you with just a few clicks.</p>
          </div>

          <div className="item space-y-3 flex flex-col justify-center items-center max-w-xs mx-auto">
            <img className="bg-slate-800 rounded-full p-3" width={90} src="/coin.gif" alt="Receive donations icon" />
            <h3 className="font-bold text-xl">3. Receive Support</h3>
            <p className="text-slate-400">Receive donations directly to your account. Use the funds to create more amazing content for your audience.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10 my-12"></div>

      <div className="py-12 sm:py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg text-slate-300">
          Our mission is to bridge the gap between creators and their communities. In a world where content is abundant, we want to ensure that hard work and talent are recognized and rewarded. 'Get me a Chai' is more than just a platform; it's a movement to foster a culture of support and appreciation for the creators who inspire, entertain, and educate us every day.
        </p>
      </div>

    </div>
  );
}

export default AboutPage;