import { Link } from 'react-router-dom';
import './project.css';
import {BsGithub, BsArrowUpRight} from 'react-icons/bs'
import { useEffect } from 'react';
import Aos from 'aos';
import { Slide } from 'react-awesome-reveal';

const Projects = () => {
    useEffect(() => {
        Aos.init({duration:500, easing: 'ease'})
    },[])
    return (
        <div id='projects' className='my-container'>
            <div className='text-right me-auto'>
                <Slide direction='right'>
                <h4 className='pro-header font-Gilroy uppercase inline dark:text-white' >My Projects</h4>
                </Slide>
            </div>
            <div className='w-full md:w-8/12 mx-auto mt-10 md:mt-20'>
                <div className='md:flex items-center gap-20'>
                    <div className='w-full md:w-1/2 mx-auto' data-aos="zoom-in" data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                        <div className='project-site mx-auto'>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 mt-10 md:mt-0'>
                        <div className='text-center' data-aos="fade-up" data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                            <h5 className='font-Gilroy font-extrabold text-xl uppercase dark:text-white'>Fluengo 👨‍🎓</h5>
                            <p className='font-Montserrat text-lg text-slate-700 mt-4 text-center dark:text-white'>The website consists of three dashboards. one for students, one for instructors, and one for the admin. Each dashboard has specific functionalities and access restrictions.</p>
                            <div className='mt-8 lg:flex gap-4'>
                                <button className='tools-name font-Gilroy font-semibold m-3 lg:m-0'>Tailwind</button>
                                <button className='tools-name font-Gilroy font-semibold'>React</button>
                                <button className='tools-name font-Gilroy font-semibold m-3 lg:m-0'>MongoDB</button>
                            </div>
                            <div className='mt-4 flex items-center justify-between dark:text-white'>
                                <Link to="https://github.com/Md-Ibnul/Fluengo-client" className='font-Montserrat font-bold' target='_blank'>Client <BsGithub className='inline ms-2'/></Link>
                                <Link to='https://github.com/Md-Ibnul/Fluengo-server' target='_blank' className='font-Montserrat font-bold'>Server <BsGithub className='inline ms-2'/></Link>
                                <Link to="https://fluengo-e9ddd.web.app/" target='_blank' className='font-Montserrat font-bold'>Live Demo <BsArrowUpRight className='inline ms-2'/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20 mt-20'>
                    <div className='w-full md:w-1/2'>
                        <div className='text-center' data-aos="fade-up" data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                            <h5 className='font-Gilroy font-extrabold text-xl uppercase dark:text-white'>ToyVerse 🦸‍♂️</h5>
                            <p className='font-Montserrat text-lg text-slate-700 mt-4 text-center dark:text-white'>Tot Verse is a dynamic and interactive toy selling website. The website offers a user-friendly interface for customers to browse, search, and purchase a wide range of toys.</p>
                            <div className='mt-8 lg:flex gap-4'>
                                <button className='tools-name font-Gilroy font-semibold m-3 lg:m-0'>Tailwind</button>
                                <button className='tools-name font-Gilroy font-semibold'>React</button>
                                <button className='tools-name font-Gilroy font-semibold m-3 lg:m-0'>MongoDB</button>
                            </div>
                            <div className='mt-4 flex items-center justify-between dark:text-white'>
                                <Link to="https://github.com/Md-Ibnul/Toy-Verse-Client" target='_blank' className='font-Montserrat font-bold'>Client <BsGithub className='inline ms-2'/></Link>
                                <Link to='https://github.com/Md-Ibnul/Toy-Verse-Server' target='_blank' className='font-Montserrat font-bold'>Server <BsGithub className='inline ms-2'/></Link>
                                <Link to='https://toys-verse.web.app/' target='_blank' className='font-Montserrat font-bold'>Live Demo <BsArrowUpRight className='inline ms-2'/></Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 mx-auto' data-aos="zoom-in" data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                        <div className='project-site2 mx-auto'>
                        </div>
                    </div>
                </div>
                <div className='md:flex items-center gap-20 mt-20'>
                    <div className='w-full md:w-1/2 mx-auto' data-aos="zoom-in" data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                        <div className='project-site3 mx-auto'>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 mt-10 md:mt-0'>
                        <div className='text-center' data-aos="fade-up" data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                            <h5 className='font-Gilroy font-extrabold text-xl uppercase dark:text-white'>Ranna 👨‍🍳</h5>
                            <p className='font-Montserrat text-lg text-slate-700 mt-4 text-center dark:text-white'>Ranna is a dedicated recipe book website exclusively showcasing the delicious flavors of different countries.</p>
                            <div className='mt-8 lg:flex gap-4'>
                                <button className='tools-name font-Gilroy font-semibold m-3 lg:m-0'>Tailwind</button>
                                <button className='tools-name font-Gilroy font-semibold '>React</button>
                                <button className='tools-name font-Gilroy font-semibold m-3 lg:m-0'>MongoDB</button>
                            </div>
                            <div className='mt-4 flex items-center justify-between dark:text-white'>
                                <Link to='https://github.com/Md-Ibnul/Ranna-client' target='_blank' className='font-Montserrat font-bold'>Client <BsGithub className='inline ms-2'/></Link>
                                <Link to='https://github.com/Md-Ibnul/Ranna-server' target='_blank' className='font-Montserrat font-bold'>Server <BsGithub className='inline ms-2'/></Link>
                                <Link to='https://ranna-e1bfa.web.app/' target='_blank' className='font-Montserrat font-bold'>Live Demo <BsArrowUpRight className='inline ms-2'/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;