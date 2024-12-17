import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '@/styles/contact.css';

interface FormUser {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const ContactForm: React.FC = () => {
    // Estado para almacenar los datos del formulario
    const [formUser, setFormUser] = useState<FormUser>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    // Manejar cambios en los inputs del formulario
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormUser({...formUser, [name]: value });
    };

    // Manejar el envío del formulario
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Evita que la página se recargue al enviar el formulario
        
        // Validar campos para asegurar que todos los campos estén completos
        if (!formUser.name || !formUser.email || !formUser.phone || !formUser.message) {
            Swal.fire({
                icon: 'warning',
                title: 'Campos incompletos',
                text: 'Por favor, llene todos los campos.',
                confirmButtonText: 'Entendido',
            });
            return;
        }

        try {
            // Almacenar los datos en el local storage
            const data = JSON.parse(localStorage.getItem('contactMessages') || '[]');
            data.push(formUser); // Agregar los nuevos datos
            localStorage.setItem('contactMessages', JSON.stringify(data)); // Guardar en el local storage
    
            // Mostrar un mensaje de éxito al enviar el formulario
            Swal.fire({
                icon:'success',
                title: 'Gracias por contactarnos',
                text: 'Nos pondremos en contacto con usted lo más pronto posible.',
                confirmButtonText: 'Cerrar',
            });
    
            // Resetear los valores del formulario
            setFormUser({
                name: '',
                email: '',
                phone: '',
                message: '',
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ocurrió un error al guardar los datos. Inténtalo nuevamente.',
                confirmButtonText: 'Cerrar',
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className='contact-form'>
            <h2>Contacto</h2>
            <div className='form-group'>
                <label htmlFor='name'>Nombre:</label>
                <input 
                    type='text'
                    id='name' 
                    name='name' 
                    value={formUser.name} 
                    onChange={handleChange}
                    placeholder='Ingrese su nombre completo'
                    required 
                />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Correo electrónico:</label>
                <input 
                    type='email'
                    id='email' 
                    name='email' 
                    value={formUser.email} 
                    onChange={handleChange}
                    placeholder='Ingrese su correo electrónico'
                    required 
                />
            </div>
            <div className='form-group'>
                <label htmlFor='phone'>Teléfono:</label>
                <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formUser.phone}
                    onChange={handleChange}
                    pattern='[0-9]{10}'
                    placeholder='Ingresa un número de 10 dígitos'
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor='message'>Mensaje:</label>
                <textarea
                    id='message'
                    name='message'
                    value={formUser.message}
                    onChange={handleChange}
                    placeholder='Ingrese su mensaje'
                    required
                />
            </div>
            <button type='submit'>Enviar</button>
        </form>
    )
};

export default ContactForm;