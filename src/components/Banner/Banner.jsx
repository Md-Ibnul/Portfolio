import './banner.css'
import {BsGithub} from 'react-icons/bs'
import name from '../../assets/name-01.png'
import play from '../../assets/playButton.png'
import banner from '../../assets/RightBanner.png'
import splash from '../../assets/rightSplash.png'
import { Link } from 'react-router-dom'
import { JackInTheBox, Slide } from 'react-awesome-reveal'
const Banner = () => {
    return (
        <div className='pt-20'>
            <div className='my-container'>
            <div className='md:flex '>
                <div className='w-full md:w-1/2'>
                    <div className='splash'>
                        <img  className='w-36' src={splash} alt="" />
                    </div>
                    <div className='short-line mb-3'></div>
                    <h4 className='font-Gilroy font-bold text-3xl mb-2'>Hello, I am 👋</h4>
                    <Slide>
                    <img className='w-[38rem]' src={name} alt="Name" />
                    </Slide>
                    <Slide delay={500}>
                    <p className='banner-line uppercase font-Montserrat'>a developer from <span className='last-word'>Bangladesh.</span></p>
                    </Slide>
                    <Slide delay={900}>
                    <div className="play-btn mt-5 md:mt-16 flex items-center gap-4">
                        <img className='w-[4rem]' src={play} alt="Button" />
                        <p className='banner-btn font-Montserrat'>See my works 👉
                        <Link><BsGithub className='inline ms-2 text-3xl' /></Link>
                        </p>
                    </div>
                    </Slide>
                </div>
                <div className='w-full md:w-1/2'>
                    <JackInTheBox>
                    <div className='banner' >
                        <img className='w-full' src={banner} alt="" />
                    </div>
                    </JackInTheBox>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;