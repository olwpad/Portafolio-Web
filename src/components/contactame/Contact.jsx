import React, { useRef, useState } from 'react';
import { Formc } from './Formc';
import sendEmailJS from '../../helpers/email';
 const Contacto = () => {
    const form = useRef();
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');


    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            await sendEmailJS(form.current)
            setAlertMessage('Mensaje enviado con éxito!');
            setAlertType('success');
        } catch (error) {
            setAlertMessage('Hubo un error al enviar el mensaje.');
            setAlertType('error');
        }
    }
    return (
        <section className="">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="text-3xl lg:text-4xl xl:text-4xl font-bold mb-4  text-blue-500 font-serif text-center">Contáctame</h2>
                <p className="mb-4 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 md:text-lg text-sm">Comunícate conmigo para cualquier consulta web</p>
                {alertMessage && (
                    <div className={`mb-4 p-4 rounded-lg text-white ${alertType === 'success' ? 'bg-title' : 'bg-red-500'}`}>
                        {alertMessage}
                    </div>
                )}
                <Formc form={form} sendEmail={sendEmail}/>
            </div>
        </section>
    );
};

export default Contacto;