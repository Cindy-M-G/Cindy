
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-wine-950 border-t border-wine-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-shrink-0">
            <a href="#" className="title-font text-2xl font-bold tracking-tighter text-wine-100">
              C<span className="text-wine-500">G</span>
            </a>
            <p className="text-wine-400 text-sm mt-2 font-light tracking-wide">Desarrollando el futuro con tecnología y compromiso.</p>
          </div>

          <div className="flex items-center">
            <a 
              href="https://www.linkedin.com/in/mirelly-guti%C3%A9rrez-0486a5318" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-wine-200 hover:text-white transition-all duration-300 flex items-center gap-2 group"
            >
              <span className="text-sm font-medium tracking-wide">LinkedIn</span>
              <div className="w-8 h-8 bg-wine-900/50 rounded-full flex items-center justify-center transition-colors group-hover:bg-wine-500">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
            </a>
          </div>

          <div className="text-wine-400 text-sm font-light">
            © {new Date().getFullYear()} Cindy Gutierrez Sancan.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
