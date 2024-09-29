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
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-textSecondary">Contáctame</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Comunícate conmigo para cualquier consulta web</p>
                {alertMessage && (
                    <div className={`mb-4 p-4 rounded-lg text-white ${alertType === 'success' ? 'bg-textPrimary' : 'bg-red-500'}`}>
                        {alertMessage}
                    </div>
                )}
                <Formc form={form} sendEmail={sendEmail}/>
            </div>
        </section>
    );
};

export default Contacto;