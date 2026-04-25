import React, { useState, useEffect } from 'react';
import { 
  Edit2, BarChart2, PieChart, Map, Clock, Users, X, 
  ChevronLeft, ChevronRight, Layout, ExternalLink, 
  ShoppingBag, UserCircle, Car, Database, Layers, 
  Table as TableIcon, FileSpreadsheet, Monitor, Landmark, Play,
  Menu, Github, Search, Plus, CircleDot, GitPullRequest, BookOpen, Inbox
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ContributionGraph from './ContributionGraph';
import { useSnackbar } from '../context/SnackbarContext';

const MainContent = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [viewMode, setViewMode] = useState('gallery'); // 'gallery' or 'dataset'
  const showSnackbar = useSnackbar();

  const modules = [
    {
      id: 'blinkit',
      title: 'Blinkit Analysis',
      icon: <ShoppingBag size={20} />,
      desc: 'Optimizing grocery delivery operations by analyzing inventory churn, delivery lead times, and SKU popularity.',
      images: ['/blinkit/image1.png', '/blinkit/image2.png', '/blinkit/image3.png', '/blinkit/image4.png'],
      link: 'https://docs.google.com/spreadsheets/d/1Io0pxo0TJqIxs12O3CcyU1Bg4KNpm7Iy9BbnwdQz6_Q/edit?gid=0#gid=0',
      themeColor: '#ffcc00',
      glowColor: 'rgba(255, 204, 0, 0.4)',
      bgColor: 'rgba(255, 204, 0, 0.03)',
      logo: '🛍️',
      stack: ['Spreadsheet'],
      sampleData: {
        columns: ['Item Fat Content', 'Item Identifier', 'Item Type', 'Outlet Establishment Year', 'Outlet Identifier', 'Outlet Location Type', 'Outlet Size', 'Outlet Type', 'Item Visibility', 'Item Weight', 'Sales', 'Rating'],
        rows: [
          ['Regular', 'FDX32', 'Fruits and Vegetables', '2012', 'OUT049', 'Tier 1', 'Medium', 'Supermarket Type1', '0.1000135', '15.1', '145.479', '5'],
          ['Low Fat', 'NCB42', 'Health and Hygiene', '2022', 'OUT018', 'Tier 3', 'Medium', 'Supermarket Type2', '0.008596051', '11.8', '115.349', '5'],
          ['Regular', 'FDR28', 'Frozen Foods', '2016', 'OUT046', 'Tier 1', 'Small', 'Supermarket Type1', '0.025896485', '13.85', '165.021', '5'],
          ['Regular', 'FDL50', 'Canned', '2014', 'OUT013', 'Tier 3', 'High', 'Supermarket Type1', '0.042277867', '12.15', '126.505', '5'],
          ['Low Fat', 'DRI25', 'Soft Drinks', '2015', 'OUT045', 'Tier 2', 'Small', 'Supermarket Type1', '0.033970195', '19.6', '55.1614', '5']
        ]
      }
    },
    {
      id: 'uber-datasets',
      title: 'Uber Ride Analysis',
      icon: <Car size={20} />,
      desc: 'Exploring urban mobility trends, peak demand hours, and geographical trip distribution across metropolitan areas.',
      images: ['/uber/image1.png', '/uber/image2.png'],
      link: 'pending',
      themeColor: '#ffffff',
      glowColor: 'rgba(255, 255, 255, 0.2)',
      bgColor: 'rgba(255, 255, 255, 0.03)',
      logo: '🚗',
      stack: ['Tableau'],
      sampleData: {
        columns: ['trip_id', 'driver_id', 'rider_id', 'city', 'pickup_lat', 'pickup_lng', 'drop_lat', 'drop_lng', 'distance_km', 'fare_amount', 'status', 'payment_method', 'pickup_time', 'drop_time'],
        rows: [
          ['1', '8270', '10683', 'San Francisco', '37.17093', '-77.5864', '37.17365', '-77.6199', '2.97', '10.71', 'Completed', 'Wallet', '2023-01-01 00:00:00', '2023-01-01 00:08:54'],
          ['2', '1860', '44743', 'Boston', '38.89812', '-108.582', '38.93746', '-108.558', '8.43', '22.41', 'Completed', 'UPI', '2023-01-01 00:01:00', '2023-01-01 00:26:17'],
          ['3', '6390', '75839', 'San Francisco', '38.81457', '-89.9426', '38.82170', '-89.8964', '5.46', '12.91', 'Completed', 'Cash', '2023-01-01 00:02:00', '2023-01-01 00:18:22'],
          ['4', '6191', '22189', 'New York', '37.29590', '-75.3288', '37.30137', '-75.3174', '6.61', '15.7', 'Completed', 'Wallet', '2023-01-01 00:03:00', '2023-01-01 00:22:49'],
          ['5', '6734', '61104', 'Seattle', '38.97239', '-121.482', '38.99208', '-121.467', '10.5', '19.15', 'Completed', 'Wallet', '2023-01-01 00:04:00', '2023-01-01 00:35:30']
        ]
      }
    },
    {
      id: 'bank-loan',
      title: 'Bank Loan Analysis',
      icon: <Landmark size={20} />,
      desc: 'Predictive modeling and risk assessment for personal loans, analyzing credit scores, income levels, and delinquency history.',
      images: ['/bank_loan/image1.png'],
      link: 'pending',
      themeColor: '#238636',
      glowColor: 'rgba(35, 134, 54, 0.3)',
      bgColor: 'rgba(35, 134, 54, 0.03)',
      logo: '🏦',
      stack: ['Python', 'Pandas'],
      sampleData: {
        columns: ['Loan ID', 'Customer ID', 'Current Loan Amount', 'Term', 'Credit Score', 'Annual Income', 'Years in current job', 'Home Ownership', 'Purpose', 'Monthly Debt', 'Years of Credit History', 'Number of Open Accounts'],
        rows: [
          ['f738779f...', 'ded0b3c3...', '611314', 'Short Term', '747', '2074116', '10+ years', 'Home Mortgage', 'Debt Consolidation', '42000.83', '21.8', '9'],
          ['6dcc0947...', '1630e6e3...', '266662', 'Short Term', '734', '1919190', '10+ years', 'Home Mortgage', 'Debt Consolidation', '36624.4', '19.4', '11'],
          ['f7744d01...', '2c60938b...', '153494', 'Short Term', '709', '871112', '2 years', 'Rent', 'Debt Consolidation', '8391.73', '12.5', '10'],
          ['83721ffb...', '12116614...', '176242', 'Short Term', '727', '780083', '10+ years', 'Rent', 'Debt Consolidation', '16771.87', '16.5', '16'],
          ['08f3789f...', '39888105...', '321992', 'Short Term', '744', '1761148', '10+ years', 'Home Mortgage', 'Debt Consolidation', '39478.77', '26', '14']
        ]
      }
    },
    {
      id: 'netflix-churn',
      title: 'Netflix Churn Prediction',
      icon: <Play size={20} />,
      desc: 'Analyzing user behavior patterns, watch hours, and subscription types to predict and mitigate customer attrition.',
      images: ['/netflix/image1.png'],
      link: 'pending',
      themeColor: '#e50914',
      glowColor: 'rgba(229, 9, 20, 0.3)',
      bgColor: 'rgba(229, 9, 20, 0.03)',
      logo: '🍿',
      stack: ['Looker Studio'],
      sampleData: {
        columns: ['customer_id', 'age', 'gender', 'subscription_type', 'watch_hours', 'last_login_days', 'region', 'device', 'monthly_fee', 'churned', 'payment_method', 'favorite_genre'],
        rows: [
          ['a9b75100...', '51', 'Other', 'Basic', '14.73', '29', 'Africa', 'TV', '8.99', '1', 'Gift Card', 'Action'],
          ['49a5dfd9...', '47', 'Other', 'Standard', '0.7', '19', 'Europe', 'Mobile', '13.99', '1', 'Gift Card', 'Sci-Fi'],
          ['4d71f6ce...', '27', 'Female', 'Standard', '16.32', '10', 'Asia', 'TV', '13.99', '0', 'Crypto', 'Drama'],
          ['d3c72c38...', '53', 'Other', 'Premium', '4.51', '12', 'Oceania', 'TV', '17.99', '1', 'Crypto', 'Horror'],
          ['4e265c34...', '56', 'Other', 'Standard', '1.89', '13', 'Africa', 'Mobile', '13.99', '1', 'Crypto', 'Action']
        ]
      }
    }
  ];

  useEffect(() => {
    if (activeModule) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeModule]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.25 }
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.25 }
      }
    })
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setImageIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      const length = activeModule.images.length;
      if (nextIndex < 0) return length - 1;
      if (nextIndex >= length) return 0;
      return nextIndex;
    });
  };

  const handleLinkClick = (e, module) => {
    if (module.link === 'pending') {
      e.preventDefault();
      const msg = module.id === 'uber-datasets' ? "The Uber Analysis link is on the way! 🚗💨" : 
                  module.id === 'bank-loan' ? "Bank Loan analysis dashboard is being finalized! 🏦📈" :
                  "Netflix Churn Prediction link is on the way! 🍿📉";
      showSnackbar(msg);
    }
  };

  return (
    <div className="pt-6 space-y-6 relative">
      {/* Main Analysis Section */}
      <div className="border border-[#30363d] rounded-md overflow-hidden bg-[#0d1117]">
        {/* Real GitHub Header Recreation */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#30363d] bg-[#010409]">
          <div className="flex items-center space-x-3">
            <button className="p-1 hover:bg-[#21262d] rounded-md transition-colors text-[#7d8590]">
              <Menu size={20} />
            </button>
            <Github size={24} className="text-white" />
            <div className="flex items-center text-sm font-semibold whitespace-nowrap">
              <span className="text-[#7d8590] hover:underline cursor-pointer">Aman-kumar-git12</span>
              <span className="text-[#7d8590] mx-2">/</span>
              <span className="text-[#e6edf3] hover:underline cursor-pointer">Data_Analysis-1</span>
              <span className="ml-2 px-2 py-0.5 border border-[#30363d] rounded-full text-[12px] text-[#7d8590] font-medium">Public</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7d8590]">
                <Search size={14} />
              </div>
              <input 
                type="text" 
                placeholder="Type / to search" 
                readOnly
                className="bg-[#0d1117] border border-[#30363d] rounded-md pl-9 pr-2 py-1.5 text-xs w-64 text-[#7d8590] focus:outline-none focus:border-[#1f6feb] transition-all cursor-pointer"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 border border-[#30363d] rounded px-1.5 py-0.5 text-[10px] text-[#7d8590]">
                /
              </div>
            </div>

            <div className="flex items-center space-x-1 border-l border-[#30363d] pl-3">
              <button className="p-2 hover:bg-[#21262d] rounded-md transition-colors text-[#7d8590]">
                <Plus size={16} />
              </button>
              <button className="p-2 hover:bg-[#21262d] rounded-md transition-colors text-[#7d8590]">
                <CircleDot size={16} />
              </button>
              <button className="p-2 hover:bg-[#21262d] rounded-md transition-colors text-[#7d8590]">
                <GitPullRequest size={16} />
              </button>
              <button className="p-2 hover:bg-[#21262d] rounded-md transition-colors text-[#7d8590]">
                <BookOpen size={16} />
              </button>
              <button className="p-2 hover:bg-[#21262d] rounded-md transition-colors text-[#7d8590]">
                <Inbox size={16} />
              </button>
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#7ee787] to-[#aff5b4] ml-2 cursor-pointer border border-white/10" title="User Profile"></div>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="flex items-center space-x-3">
            <h1 className="text-3xl font-semibold flex items-center gap-3 text-white">
              <span className="animate-pulse">📊</span> Data Visualisation Showcase
            </h1>
            <div className="flex items-center space-x-1 mt-1">
              <div className="bg-[#238636] text-white flex items-center px-2 py-0.5 rounded text-[10px] font-bold gap-1">
                Portfolio Active
              </div>
            </div>
          </div>

          <p className="text-[#c9d1d9] text-[16px] leading-relaxed max-w-3xl">
            Showcasing data-driven analytical projects built to uncover patterns, optimize decisions, and transform raw information into meaningful visual insights.
          </p>

          <div className="pt-8 border-t border-[#30363d] mt-8">
            <h2 className="text-2xl font-semibold flex items-center gap-3 mb-6 text-white">
              <BarChart2 size={22} className="text-[#8b949e]" /> Analysis Modules
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modules.map((module) => (
                <motion.div
                  key={module.id}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    borderColor: module.themeColor,
                    boxShadow: `0 20px 40px -20px ${module.glowColor}`
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { setActiveModule(module); setImageIndex(0); setDirection(1); setViewMode('gallery'); }}
                  className="border border-[#30363d] rounded-2xl p-7 cursor-pointer transition-all group relative overflow-hidden flex flex-col justify-between h-full"
                  style={{ backgroundColor: module.bgColor }}
                >
                  {/* Branded Header Accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-2"
                    style={{ backgroundColor: module.themeColor }}
                  />

                  {/* Floating Branded Watermark */}
                  <div
                    className="absolute -bottom-4 -right-4 text-7xl opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-500 transform group-hover:-rotate-12 group-hover:scale-110 pointer-events-none"
                    style={{ color: module.themeColor }}
                  >
                    {module.logo}
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <div className="flex items-center space-x-4">
                        <div
                          className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110 shadow-lg"
                          style={{ backgroundColor: `${module.themeColor}20`, color: module.themeColor }}
                        >
                          {module.icon}
                        </div>
                        <span className="text-white font-bold text-xl group-hover:text-white transition-colors">{module.title}</span>
                      </div>
                    </div>

                    <p className="text-[15px] text-[#8b949e] leading-relaxed relative z-10 group-hover:text-[#c9d1d9] transition-colors mb-4">{module.desc}</p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 relative z-10 mb-6">
                      {module.stack.map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-[#161b22] border border-[#30363d] text-[10px] font-mono text-[#8b949e] group-hover:border-opacity-50 group-hover:text-[#c9d1d9]"
                          style={{ borderLeftColor: module.themeColor, borderLeftWidth: '2px' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between relative z-10">
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-5 h-5 rounded-full border-2 border-[#161b22] bg-[#30363d] flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full opacity-50" style={{ backgroundColor: module.themeColor }}></div>
                          </div>
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold text-[#8b949e] group-hover:text-white transition-colors">
                        Interactive Visuals
                      </span>
                    </div>
                    <motion.div
                      className="text-xs font-black uppercase tracking-widest flex items-center gap-2"
                      style={{ color: module.themeColor }}
                    >
                      Analyze <ExternalLink size={14} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ContributionGraph />

      {/* Pop-out Modal */}
      <AnimatePresence>
        {activeModule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-3xl p-4 md:p-12"
            onClick={() => setActiveModule(null)}
          >
            {/* Modal Navigation & Mode Switch - Liquid Pill Transition */}
            <div className="absolute top-4 left-40 flex items-center space-x-1 z-[1001] bg-[#161b22]/50 p-1 rounded-full border border-white/5 backdrop-blur-md shadow-2xl overflow-hidden">
              <button
                onClick={(e) => { e.stopPropagation(); setViewMode('gallery'); }}
                className="px-6 py-2 rounded-full text-xs font-black uppercase tracking-tighter transition-all flex items-center gap-2 relative z-10"
                style={{ 
                  color: viewMode === 'gallery' ? '#000000' : 'rgba(255,255,255,0.4)'
                }}
              >
                {viewMode === 'gallery' && (
                  <motion.div 
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full shadow-lg"
                    style={{ backgroundColor: activeModule.themeColor }}
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative z-20 flex items-center gap-2">
                  <Monitor size={14} /> View Gallery
                </span>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setViewMode('dataset'); }}
                className="px-6 py-2 rounded-full text-xs font-black uppercase tracking-tighter transition-all flex items-center gap-2 relative z-10"
                style={{ 
                  color: viewMode === 'dataset' ? '#000000' : 'rgba(255,255,255,0.4)'
                }}
              >
                {viewMode === 'dataset' && (
                  <motion.div 
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full shadow-lg"
                    style={{ backgroundColor: activeModule.themeColor }}
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative z-20 flex items-center gap-2">
                  <TableIcon size={14} /> Sample Dataset
                </span>
              </button>
            </div>

            {/* Navigation Arrows for Gallery */}
            {viewMode === 'gallery' && activeModule.images.length > 1 && (
              <>
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 p-3 bg-white/5 rounded-full text-white/70 hover:text-white transition-all z-[1001]"
                  onClick={(e) => { e.stopPropagation(); paginate(-1); }}
                >
                  <ChevronLeft size={40} />
                </motion.button>
                <motion.button
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 p-3 bg-white/5 rounded-full text-white/70 hover:text-white transition-all z-[1001]"
                  onClick={(e) => { e.stopPropagation(); paginate(1); }}
                >
                  <ChevronRight size={40} />
                </motion.button>
              </>
            )}

            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[1001]"
              onClick={(e) => { e.stopPropagation(); setActiveModule(null); }}
            >
              <X size={40} strokeWidth={1} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl border border-[#30363d] bg-[#0d1117] shadow-2xl">
                <AnimatePresence mode="wait">
                  {viewMode === 'gallery' ? (
                    <motion.img
                      key={imageIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      src={activeModule.images[imageIndex]}
                      alt={`${activeModule.title} ${imageIndex + 1}`}
                      className="absolute max-w-full max-h-full object-contain pointer-events-none"
                    />
                  ) : (
                    <motion.div
                      key="dataset"
                      initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="w-full h-full p-8 overflow-auto custom-scrollbar"
                    >
                      <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                          <Database style={{ color: activeModule.themeColor }} /> {activeModule.title} Raw Data Preview
                        </h3>
                        <div className="flex gap-2">
                          {activeModule.stack.map(s => (
                            <span key={s} className="text-[10px] px-2 py-1 bg-white/5 rounded border border-white/10 text-white/50 uppercase font-bold tracking-widest">{s}</span>
                          ))}
                        </div>
                      </div>

                      <div className="overflow-x-auto rounded-xl border border-[#30363d] custom-scrollbar">
                        <table className="w-full text-left border-collapse min-w-[1200px]">
                          <thead>
                            <tr className="bg-[#161b22]">
                              {activeModule.sampleData.columns.map((col) => (
                                <th key={col} className="px-6 py-4 text-[11px] font-black uppercase tracking-wider text-[#8b949e] border-b border-[#30363d] whitespace-nowrap">
                                  {col}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {activeModule.sampleData.rows.map((row, idx) => (
                              <tr key={idx} className="hover:bg-white/5 transition-colors border-b border-[#30363d]/50">
                                {row.map((cell, cidx) => (
                                  <td key={cidx} className="px-6 py-4 text-sm font-mono text-[#c9d1d9] whitespace-nowrap">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-lg bg-black/50">
                            <FileSpreadsheet size={24} style={{ color: activeModule.themeColor }} />
                          </div>
                          <div>
                            <p className="text-white font-bold">Full Dataset Available</p>
                            <p className="text-[#8b949e] text-xs">Total records: {activeModule.id === 'bank-loan' ? '10,000+' : activeModule.id === 'netflix-churn' ? '5,000+' : activeModule.id === 'uber-datasets' ? '50,000+' : '8,500+'} entries</p>
                          </div>
                        </div>
                        <div className="text-xs font-mono text-white/20 italic">
                          Showing first 5 rows (Scroll right for all columns) →
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Controls */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="mt-8 flex flex-col items-center space-y-4 w-full"
              >
                {viewMode === 'gallery' && (
                  <div className="flex space-x-3 mb-2">
                    {activeModule.images.map((_, i) => (
                      <motion.div
                        key={i}
                        onClick={() => { setDirection(i > imageIndex ? 1 : -1); setImageIndex(i); }}
                        whileHover={{ scale: 1.3 }}
                        className="h-2 rounded-full transition-all cursor-pointer"
                        style={{ 
                          width: i === imageIndex ? '40px' : '8px',
                          backgroundColor: i === imageIndex ? activeModule.themeColor : 'rgba(255,255,255,0.2)'
                        }}
                      />
                    ))}
                  </div>
                )}

                <div className="flex items-center space-x-4">
                  <div className="bg-[#161b22]/90 px-8 py-2.5 rounded-full border border-[#30363d] shadow-2xl backdrop-blur-xl">
                    <span className="text-[#c9d1d9] text-base font-semibold tracking-wide flex items-center gap-4">
                      <span style={{ color: activeModule.themeColor }}>{activeModule.title}</span>
                      <span className="text-[#30363d]">|</span>
                      <span className="font-mono">{viewMode === 'gallery' ? `${imageIndex + 1} / ${activeModule.images.length}` : 'DATASET PREVIEW'}</span>
                    </span>
                  </div>

                  <motion.a
                    href={activeModule.link === 'pending' ? '#' : activeModule.link}
                    target={activeModule.link === 'pending' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => handleLinkClick(e, activeModule)}
                    className="px-7 py-2.5 rounded-full font-black text-xs uppercase tracking-tighter flex items-center gap-2 shadow-lg transition-all border border-white/10"
                    style={{
                      backgroundColor: activeModule.themeColor,
                      color: (activeModule.themeColor === '#ffffff' || activeModule.themeColor === '#ffcc00') ? '#000000' : '#ffffff'
                    }}
                  >
                    View Project <ExternalLink size={14} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainContent;
