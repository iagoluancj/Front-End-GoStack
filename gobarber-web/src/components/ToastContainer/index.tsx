import React from 'react';

import Toast from './Toast';

import { ToastMessage } from '../../context/ToastContext';
import { Container }  from './style';

interface ToastContainerProps {
    messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {

    return (
        <Container>
            {messages.map((message) => (
                <Toast key={message.id} message={message} />
            ))}
        </Container>
    );
};

export default ToastContainer;



// const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
//     const messagesWithTransitions = useTransition(
//         messages
//         {
//             from: { right: '-120%', opacity: 0 },
//             enter: { right: '0%', opacity: 1 },
//             leave: { right: '-120%', opacity: 0 },
//         },
//     );

//     return (
//     <Container>
//         {messagesWithTransitions.map(({ item, key, props }) => (
//             <Toast key={key} style={props} message={item} /> 
//         ))}
//     </Container>
//     );
// };
