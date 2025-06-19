import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function Hero() {
    const navigate = useNavigate(); 

    const handleSignupClick = () => {
        navigate('/signup'); 
    };

    return (  
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='/media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>   
                <p>
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>
                <button 
                    className='p-1 btn btn-primary fs-5' 
                    style={{width:"25%", margin:"0 auto"}}
                    onClick={handleSignupClick} 
                >
                    Sign up now
                </button>
            </div>
        </div>
    );
}

export default Hero;
