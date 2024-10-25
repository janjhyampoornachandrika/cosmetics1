import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isHomeOpen, setIsHomeOpen] = useState(false);
    const [isLipsticksOpen, setIsLipsticksOpen] = useState(false);
    const [isMakeupKitsOpen, setIsMakeupKitsOpen] = useState(false);
    const [isFaceMakeupOpen, setIsFaceMakeupOpen] = useState(false);
    const [isEyeMakeupOpen, setIsEyeMakeupOpen] = useState(false);
    const [isFaceWashOpen, setIsFaceWashOpen] = useState(false);
    const [isHairCareOpen, setIsHairCareOpen] = useState(false);
    const [isPerfumesOpen, setIsPerfumesOpen] = useState(false);
    const [isHairStraightenerOpen, setIsHairStraightenerOpen] = useState(false);
    const [isBodyLotionOpen, setIsBodyLotionOpen] = useState(false);

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {/* Home */}
                <li 
                    onMouseEnter={() => setIsHomeOpen(true)} 
                    onMouseLeave={() => setIsHomeOpen(false)}
                >
                    Home
                    {isHomeOpen && (
                        <div className="dropdown">
                            <Link to="#">Lipsticks</Link>
                            <Link to="#">Makeup Kits</Link>
                            <Link to="#">Face Makeup</Link>
                            <Link to="#">Eye Makeup</Link>
                            <Link to="#">Face Wash</Link>
                            <Link to="#">Hair Care</Link>
                            <Link to="#">Perfumes</Link>
                            <Link to="#">Hair Straightener</Link>
                            <Link to="#">Body Lotion</Link>
                        </div>
                    )}
                </li>

                {/* Lipsticks */}
                <li 
                    onMouseEnter={() => setIsLipsticksOpen(true)} 
                    onMouseLeave={() => setIsLipsticksOpen(false)}
                >
                    Lipsticks
                    {isLipsticksOpen && (
                        <div className="dropdown">
                            <Link to="#">Matte Lipsticks</Link>
                            <Link to="#">Glossy Lipsticks</Link>
                            <Link to="#">Waterproof Lipsticks</Link>
                        </div>
                    )}
                </li>

                {/* Makeup Kits */}
                <li 
                    onMouseEnter={() => setIsMakeupKitsOpen(true)} 
                    onMouseLeave={() => setIsMakeupKitsOpen(false)}
                >
                    Makeup Kits
                    {isMakeupKitsOpen && (
                        <div className="dropdown">
                            <Link to="#">Makeup Kits</Link>
                            <Link to="#">Makeup Combo</Link>
                            <Link to="#">Makeup Brushes</Link>
                        </div>
                    )}
                </li>

                {/* Face Makeup */}
                <li 
                    onMouseEnter={() => setIsFaceMakeupOpen(true)} 
                    onMouseLeave={() => setIsFaceMakeupOpen(false)}
                >
                    Face Makeup
                    {isFaceMakeupOpen && (
                        <div className="dropdown">
                            <Link to="#">Foundation</Link>
                            <Link to="#">Concealer</Link>
                            <Link to="#">Compact</Link>
                        </div>
                    )}
                </li>

                {/* Eye Makeup */}
                <li 
                    onMouseEnter={() => setIsEyeMakeupOpen(true)} 
                    onMouseLeave={() => setIsEyeMakeupOpen(false)}
                >
                    Eye Makeup
                    {isEyeMakeupOpen && (
                        <div className="dropdown">
                            <Link to="#">Eyeshadow</Link>
                            <Link to="#">Eyeliner</Link>
                            <Link to="#">Kajal</Link>
                        </div>
                    )}
                </li>

                {/* Face Wash */}
                <li 
                    onMouseEnter={() => setIsFaceWashOpen(true)} 
                    onMouseLeave={() => setIsFaceWashOpen(false)}
                >
                    Face Wash
                    {isFaceWashOpen && (
                        <div className="dropdown">
                            <Link to="#">Gel Face Wash</Link>
                            <Link to="#">Foam Face Wash</Link>
                            <Link to="#">Cream Face Wash</Link>
                        </div>
                    )}
                </li>

                {/* Hair Care */}
                <li 
                    onMouseEnter={() => setIsHairCareOpen(true)} 
                    onMouseLeave={() => setIsHairCareOpen(false)}
                >
                    Hair Care
                    {isHairCareOpen && (
                        <div className="dropdown">
                            <Link to="#">Hair Oil</Link>
                            <Link to="#">Hair Shampoo</Link>
                            <Link to="#">Serum</Link>
                        </div>
                    )}
                </li>

                {/* Perfumes */}
                <li 
                    onMouseEnter={() => setIsPerfumesOpen(true)} 
                    onMouseLeave={() => setIsPerfumesOpen(false)}
                >
                    Perfumes
                    {isPerfumesOpen && (
                        <div className="dropdown">
                            <Link to="#">Men Perfume</Link>
                            <Link to="#">Female Perfume</Link>
                            <Link to="#">Unisex Perfume</Link>
                        </div>
                    )}
                </li>

                {/* Hair Straighteners */}
                <li 
                    onMouseEnter={() => setIsHairStraightenerOpen(true)} 
                    onMouseLeave={() => setIsHairStraightenerOpen(false)}
                >
                    Hair Straighteners
                    {isHairStraightenerOpen && (
                        <div className="dropdown">
                            <Link to="#">Straighteners</Link>
                            <Link to="#">Dryers</Link>
                        </div>
                    )}
                </li>

                {/* Body Lotion */}
                <li 
                    onMouseEnter={() => setIsBodyLotionOpen(true)} 
                    onMouseLeave={() => setIsBodyLotionOpen(false)}
                >
                    Body Lotion
                    {isBodyLotionOpen && (
                        <div className="dropdown">
                            <Link to="#">Lotions</Link>
                            <Link to="#">SPF Lotion</Link>
                            <Link to="#">Anti-Aging Lotion</Link>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
