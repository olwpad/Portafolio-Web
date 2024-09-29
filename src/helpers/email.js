import emailjs from 'emailjs-com';

const sendEmailJS = async (e) => {
     return await emailjs.sendForm('service_8dhdmzp', 'template_eeu6285', e, 'Q2sOPh1Qh0mwQjHwz')
};

export default sendEmailJS;