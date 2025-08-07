import React from 'react';

interface YANALayoutProps {
  children: React.ReactNode;
  platform: 'enterprises' | 'care' | 'mart' | 'learn' | 'studios';
}

export const YANALayout: React.FC<YANALayoutProps> = ({ children, platform }) => {
  const platformColors = {
    enterprises: 'bg-blue-600',
    care: 'bg-green-600',
    mart: 'bg-purple-600',
    learn: 'bg-orange-600',
    studios: 'bg-pink-600'
  };

  const platformNames = {
    enterprises: 'YANA Enterprises',
    care: 'YANACare',
    mart: 'YANA Mart',
    learn: 'YANA Learn',
    studios: 'YANA Studios'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`${platformColors[platform]} text-white shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">{platformNames[platform]}</h1>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="http://localhost:3000" className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
                <a href="http://localhost:3001" className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium">
                  Care
                </a>
                <a href="http://localhost:3002" className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium">
                  Mart
                </a>
                <a href="http://localhost:3003" className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium">
                  Learn
                </a>
                <a href="http://localhost:3004" className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium">
                  Studios
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">YANA Enterprises</h3>
              <p className="text-gray-300">Building the future of digital services</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platforms</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="http://localhost:3001" className="hover:text-white">YANACare</a></li>
                <li><a href="http://localhost:3002" className="hover:text-white">YANA Mart</a></li>
                <li><a href="http://localhost:3003" className="hover:text-white">YANA Learn</a></li>
                <li><a href="http://localhost:3004" className="hover:text-white">YANA Studios</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-center text-gray-400">
              © 2025 YANA Enterprises. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
