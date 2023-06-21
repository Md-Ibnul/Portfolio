import { Link } from 'react-router-dom';
import './project.css';
import {BsGithub, BsArrowUpRight} from 'react-icons/bs'

const Projects = () => {
    return (
        <div className='my-container'>
            <div className='text-right me-auto'>
                <h4 className='pro-header font-Gilroy uppercase inline' >My Projects</h4>
            </div>
            <div className='w-full md:w-8/12 mx-auto mt-10 md:mt-20'>
                <div className='md:flex items-center gap-20'>
                    <div className='w-full md:w-1/2 mx-auto'>
                        <div className='project-site mx-auto'>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 mt-10 md:mt-0'>
                        <div className='text-center'>
                            <h5 className='font-Gilroy font-extrabold text-xl uppercase'>Fluengo 👨‍🎓</h5>
                            <p className='font-Montserrat text-lg text-slate-700 mt-4 text-center'>The website consists of three dashboards. one for students, one for instructors, and one for the admin. Each dashboard has specific functionalities and access restrictions.</p>
                            <div className='mt-8 md:flex gap-4'>
                                <button className='tools-name font-Gilroy font-semibold m-3 md:m-0'>Tailwind</button>
                                <button className='tools-name font-Gilroy font-semibold'>React</button>
                                <button className='tools-name font-Gilroy font-semibold'>MongoDB</button>
                            </div>
                            <div className='mt-4 flex items-center justify-between'>
                                <Link className='font-Montserrat font-bold'>Client <BsGithub className='inline ms-2'/></Link>
                                <Link className='font-Montserrat font-bold'>Server <BsGithub className='inline ms-2'/></Link>
                                <Link className='font-Montserrat font-bold'>Live Demo <BsArrowUpRight className='inline ms-2'/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20 mt-20'>
                    <div className='w-full md:w-1/2'>
                        <div className='text-center'>
                            <h5 className='font-Gilroy font-extrabold text-xl uppercase'>ToyVerse 🦸‍♂️</h5>
                            <p className='font-Montserrat text-lg text-slate-700 mt-4 text-center'>Tot Verse is a dynamic and interactive toy selling website. The website offers a user-friendly interface for customers to browse, search, and purchase a wide range of toys.</p>
                            <div className='mt-8 md:flex gap-4'>
                                <button className='tools-name font-Gilroy font-semibold m-3 md:m-0'>Tailwind</button>
                                <button className='tools-name font-Gilroy font-semibold'>React</button>
                                <button className='tools-name font-Gilroy font-semibold'>MongoDB</button>
                            </div>
                            <div className='mt-4 flex items-center justify-between'>
                                <Link className='font-Montserrat font-bold'>Client <BsGithub className='inline ms-2'/></Link>
                                <Link className='font-Montserrat font-bold'>Server <BsGithub className='inline ms-2'/></Link>
                                <Link className='font-Montserrat font-bold'>Live Demo <BsArrowUpRight className='inline ms-2'/></Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 mx-auto'>
                        <div className='project-site2 mx-auto'>
                        </div>
                    </div>
                </div>
                <div className='md:flex items-center gap-20 mt-20'>
                    <div className='w-full md:w-1/2 mx-auto'>
                        <div className='project-site3 mx-auto'>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 mt-10 md:mt-0'>
                        <div className='text-center'>
                            <h5 className='font-Gilroy font-extrabold text-xl uppercase'>Ranna 👨‍🍳</h5>
                            <p className='font-Montserrat text-lg text-slate-700 mt-4 text-center'>Ranna is a dedicated recipe book website exclusively showcasing the delicious flavors of different countries.</p>
                            <div className='mt-8 md:flex gap-4'>
                                <button className='tools-name font-Gilroy font-semibold m-3 md:m-0'>Tailwind</button>
                                <button className='tools-name font-Gilroy font-semibold'>React</button>
                                <button className='tools-name font-Gilroy font-semibold'>MongoDB</button>
                            </div>
                            <div className='mt-4 flex items-center justify-between'>
                                <Link className='font-Montserrat font-bold'>Client <BsGithub className='inline ms-2'/></Link>
                                <Link className='font-Montserrat font-bold'>Server <BsGithub className='inline ms-2'/></Link>
                                <Link className='font-Montserrat font-bold'>Live Demo <BsArrowUpRight className='inline ms-2'/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;