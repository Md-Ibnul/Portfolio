import './tech.css';
import html from '../../assets/Icon/HTML5_.svg'
import css from '../../assets/Icon/CSS3.svg'
import boot from '../../assets/Icon/Bootstrap_logo.svg'
import tailwind from '../../assets/Icon/Tailwind_CSS_Logo.svg'
import js from '../../assets/Icon/_JavaScript_logo_2.svg'
import react from '../../assets/Icon/React-icon.svg'
import fire from '../../assets/Icon/firebase.svg'
import node from '../../assets/Icon/Node.js_logo.svg'
import express from '../../assets/Icon/expressjs_logo.svg'
import mongo from '../../assets/Icon/mongodb-icon-1.svg'
import { useEffect } from 'react';
import Aos from 'aos';
import { Slide } from 'react-awesome-reveal';

const Tech = () => {
    useEffect(() => {
        Aos.init({duration:500, easing: 'ease'})
    },[])
    return (
        <div id='skills' className='my-container'>
            <div>
                <div className="short-line"></div>
                <Slide>
                <h4 className='heading font-Gilroy uppercase dark:text-white'>TECH STACK</h4>
                </Slide>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 mt-16'>
                <div className='tech-card' data-aos="fade-up" data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                    <img className='w-28 relative z-10' src={html} alt="" />
                </div>
                <div className='tech-card' data-aos="fade-up" data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                    <img className='w-20 relative z-10' src={css} alt="" />
                </div>
                <div className='tech-card' data-aos="fade-up" data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                    <img className='w-24 relative z-10' src={boot} alt="" />
                </div>
                <div className='tech-card' data-aos="fade-up" data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                    <img className='w-24 relative z-10' src={tailwind} alt="" />
                </div>
                <div className='tech-card' data-aos="fade-up" data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                    <img className='w-24 relative z-10' src={js} alt="" />
                </div>
                <div className='tech-card' data-aos="fade-up" data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                    <img className='w-24 relative z-10' src={react} alt="" />
                </div>
                <div className='tech-card' data-aos="fade-up" data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                    <img className='w-28 relative z-10' src={fire} alt="" />
                </div>
                <div className='tech-card' data-aos="fade-up" data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                    <img className='w-24 relative z-10' src={node} alt="" />
                </div>
                <div className='tech-card' data-aos="fade-up" data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                    <img className='w-24relative z-10' src={express} alt="" />
                </div>
                <div className='tech-card' data-aos="fade-up" data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                    <img className='w-28 relative z-10' src={mongo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Tech;