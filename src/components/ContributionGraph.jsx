import React from 'react';
import { ChevronDown, Zap, Calendar, Award } from 'lucide-react';

const ContributionGraph = () => {
  const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
  const years = [2026, 2025, 2024];
  
  // Generate a mock grid of 53 weeks x 7 days
  const grid = Array.from({ length: 53 }, () => 
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 4))
  );

  const getColor = (level) => {
    switch (level) {
      case 0: return 'bg-[#161b22]'; // None
      case 1: return 'bg-[#004d40]'; // Low
      case 2: return 'bg-[#00695c]'; // Medium
      case 3: return 'bg-[#00897b]'; // High
      case 4: return 'bg-[#00c853]'; // Very High
      default: return 'bg-[#161b22]';
    }
  };

  return (
    <div className="mt-10">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[16px] text-[#c9d1d9]">61 contributions in the last year</h2>
            <div className="flex items-center text-xs text-[#8b949e] cursor-pointer hover:text-[#58a6ff]">
              Contribution settings <ChevronDown size={14} className="ml-1" />
            </div>
          </div>
          
          <div className="border border-[#30363d] rounded-md p-4 bg-[#0d1117]">
            <div className="flex flex-col">
              {/* Months Row */}
              <div className="flex text-[10px] text-[#8b949e] ml-8 mb-1 space-x-7">
                {months.map((month, i) => (
                  <span key={i}>{month}</span>
                ))}
              </div>
              
              <div className="flex">
                {/* Days Column */}
                <div className="flex flex-col text-[10px] text-[#8b949e] justify-around h-[80px] mr-2">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>
                
                {/* The Grid */}
                <div className="flex space-x-[3px] overflow-hidden">
                  {grid.map((week, i) => (
                    <div key={i} className="flex flex-col space-y-[3px]">
                      {week.map((day, j) => (
                        <div 
                          key={j} 
                          className={`w-[10px] h-[10px] rounded-[2px] ${getColor(day)}`}
                        ></div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-4 text-[11px] text-[#8b949e]">
                <span className="hover:text-[#58a6ff] cursor-pointer">Learn how we count contributions</span>
                <div className="flex items-center space-x-1">
                  <span>Less</span>
                  <div className="w-[10px] h-[10px] rounded-[2px] bg-[#161b22]"></div>
                  <div className="w-[10px] h-[10px] rounded-[2px] bg-[#004d40]"></div>
                  <div className="w-[10px] h-[10px] rounded-[2px] bg-[#00695c]"></div>
                  <div className="w-[10px] h-[10px] rounded-[2px] bg-[#00897b]"></div>
                  <div className="w-[10px] h-[10px] rounded-[2px] bg-[#00c853]"></div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>

          {/* Streaks Section */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="border border-[#30363d] rounded-md p-3 bg-[#0d1117] flex flex-col items-center justify-center text-center">
              <Zap size={20} className="text-[#f78166] mb-1" />
              <div className="text-xl font-bold text-white">12</div>
              <div className="text-[10px] text-[#8b949e] uppercase tracking-wider">Current Streak</div>
            </div>
            <div className="border border-[#30363d] rounded-md p-3 bg-[#0d1117] flex flex-col items-center justify-center text-center">
              <Calendar size={20} className="text-[#58a6ff] mb-1" />
              <div className="text-xl font-bold text-white">45</div>
              <div className="text-[10px] text-[#8b949e] uppercase tracking-wider">Total Contribs</div>
            </div>
            <div className="border border-[#30363d] rounded-md p-3 bg-[#0d1117] flex flex-col items-center justify-center text-center">
              <Award size={20} className="text-[#00c853] mb-1" />
              <div className="text-xl font-bold text-white">28</div>
              <div className="text-[10px] text-[#8b949e] uppercase tracking-wider">Longest Streak</div>
            </div>
          </div>
        </div>
        
        {/* Years Sidebar */}
        <div className="w-full md:w-[80px] mt-8 md:mt-10">
          <div className="flex flex-col space-y-1">
            {years.map((year) => (
              <div 
                key={year}
                className={`px-3 py-2 rounded-md text-sm cursor-pointer transition-colors ${
                  year === 2026 
                    ? 'bg-[#0969da] text-white font-semibold' 
                    : 'text-[#8b949e] hover:bg-[#161b22] hover:text-[#c9d1d9]'
                }`}
              >
                {year}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionGraph;
