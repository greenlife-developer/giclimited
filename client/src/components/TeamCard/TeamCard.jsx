import React, { useState } from 'react';
import "./teamcard.css";

const TeamCard = ({ image, name, position, details }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="team_card_container" onClick={openModal}>
                <div className="card_image">
                    <img src={image} alt="" />
                </div> 
                <div className="card_text">
                    <h3 className="name">{name}</h3>
                    <h4 className="position">{position}</h4>
                </div>
            </div>
            {isModalOpen && (
                <Modal onClose={closeModal} name={name} position={position} details={details} />
            )}
        </>
    );
};

const Modal = ({ onClose, name, position, details }) => {

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal_overlay" onClick={handleOverlayClick}>
            <div className="modal_content">
                <span className="modal_close" onClick={onClose}>&times;</span>
                <h2>{name}</h2>
                <h3>{position}</h3>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default TeamCard;
