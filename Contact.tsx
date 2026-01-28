
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    // Usamos FormData para asegurar la compatibilidad total con la API
    const submitData = new FormData();
    submitData.append("access_key", "e40e451b-72b1-4b2d-b3e0-e47788d1c36f");
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("subject", formData.subject);
    submitData.append("message", formData.message);
    // Opcional: Esto evita que el correo llegue a spam
    submitData.append("from_name", "Portafolio Mirelly");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Volver al estado inicial después de 5 segundos
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Error de Web3Forms:", data.message);
        setStatus('error');
      }
    } catch (error) {
      console.error("Error de red:", error);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-3 gap-12">
        {/* INFO DE CONTACTO (Sin cambios) */}
        <div className="lg:col-span-1 space-y-8">
          <h2 className="text-4xl font-bold mb-6">Información de <span className="text-wine-500">Contacto</span></h2>
          <p className="text-wine-200">Guayaquil, Ecuador | mirellygs2007@gmail.com</p>
        </div>

        {/* FORMULARIO */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6 bg-wine-900/20 p-8 rounded-3xl border border-wine-800">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                required
                placeholder="Nombre"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-wine-950 border border-wine-800 rounded-xl px-4 py-3 text-white focus:border-wine-500 outline-none"
              />
              <input
                type="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-wine-950 border border-wine-800 rounded-xl px-4 py-3 text-white focus:border-wine-500 outline-none"
              />
            </div>
            <input
              type="text"
              required
              placeholder="Asunto"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              className="w-full bg-wine-950 border border-wine-800 rounded-xl px-4 py-3 text-white focus:border-wine-500 outline-none"
            />
            <textarea
              required
              rows={5}
              placeholder="Mensaje"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-wine-950 border border-wine-800 rounded-xl px-4 py-3 text-white focus:border-wine-500 outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className={`w-full py-4 rounded-xl font-bold transition-all ${
                status === 'success' ? 'bg-green-600' : 
                status === 'error' ? 'bg-red-600' : 'bg-wine-600 hover:bg-wine-500'
              }`}
            >
              {status === 'submitting' ? 'Enviando...' : 
               status === 'success' ? '¡Mensaje Enviado con éxito!' : 
               status === 'error' ? 'Error al enviar' : 'Enviar
