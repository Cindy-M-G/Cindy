
import React from 'react';

const TECH_SKILLS = [
  "Python 3.12",
  "C++ / Java",
  "Excel Avanzado",
  "Diseño Gráfico",
  "WordPress",
  "Git / GitHub",
  "HTML5 / CSS3",
  "SQL Básico"
];

const SOFT_SKILLS = [
  "Comunicación Efectiva",
  "Liderazgo",
  "Adaptabilidad",
  "Trabajo Colaborativo",
  "Empatía",
  "Creatividad"
];

const Skills: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="title-font text-3xl font-bold mb-3 text-wine-950">Mis <span className="text-wine-600">Habilidades</span></h2>
        <div className="h-1 w-16 bg-wine-600 mx-auto rounded-full"></div>
      </div>

      <div className="bg-white rounded-3xl border border-wine-100 shadow-xl overflow-hidden">
        <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-wine-50">
          
          {/* Técnicas - Lado Izquierdo */}
          <div className="p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-wine-100 rounded-lg text-wine-700">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="title-font text-xl font-bold text-wine-900">Técnicas</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TECH_SKILLS.map((skill, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-white rounded-xl border border-wine-100 shadow-sm flex items-center gap-3 transition-all duration-300 hover:border-wine-300 hover:shadow-md group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-wine-600 group-hover:scale-150 transition-transform"></div>
                  <span className="text-xs font-semibold text-wine-900">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Blandas - Lado Derecho */}
          <div className="p-8 lg:p-10 bg-wine-50/30">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-wine-100 rounded-lg text-wine-700">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="title-font text-xl font-bold text-wine-900">Blandas</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SOFT_SKILLS.map((skill, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-white rounded-xl border border-wine-100 shadow-sm flex items-center gap-3 transition-all duration-300 hover:border-wine-300 hover:shadow-md group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-wine-400 group-hover:scale-150 transition-transform"></div>
                  <span className="text-xs font-medium text-wine-800">{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-wine-950 rounded-2xl relative overflow-hidden">
              <p className="relative z-10 text-wine-100 italic text-[10px] leading-relaxed text-center opacity-80">
                "Crecimiento profesional mediante colaboración activa y desarrollo técnico constante."
              </p>
              <div className="absolute top-0 right-0 p-1 opacity-5">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/></svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
