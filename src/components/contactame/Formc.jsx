import React from 'react'

export const Formc = ({form, sendEmail}) => {
  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-8 flex justify-center flex-col">
      <div>
        <label htmlFor="user_name" className="block mb-2 text-sm font-medium dark:text-gray-300">Tu nombre</label>
        <input type="text" id="user_name" name="user_name" className="shadow-sm text-sm rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light outline-none" placeholder="Tu nombre" required />
      </div>
      <div>
        <label htmlFor="subject" className="block mb-2 text-sm font-medium dark:text-gray-300">Asunto</label>
        <input type="text" id="subject" name="subject" className="block p-3 w-full text-sm bg-gray-50 rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light outline-none" placeholder="Cuéntame cómo puedo ayudarte" required />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-gray-400">Tu mensaje</label>
        <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 outline-none" placeholder="Deja un comentario..." required></textarea>
      </div>
      <button type="submit" className="md:p-4 p-2 text-title rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">Enviar mensaje</button>
    </form>
  )
}
