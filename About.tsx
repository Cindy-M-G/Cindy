
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center md:items-start">
        {/* Profile Placeholder Column - Small, Circular and Wine Colored */}
        <div className="flex-shrink-0 relative group">
          <div className="absolute -inset-3 bg-wine-500 rounded-full opacity-10 group-hover:opacity-25 transition duration-500 blur-2xl"></div>
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-xl border-2 border-wine-100 p-1 bg-white">
            <div className="w-full h-full rounded-full bg-wine-900 flex items-center justify-center transition duration-700 group-hover:scale-110 group-hover:bg-wine-800">
              <img src="/curriculum.png"alt="Cindy Gutierrez"className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-white select-none"/>
            </div>
          </div>
          {/* Experience Badge Adjusted for small size */}
          <div className="absolute -bottom-1 -right-1 bg-wine-800 text-white p-2 rounded-full border border-white shadow-lg scale-90">
             <p className="text-[8px] font-bold leading-none text-center uppercase tracking-tighter">2024<br/>CURSO</p>
          </div>
        </div>

        {/* Content Column */}
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="title-font text-4xl font-bold mb-4 text-wine-950">Perfil <span className="text-wine-600">Profesional</span></h2>
            <div className="h-1.5 w-16 bg-wine-600 mb-8 rounded-full"></div>
          </div>

          <div className="space-y-6 text-wine-900 font-normal leading-relaxed text-lg">
            <p className="italic text-wine-700 border-l-4 border-wine-200 pl-6 py-2 bg-wine-50/50 rounded-r-xl">
              "Soy estudiante de Ingeniería en Software, curiosa por la tecnología y el desarrollo de soluciones digitales. Disfruto aprender, programar y crear proyectos que combinen lógica, creatividad y funcionalidad."
            </p>
            <p>
              Me considero una persona enfocada en el aprendizaje continuo, buscando siempre aplicar mis conocimientos técnicos para crecer como desarrolladora y aportar valor real en cada proyecto en el que participo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 pt-6">
            <div className="space-y-6">
              <h3 className="title-font text-xl font-bold text-wine-950 flex items-center gap-3">
                <span className="p-1.5 bg-wine-100 rounded-lg text-wine-700">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </span>
                Educación
              </h3>
              <div className="space-y-3">
                <div className="p-4 bg-white border border-wine-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-wine-800 text-base">Ingeniería en Software</h4>
                  <p className="text-wine-600 text-sm">Universidad de Guayaquil</p>
                  <p className="text-wine-400 text-[10px] mt-1 uppercase tracking-widest font-semibold">2024 - Presente</p>
                </div>
                <div className="p-4 bg-white border border-wine-100 rounded-xl shadow-sm">
                  <h4 className="font-bold text-wine-800 text-base">Bachiller en Ciencias</h4>
                  <p className="text-wine-600 text-sm">U.E. "Dr. José Viliulfo Cedeño Sánchez"</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="title-font text-xl font-bold text-wine-950 flex items-center gap-3">
                <span className="p-1.5 bg-wine-100 rounded-lg text-wine-700">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Certificaciones
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {[
                  "Actualización en Python 3.12",
                  "Crea y Desarrolla con IA",
                  "Ciberseguridad (Telefónica)",
                  "Informática Forense"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 bg-wine-50 rounded-lg text-wine-900 text-xs font-medium border border-wine-100">
                    <span className="w-1.5 h-1.5 bg-wine-600 rounded-full"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
