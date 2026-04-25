import React from 'react';
import { 
  Plus, 
  GitPullRequest, 
  CircleDot, 
  Inbox, 
  ChevronDown,
  Menu,
  BookOpen,
  Search
} from 'lucide-react';
import { useSnackbar } from '../context/SnackbarContext';

const Navbar = () => {
  const showSnackbar = useSnackbar();

  const handleIconClick = (name) => {
    if (name === 'Profile Settings') {
        showSnackbar("You are already looking at your Profile! 📸");
        return;
    }

    const messages = [
        `Whoops! The ${name} button is on a coffee break. ☕`,
        `Loading ${name}... just kidding, I don't do anything yet! 🤡`,
        `${name}? Never heard of her. 💤`,
        `Clicking ${name} won't make me work faster! 🏃‍♂️`,
        `You found the secret ${name} button! (Not really). 🕵️`
    ];
    showSnackbar(messages[Math.floor(Math.random() * messages.length)]);
  };

  return (
    <header className="bg-[#010409] border-b border-[#30363d] px-4 py-2 flex items-center justify-between sticky top-0 z-[50] h-16">
      {/* Left section: Logo and Name */}
      <div className="flex items-center space-x-3">
        <div 
          className="p-1.5 rounded-md border border-[#30363d] hover:bg-[#21262d] cursor-pointer transition-colors"
          onClick={() => handleIconClick('Menu')}
        >
          <Menu size={20} className="text-[#8b949e]" />
        </div>
        
        <svg 
          height="32" 
          viewBox="0 0 16 16" 
          version="1.1" 
          width="32" 
          className="fill-white cursor-pointer hover:fill-[#8b949e] transition-colors"
          onClick={() => handleIconClick('GitHub')}
        >
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
        </svg>

        <div className="flex items-center space-x-2 text-sm font-semibold">
          <span className="text-[#8b949e] cursor-pointer hover:text-[#58a6ff]">Aman-kumar-git12</span>
          <span className="text-[#8b949e]">/</span>
          <span className="text-white cursor-pointer hover:text-[#58a6ff]">Data_Analysis-1</span>
        </div>
      </div>

      {/* Center section: Search bar */}
      <div className="flex-grow max-w-[450px] mx-8 hidden lg:block">
        <div className="bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5 flex items-center space-x-2 group focus-within:border-[#58a6ff] focus-within:ring-1 focus-within:ring-[#58a6ff] transition-all">
          <Search size={16} className="text-[#8b949e]" />
          <input 
            type="text" 
            placeholder="Type / to search" 
            className="bg-transparent border-none outline-none text-white text-[13px] w-full placeholder-[#8b949e]"
          />
          <div className="flex items-center space-x-1">
            <span className="border border-[#30363d] rounded px-1.5 py-0.5 text-[10px] text-[#8b949e] bg-[#161b22]">/</span>
          </div>
        </div>
      </div>

      {/* Right section: Icons */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center border border-[#30363d] rounded-md overflow-hidden bg-[#21262d]/50">
          <div 
            className="p-2 hover:bg-[#30363d] cursor-pointer text-[#8b949e] hover:text-white border-r border-[#30363d] flex items-center gap-1"
            onClick={() => handleIconClick('Create')}
          >
            <Plus size={18} />
            <ChevronDown size={14} />
          </div>
        </div>

        <div className="flex items-center space-x-4 text-[#8b949e]">
          <CircleDot size={20} className="cursor-pointer hover:text-[#58a6ff] transition-colors" onClick={() => handleIconClick('Issues')} />
          <GitPullRequest size={20} className="cursor-pointer hover:text-[#58a6ff] transition-colors" onClick={() => handleIconClick('Pull Requests')} />
          <BookOpen size={20} className="cursor-pointer hover:text-[#58a6ff] transition-colors" onClick={() => handleIconClick('Projects')} />
          <div className="relative cursor-pointer group" onClick={() => handleIconClick('Notifications')}>
            <Inbox size={20} className="group-hover:text-[#58a6ff] transition-colors" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#1f6feb] border-2 border-[#010409] rounded-full"></div>
          </div>
        </div>

        <div className="flex items-center space-x-1 cursor-pointer group" onClick={() => handleIconClick('Profile Settings')}>
          <img 
            src="/profileimage/profile.png" 
            alt="User avatar" 
            className="w-6 h-6 rounded-full border border-[#30363d] object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
