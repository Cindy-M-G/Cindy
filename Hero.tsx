
import React from 'react';

const Hero: React.FC = () => {
  const downloadCV = () => {
    alert("Iniciando descarga del CV de Cindy Gutierrez Sancan...");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Deep Background patterns */}
      <div className="absolute inset-0 z-0 bg-wine-950">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-wine-900/40 via-transparent to-transparent"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-wine-800/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[70%] h-[70%] bg-wine-900/20 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-6 py-2 border border-wine-700 rounded-full bg-wine-900/30 mb-8 animate-fade-in">
          <h2 className="text-wine-300 font-medium tracking-[0.4em] uppercase text-xs">
            Ingeniería en Software
          </h2>
        </div>
        
        <h1 className="title-font text-6xl md:text-8xl font-bold mb-10 leading-[1.1] tracking-tight text-white">
          Cindy <span className="text-wine-500 drop-shadow-sm">Gutierrez</span>
        </h1>
        
        <p className="text-wine-100 text-xl md:text-2xl max-w-3xl mx-auto mb-16 font-light leading-relaxed opacity-90">
          Estudiante curiosa por la tecnología y el desarrollo de soluciones digitales. Disfruto aprender, programar y crear proyectos que combinen <span className="text-white font-medium italic underline decoration-wine-500 underline-offset-8">lógica, creatividad y funcionalidad.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <button
            onClick={downloadCV}
            className="group relative px-10 py-5 bg-white text-wine-950 font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-[0_20px_50px_rgba(45,6,14,0.3)] flex items-center gap-3 overflow-hidden"
          >
            <span className="relative z-10">Descargar CV</span>
            <svg className="w-5 h-5 relative z-10 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <div className="absolute inset-0 bg-wine-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </button>

          <a
            href="https://www.linkedin.com/in/mirelly-guti%C3%A9rrez-0486a5318"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-transparent border-2 border-wine-400 text-white hover:bg-wine-400/10 font-bold rounded-2xl transition-all duration-300 flex items-center gap-3"
          >
            <span>LinkedIn</span>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#sobre-mi" className="text-wine-400 opacity-60 hover:opacity-100 transition-opacity">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
