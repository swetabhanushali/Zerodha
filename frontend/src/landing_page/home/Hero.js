import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function Hero() {
    const navigate = useNavigate(); 

    const handleSignupClick = () => {
        navigate('/signup'); 
    };

    return (  
        <div className='container p-5 mb-5'>
            <div className='row text-center justify-content-center'>
                <img 
                  src='/media/images/homeHero.png' 
                  alt='Hero Image' 
                  className='mb-5 img-fluid' 
                  style={{ maxHeight: '300px', objectFit: 'contain' }} 
                />
                <h1 className='mt-5'>Invest in everything</h1>   
                <p>
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>
                <button 
                    className='btn btn-primary fs-5 mt-3'
                    style={{ minWidth: "200px", maxWidth: "90%", width: "25%" }}
                    onClick={handleSignupClick} 
                >
                    Sign up now
                </button>
            </div>
        </div>
    );
}

export default Hero;
