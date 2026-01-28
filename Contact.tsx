
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const object = {
      ...formData,
      access_key: "e40e451b-72b1-4b2d-b3e0-e47788d1c36f",
      from_name: "Portafolio Mirelly",
    };
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-3 gap-16 items-start">
        {/* Info Column */}
        <div className="lg:col-span-1 space-y-10">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">Información de <span className="text-wine-500">Contacto</span></h2>
            <p className="text-wine-200 font-light text-lg">
              Estoy buscando aplicar mis conocimientos técnicos en un entorno profesional dinámico. ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-wine-900 border border-wine-800 rounded-2xl flex items-center justify-center text-wine-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-wine-400 font-medium">Email</p>
                <p className="text-wine-100">mirelly@portfolio.dev</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-wine-900 border border-wine-800 rounded-2xl flex items-center justify-center text-wine-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-wine-400 font-medium">Ubicación</p>
                <p className="text-wine-100">Ciudad de México, MX</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-wine-800 flex gap-4">
            {['Twitter', 'GitHub', 'LinkedIn'].map(social => (
              <a key={social} href="#" className="w-10 h-10 bg-wine-900 rounded-full flex items-center justify-center hover:bg-wine-600 transition-colors">
                <span className="sr-only">{social}</span>
                <div className="w-4 h-4 bg-wine-200 rounded-sm"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6 bg-wine-900/10 p-10 rounded-[2rem] border border-wine-800/50 backdrop-blur-sm">
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-wine-300 px-1">Nombre</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-wine-950/50 border border-wine-800 focus:border-wine-500 rounded-2xl px-5 py-4 text-wine-100 focus:ring-1 focus:ring-wine-500 transition-all outline-none"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-wine-300 px-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-wine-950/50 border border-wine-800 focus:border-wine-500 rounded-2xl px-5 py-4 text-wine-100 focus:ring-1 focus:ring-wine-500 transition-all outline-none"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-wine-300 px-1">Asunto</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full bg-wine-950/50 border border-wine-800 focus:border-wine-500 rounded-2xl px-5 py-4 text-wine-100 focus:ring-1 focus:ring-wine-500 transition-all outline-none"
                placeholder="¿En qué puedo ayudarte?"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-wine-300 px-1">Mensaje</label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-wine-950/50 border border-wine-800 focus:border-wine-500 rounded-2xl px-5 py-4 text-wine-100 focus:ring-1 focus:ring-wine-500 transition-all outline-none resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className={`w-full py-5 rounded-2xl font-bold text-xl transition-all duration-500 shadow-xl ${
                status === 'success' 
                ? 'bg-green-600 text-white' 
                : status === 'error'
                ? 'bg-red-600 text-white'
                : 'bg-wine-600 hover:bg-wine-500 text-white shadow-wine-900/40 active:scale-95'
              }`}
            >
              {status === 'submitting' ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              ) : 
               status === 'success' ? '¡Mensaje Enviado!' : 
               status === 'error' ? 'Error al enviar' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
