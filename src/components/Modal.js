import React, { useState } from 'react';
import '../App.scss'
import './Modal.scss'

const Modal = ({ children, title }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button onClick={() => { setIsOpen(true) }} className="hourly-btn">Hourly Forecast</button>

            {
                isOpen && (

                    <div className='modal'>

                        <div className='modal-content'>
                            {title}
                            <button className='close-btn' onClick={() => { setIsOpen(false) }}>X</button>
                            {children}

                        </div>

                    </div>
                )}
        </div>
    );
}

export default Modal;