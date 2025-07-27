import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import { 
  FiUpload, 
  FiFile, 
  FiCheck, 
  FiLoader, 
  FiArrowLeft 
} from 'react-icons/fi';

const UploadPage = () => {
  const navigate = useNavigate();
  const [uploadStatus, setUploadStatus] = useState('idle'); // idle, uploading, success
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setUploadedFile(file);
      setUploadStatus('uploading');
      
      // Simulate upload and analysis
      setTimeout(() => {
        setUploadStatus('success');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      }, 3000);
    }
  }, [navigate]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1,
    disabled: uploadStatus !== 'idle'
  });

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-800 mb-6 mx-auto transition-colors"
          >
            <FiArrowLeft />
            Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Upload Your Resume
          </h1>
          <p className="text-xl text-slate-600">
            We'll analyze your resume for ATS compatibility and find perfect job matches
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Illustration/Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">What We Analyze</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-slate-800">ATS Compatibility Score</p>
                    <p className="text-slate-600 text-sm">How well your resume passes through applicant tracking systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-slate-800">Missing Keywords</p>
                    <p className="text-slate-600 text-sm">Important skills and terms you should consider adding</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-slate-800">Job Recommendations</p>
                    <p className="text-slate-600 text-sm">Personalized job opportunities based on your profile</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
              <p className="text-sm text-slate-600 mb-2">Supported formats:</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-slate-700 shadow-sm">PDF</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-slate-700 shadow-sm">DOCX</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Upload Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div
              {...getRootProps()}
              className={`
                relative overflow-hidden cursor-pointer transition-all duration-300 rounded-3xl p-12
                ${isDragActive 
                  ? 'bg-blue-50 border-2 border-blue-400 border-solid scale-105' 
                  : 'bg-white/90 backdrop-blur-sm border-2 border-dashed border-slate-300 hover:border-blue-400 hover:bg-blue-50/50 shadow-xl hover:shadow-2xl'
                }
                ${uploadStatus !== 'idle' ? 'pointer-events-none' : ''}
              `}
            >
              <input {...getInputProps()} />
              
              <div className="text-center">
                {uploadStatus === 'idle' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                      <FiUpload className="text-white text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                        {isDragActive ? 'Drop your resume here' : 'Drag & drop your resume'}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        or click to browse files
                      </p>
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                        Choose File
                      </button>
                    </div>
                  </motion.div>
                )}

                {uploadStatus === 'uploading' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-6"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                      <FiLoader className="text-white text-3xl animate-spin" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                        Analyzing Your Resume...
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {uploadedFile?.name}
                      </p>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 3, ease: "easeInOut" }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {uploadStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-6"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                      <FiCheck className="text-white text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                        Analysis Complete!
                      </h3>
                      <p className="text-slate-600">
                        Taking you to your personalized dashboard...
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;