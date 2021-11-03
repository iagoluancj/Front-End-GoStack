import React, { useEffect } from 'react';
import { FiCheckCircle, FiInfo, FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../context/ToastContext';
 
import { Container } from './style';

interface ToastProps {
    message: ToastMessage;
}

const icons = {
    info: <FiInfo size={24}/>,
    error: <FiAlertCircle size={24}/>,
    sucess: <FiCheckCircle size={24}/>,
}

const Toast: React.FC<ToastProps> = ({message}) => {
    const { removeToast } = useToast();
                    // Essa parte ensinou algo mt importante de como deixar um toast com tempo limitado:
                    // TEMPO DO VIDEO: 18:30  - Gostack 2020/ Iniciando o front-end web/ Adicionando e removendo Toasts.
    useEffect(() => {            
        const timer = setTimeout(() => {
            removeToast(message.id);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [removeToast, message.id])

    return (
        <Container type={message.type} hasDescription={!!message.description}>
            {icons[message.type || 'info']}
            <div>
                <strong>{message.title}</strong>
                {message.description && <p>{message.description}</p>}
            </div>
                             {/* não posso simplesmente enviar: (message.id), por isso a arrow function antes do handle. */}
            <button onClick={() => removeToast(message.id)} type="button">
                <FiXCircle size={18} />
            </button>
        </Container>
    );
}

export default Toast;







