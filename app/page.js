"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { FiStar, FiUsers, FiZap, FiEdit, FiShare2, FiHeart } from 'react-icons/fi';

export default function Home() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const cardHover = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px -5px rgba(99, 102, 241, 0.3)",
      transition: { duration: 0.3 }
    }
  };


  return (
    <>
      <motion.div
        className="flex justify-center flex-col items-center text-white min-h-screen gap-4 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="font-bold text-4xl md:text-6xl flex gap-2 justify-center items-center"
          variants={itemVariants}
        >
          <h1>Buy me a Chai</h1>
          <motion.span
            animate={{ rotate: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <img className="w-16 md:w-20" src="/chai.gif" alt="Chai GIF" />
          </motion.span>
        </motion.div>

        <motion.p className="text-base md:text-xl max-w-2xl text-slate-300" variants={itemVariants}>
          A crowdfunding platform for creators. Get funded by your fans and followers in a simple, direct, and fun way. Start now!
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 mt-4" variants={itemVariants}>
          <Link href={"/login"}>
            <motion.button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-lg px-8 py-3 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Here
            </motion.button>
          </Link>
          <Link href={"/about"}>
            <motion.button
              type="button"
              className="bg-slate-800 border border-slate-700 hover:bg-slate-700 font-medium rounded-lg text-lg px-8 py-3 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Fuel Your Creativity, Directly</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div className="bg-slate-800/50 border border-slate-800 rounded-xl p-8 flex flex-col items-center text-center" variants={{ ...itemVariants, ...cardHover }}>
            <div className="bg-purple-900/50 p-4 rounded-full mb-4">
              <FiZap size={32} className="text-purple-300" />
            </div>
            <h3 className="font-bold text-xl mb-2">Accept Support Instantly</h3>
            <p className="text-slate-400">Your fans can support your work with just a few clicks. No hassle, no monthly fees. Just direct support.</p>
          </motion.div>
          <motion.div className="bg-slate-800/50 border border-slate-800 rounded-xl p-8 flex flex-col items-center text-center" variants={{ ...itemVariants, ...cardHover }}>
            <div className="bg-blue-900/50 p-4 rounded-full mb-4">
              <FiUsers size={32} className="text-blue-300" />
            </div>
            <h3 className="font-bold text-xl mb-2">Build Your Community</h3>
            <p className="text-slate-400">Engage directly with your supporters through messages and build a loyal community around your creative work.</p>
          </motion.div>
          <motion.div className="bg-slate-800/50 border border-slate-800 rounded-xl p-8 flex flex-col items-center text-center" variants={{ ...itemVariants, ...cardHover }}>
            <div className="bg-green-900/50 p-4 rounded-full mb-4">
              <FiStar size={32} className="text-green-300" />
            </div>
            <h3 className="font-bold text-xl mb-2">Showcase Your Work</h3>
            <p className="text-slate-400">Create a beautiful page that you can customize and share, making it the perfect hub for your fanbase.</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="text-white container mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get Started in 3 Simple Steps</h2>
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div className="flex flex-col items-center text-center max-w-xs" variants={itemVariants}>
            <div className="relative mb-4">
              <div className="bg-slate-800 border-2 border-purple-500 rounded-full w-24 h-24 flex items-center justify-center">
                <FiEdit size={40} className="text-purple-400" />
              </div>
              <span className="absolute -top-2 -right-2 bg-purple-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">1</span>
            </div>
            <h3 className="font-bold text-xl mb-2">Create Your Page</h3>
            <p className="text-slate-400">Sign up for free and customize your personal page in just a few minutes.</p>
          </motion.div>

          <motion.div className="flex flex-col items-center text-center max-w-xs" variants={itemVariants}>
            <div className="relative mb-4">
              <div className="bg-slate-800 border-2 border-blue-500 rounded-full w-24 h-24 flex items-center justify-center">
                <FiShare2 size={40} className="text-blue-400" />
              </div>
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">2</span>
            </div>
            <h3 className="font-bold text-xl mb-2">Share Your Link</h3>
            <p className="text-slate-400">Share your unique link across your social media, website, or with your friends.</p>
          </motion.div>

          <motion.div className="flex flex-col items-center text-center max-w-xs" variants={itemVariants}>
            <div className="relative mb-4">
              <div className="bg-slate-800 border-2 border-green-500 rounded-full w-24 h-24 flex items-center justify-center">
                <FiHeart size={40} className="text-green-400" />
              </div>
              <span className="absolute -top-2 -right-2 bg-green-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">3</span>
            </div>
            <h3 className="font-bold text-xl mb-2">Receive Support</h3>
            <p className="text-slate-400">Get donations directly from your fans. We charge 0% platform fees*.</p>
          </motion.div>
        </motion.div>
        <p className="text-center text-slate-500 text-sm mt-8">*Standard payment processor fees still apply.</p>
      </div>

      <div className="text-white container mx-auto py-20 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Learn More About Us</h2>
        <motion.div
          className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl shadow-purple-900/20 border border-slate-800"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <section className="about-section text-center py-12 bg-[#0e172b] text-gray-200">
            <h2 className="text-4xl font-semibold mb-6">Learn More About Us</h2>

            <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
              BitLinks is a powerful and intuitive URL shortener that helps you manage and track your links with ease.
              Built with <span className="text-purple-400 font-medium">Next.js</span> and <span className="text-purple-400 font-medium">MongoDB</span>,
              it offers real-time analytics, user authentication, and a beautiful, responsive interface.
            </p>
          </section>
        </motion.div>
      </div>
    </>
  );
}
