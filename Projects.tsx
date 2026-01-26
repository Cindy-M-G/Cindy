
import React from 'react';
import { Project } from '../types';

const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Augmented Reality and Merge Cube",
    description: "Exploración de experiencias inmersivas utilizando tecnología Merge Cube y Realidad Aumentada para entornos educativos.",
    image: "https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d?q=80&w=800&auto=format&fit=crop",
    tags: ["Realidad Aumentada", "Merge Cube", "EduTech"],
    link: "https://edu.delightex.com/LML-KLE"
  },
  {
    id: 2,
    title: "E-Commerce Web Development",
    description: "Desarrollo integral de una página web de comercio electrónico con catálogo de productos y diseño responsivo.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    tags: ["Web Development", "E-Commerce", "UX/UI"],
    link: "http://webproyecto.infinityfreeapp.com"
  },
  {
    id: 3,
    title: "Desarrollo de Videojuego",
    description: "Diseño y programación de un videojuego interactivo desarrollado como parte del proceso de ingeniería de software.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    tags: ["Game Dev", "GDevelop", "Software Engineering"],
    link: "https://gd.games/furrash/proyectoprocesodesoftware"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="title-font text-4xl font-bold mb-4">Portafolio de <span className="text-wine-500">Proyectos</span></h2>
        <p className="text-wine-200 max-w-2xl mx-auto font-light">
          Una muestra de mis trabajos en desarrollo de software, desde aplicaciones web hasta experiencias inmersivas y juegos.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className="group relative flex flex-col overflow-hidden rounded-2xl bg-wine-900/20 border border-wine-800 transition duration-500 hover:border-wine-500/50">
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex gap-2 mb-4 flex-wrap">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest bg-wine-950 text-wine-400 px-3 py-1 rounded-full border border-wine-800">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="title-font text-xl font-bold mb-3 text-wine-100">{project.title}</h3>
              <p className="text-wine-200 font-light mb-6 text-sm flex-1">
                {project.description}
              </p>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-wine-500 hover:text-wine-400 font-medium transition-colors text-sm"
              >
                Ver Proyecto Directo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-wine-950 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
