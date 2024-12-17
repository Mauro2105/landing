import React from 'react';
import ContactForm from '@/components/ContactForm';
import '../styles/contact.css';

const ContactPage: React.FC = () => {
    return (
        <div className="contact-container">
            <h1 className='contact-title'>Contáctanos</h1>
            <p className='contact-description'>
                ¿Tienes alguna duda o sugerencia? LLena el formulario y nos pondremos en contacto contigo.
            </p>
            <ContactForm />
        </div>
    )
};


export default ContactPage;