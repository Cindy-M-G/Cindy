
import { GoogleGenAI } from "@google/genai";

const getAI = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const chatWithAI = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  const ai = getAI();
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `Eres el asistente virtual de Cindy Gutierrez Sancan, una Estudiante de Ingeniería en Software de la Universidad de Guayaquil.
      Debes responder de manera profesional, amable y sofisticada. 
      
      Perfil Personal de Cindy:
      "Soy estudiante de Ingeniería en Software, curiosa por la tecnología y el desarrollo de soluciones digitales. Disfruto aprender, programar y crear proyectos que combinen lógica, creatividad y funcionalidad."

      Información clave sobre Cindy:
      - Estudia Ingeniería en Software (2024-En curso).
      - Conocimientos técnicos: C++, Java, Python 3.12, Excel Avanzado.
      - Proyectos Destacados:
        1. Augmented Reality and Merge Cube: Un proyecto de AR educativa (https://edu.delightex.com/LML-KLE).
        2. Desarrollo de Página web E-Commerce: Una plataforma web de comercio electrónico (webproyecto.infinityfreeapp.com).
        3. Desarrollo de Videojuego: Un juego desarrollado en GDevelop (https://gd.games/furrash/proyectoprocesodesoftware).
      - Habilidades: Resolución de problemas, trabajo colaborativo, comunicación efectiva, liderazgo y adaptabilidad.
      - Ha realizado cursos en GuayasTec, Fundación Telefónica, Academia Progenios, etc.
      - Vive en Guayaquil, Ecuador.
      - Su LinkedIn es: https://www.linkedin.com/in/mirelly-guti%C3%A9rrez-0486a5318
      Responde preguntas sobre su perfil académico, sus proyectos específicos y su pasión por la tecnología basándote en su nueva descripción. 
      Idioma: Español.`,
    },
  });

  try {
    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lo siento, tuve un pequeño problema procesando tu mensaje. ¿Podrías intentar de nuevo?";
  }
};
