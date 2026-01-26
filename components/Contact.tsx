
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h2 className="title-font text-4xl font-bold mb-6">Información de <span className="text-wine-500">Contacto</span></h2>
            <p className="text-wine-200 font-light">
              Estoy buscando aplicar mis conocimientos técnicos en un entorno profesional dinámico para crecer como desarrolladora y aportar valor estratégico.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-wine-900/30 rounded-full flex items-center justify-center text-wine-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-wine-400 font-medium">Email</p>
                <p className="text-wine-100">mirellygs2007@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-wine-900/30 rounded-full flex items-center justify-center text-wine-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-wine-400 font-medium">Ubicación</p>
                <p className="text-wine-100">Guayaquil, Ecuador</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6 bg-wine-900/20 p-8 rounded-3xl border border-wine-800">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-wine-300 px-1">Nombre</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-wine-950 border border-wine-800 focus:border-wine-500 rounded-xl px-4 py-3 text-wine-100 focus:ring-1 focus:ring-wine-500 transition-all outline-none"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-wine-300 px-1">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-wine-950 border border-wine-800 focus:border-wine-500 rounded-xl px-4 py-3 text-wine-100 focus:ring-1 focus:ring-wine-500 transition-all outline-none"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-wine-300 px-1">Asunto</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full bg-wine-950 border border-wine-800 focus:border-wine-500 rounded-xl px-4 py-3 text-wine-100 focus:ring-1 focus:ring-wine-500 transition-all outline-none"
                placeholder="¿En qué puedo ayudarte?"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-wine-300 px-1">Mensaje</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-wine-950 border border-wine-800 focus:border-wine-500 rounded-xl px-4 py-3 text-wine-100 focus:ring-1 focus:ring-wine-500 transition-all outline-none resize-none"
                placeholder="Cuéntame sobre tu proyecto o propuesta laboral..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                status === 'success' 
                ? 'bg-green-600 text-white' 
                : 'bg-wine-600 hover:bg-wine-500 text-white shadow-lg shadow-wine-900/50'
              }`}
            >
              {status === 'submitting' ? 'Enviando...' : status === 'success' ? '¡Mensaje Enviado!' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
