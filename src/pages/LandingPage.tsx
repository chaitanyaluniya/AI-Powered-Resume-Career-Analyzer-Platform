import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FiFileText, 
  FiTarget, 
  FiTrendingUp, 
  FiUsers, 
  FiStar, 
  FiArrowRight 
} from 'react-icons/fi';

const LandingPage = () => {
  const navigate = useNavigate();

  const floatingIcons = [
    { Icon: FiFileText, delay: 0, x: 20, y: 30 },
    { Icon: FiTarget, delay: 0.5, x: 80, y: 60 },
    { Icon: FiTrendingUp, delay: 1, x: 15, y: 80 },
    { Icon: FiUsers, delay: 1.5, x: 75, y: 20 },
    { Icon: FiStar, delay: 2, x: 40, y: 70 }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Background Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-200/20 text-6xl pointer-events-none"
          style={{ left: `${x}%`, top: `${y}%` }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Build Your Career
              <br />
              <span className="text-slate-800">with Confidence</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Upload your resume, analyze ATS compatibility, and discover the perfect job opportunities tailored just for you.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => navigate('/upload')}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              Get Started
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-2 text-slate-600">
              <span className="text-sm">Free • No signup required</span>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <FiFileText className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">ATS Analysis</h3>
              <p className="text-slate-600">Get detailed insights on how ATS systems will read your resume</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <FiTarget className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Skill Matching</h3>
              <p className="text-slate-600">Identify missing keywords and skills for your target roles</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                <FiTrendingUp className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Job Recommendations</h3>
              <p className="text-slate-600">Discover perfectly matched opportunities based on your profile</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;