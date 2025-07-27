import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import { 
  FiArrowLeft, 
  FiDownload, 
  FiShare2, 
  FiTrendingUp,
  FiAlertCircle,
  FiCheckCircle,
  FiExternalLink,
  FiStar
} from 'react-icons/fi';

const Dashboard = () => {
  const navigate = useNavigate();

  // Dummy data
  const atsScore = 72;
  const scoreData = [
    { name: 'Compatible', value: atsScore, color: '#10B981' },
    { name: 'Needs Improvement', value: 100 - atsScore, color: '#EF4444' }
  ];

  const skillsData = [
    { skill: 'React', frequency: 85 },
    { skill: 'JavaScript', frequency: 78 },
    { skill: 'Python', frequency: 65 },
    { skill: 'AWS', frequency: 45 },
    { skill: 'Node.js', frequency: 40 }
  ];

  const missingSkills = [
    { skill: 'TypeScript', priority: 'High', description: 'Add to your technical skills section' },
    { skill: 'Docker', priority: 'Medium', description: 'Mention in your project experience' },
    { skill: 'GraphQL', priority: 'Medium', description: 'Include in relevant projects' },
    { skill: 'Kubernetes', priority: 'Low', description: 'Consider for cloud-based roles' },
    { skill: 'MongoDB', priority: 'Low', description: 'Add to database experience' }
  ];

  const jobRecommendations = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Google',
      logo: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      match: 85,
      salary: '$120k - $160k',
      location: 'San Francisco, CA',
      skillsMatched: ['React', 'JavaScript', 'CSS'],
      skillsMissing: ['TypeScript', 'Next.js'],
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      company: 'Amazon',
      logo: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      match: 78,
      salary: '$110k - $145k',
      location: 'Seattle, WA',
      skillsMatched: ['Python', 'AWS', 'React'],
      skillsMissing: ['Docker', 'GraphQL'],
      posted: '1 day ago'
    },
    {
      id: 3,
      title: 'React Developer',
      company: 'Microsoft',
      logo: 'https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      match: 82,
      salary: '$95k - $130k',
      location: 'Remote',
      skillsMatched: ['React', 'JavaScript', 'Node.js'],
      skillsMissing: ['Azure', 'TypeScript'],
      posted: '3 days ago'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <button
              onClick={() => navigate('/upload')}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-800 mb-4 transition-colors"
            >
              <FiArrowLeft />
              Upload New Resume
            </button>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
              Your Career Dashboard
            </h1>
            <p className="text-slate-600">Resume_John_Doe.pdf • Analyzed just now</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-slate-700">
              <FiDownload size={18} />
              Export Report
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <FiShare2 size={18} />
              Share Results
            </button>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ATS Score Section */}
          <motion.div
            className="lg:col-span-1"
            variants={itemVariants}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">ATS Compatibility</h2>
                <p className="text-slate-600">Your resume score</p>
              </div>
              
              <div className="relative">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={scoreData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {scoreData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-slate-800">{atsScore}%</div>
                    <div className="text-sm text-slate-600">ATS Ready</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                <div className="flex items-center gap-2 mb-2">
                  <FiCheckCircle className="text-green-600" />
                  <span className="font-semibold text-green-800">Good Score!</span>
                </div>
                <p className="text-sm text-green-700">
                  Your resume is likely to pass through most ATS systems. Consider the improvements below to reach 85%+.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills Analysis */}
          <motion.div
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Skills Analysis</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Current Skills Frequency</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={skillsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="skill" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                    <Bar dataKey="frequency" fill="url(#colorGradient)" radius={[4, 4, 0, 0]} />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.9}/>
                        <stop offset="95%" stopColor="#1D4ED8" stopOpacity={0.7}/>
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Missing Skills */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FiAlertCircle className="text-orange-500" />
                  <h3 className="text-lg font-semibold text-slate-800">Missing Keywords ({missingSkills.length} found)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {missingSkills.map((skill, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-slate-800">{skill.skill}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          skill.priority === 'High' ? 'bg-red-100 text-red-700' :
                          skill.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {skill.priority}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Job Recommendations */}
        <motion.div
          className="mt-8"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <FiTrendingUp className="text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-800">Perfect Job Matches</h2>
              </div>
              <span className="text-sm text-slate-600">{jobRecommendations.length} recommendations</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobRecommendations.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Company Logo */}
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={job.logo} 
                      alt={job.company}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100"
                    />
                    <div>
                      <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-sm text-slate-600">{job.company}</p>
                    </div>
                  </div>

                  {/* Match Score */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">Match Score</span>
                      <span className="text-lg font-bold text-green-600">{job.match}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${job.match}%` }}
                      />
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-600">💰 {job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-600">📍 {job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-600">⏰ {job.posted}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <p className="text-xs font-medium text-slate-700 mb-2">Matched Skills:</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {job.skillsMatched.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs font-medium text-slate-700 mb-2">Skills to Add:</p>
                    <div className="flex flex-wrap gap-1">
                      {job.skillsMissing.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 group-hover:from-blue-700 group-hover:to-purple-700">
                    View Details
                    <FiExternalLink size={16} />
                  </button>

                  {/* Featured Badge */}
                  {index === 0 && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-2 rounded-full shadow-lg">
                      <FiStar size={16} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Improve Resume CTA */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Ready to Boost Your Score?</h3>
            <p className="text-blue-100 mb-6">
              Get personalized recommendations to improve your ATS compatibility
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Improve My Resume
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;