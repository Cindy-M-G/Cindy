
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  cst object = {
      ...formData,
      access_key: "e40e451b-72b1-4b2d-b3e0-e47788d1c36f", // Tu llave
      from_name: "Portafolio Mirelly",
    };
   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "e40e451b-72b1-4b2d-b3e0-e47788d1c36f");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        console.log("¡Éxito!", data);
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error("Error de Web3Forms:", data.message);
        setStatus('error');
      }
    } catch (error) {
      console.error("Error de red:", error);
      setStatus('error');
    }
  };
      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.log(error);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-3 gap-12">
        {/* ... Columna de Información (Se mantiene igual) ... */}
        <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="title-font text-4xl font-bold mb-6">Información de <span className="text-wine-500">Contacto</span></h2>
              <p className="text-wine-200 font-light">
                Estoy buscando aplicar mis conocimientos técnicos en un entorno profesional dinámico.
              </p>
            </div>
            {/* Aquí van tus iconos de Email y Ubicación */}
        </div>

        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6 bg-wine-900/20 p-8 rounded-3xl border border-wine-800">
            {/* Campo oculto opcional para bot-protection (opcional) */}
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
                  className="w-full bg-wine-950 border border-wine-800 focus:border-wine-500 rounded-xl px-4 py-3 text-wine-100 focus:ring-1 focus:ring-wine-500 transition-all outline-none"
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
                  className="w-full bg-wine-950 border border-wine-800 focus:border-wine-500 rounded-xl px-4 py-3 text-wine-100 focus:ring-1 focus:ring-wine-500 transition-all outline-none"
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
                className="w-full bg-wine-950 border border-wine-800 focus:border-wine-500 rounded-xl px-4 py-3 text-wine-100 focus:ring-1 focus:ring-wine-500 transition-all outline-none"
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
                className="w-full bg-wine-950 border border-wine-800 focus:border-wine-500 rounded-xl px-4 py-3 text-wine-100 focus:ring-1 focus:ring-wine-500 transition-all outline-none resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                status === 'success' 
                ? 'bg-green-600 text-white' 
                : status === 'error'
                ? 'bg-red-600 text-white'
                : 'bg-wine-600 hover:bg-wine-500 text-white shadow-lg shadow-wine-900/50'
              }`}
            >
              {status === 'submitting' ? 'Enviando...' : 
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
