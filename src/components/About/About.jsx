import './about.css'
import aboutImg from '../../assets/About.png'
import glasses from '../../assets/glasses.png'
import humble from '../../assets/humble.png'
import heart from '../../assets/heartemoji.png'
import crown from '../../assets/crown.png'

const About = () => {
    return (
        <div className='my-container'>
            <div className='md:flex items-center'>
                <div className='w-1/2 about-left'>
                    <div className='glasses'>
                    <img className='w-20' src={glasses} alt="Emoji" />
                    </div>
                    <div className='humble'>
                    <img className='w-20' src={humble} alt="Emoji" />
                    </div>
                    <div>
                        <img className='w-fit' src={aboutImg} alt="Image" />
                    </div>
                    <div className='heart'>
                    <img className='w-20' src={heart} alt="Emoji" />
                    </div>
                    <div className='crown flex items-center gap-3 px-6 py-4 shadow-xl'>
                        <img className='w-14' src={crown} alt="Card" />
                        <p className='font-Montserrat font-bold text-lg'>Web Developer</p>
                    </div>
                </div>
                <div className='w-1/2 left-line'>
                    <div className='ms-20'>
                    <div className="short-line"></div>
                    <h4 className='heading font-Gilroy uppercase mb-4'>About Me 🧑</h4>
                    <p className='font-Montserrat text-lg text-gray-600'>I am a passionate <span className='text-green-800'>MERN Developer</span> with a desire to learn and grow in a collaborative team environment. As a junior MERN Developer, I have a strong grasp of HTML5, CSS3, React.js, Node.js, Express.js, MongoDB, Firebase, and other robust tools, libraries and frameworks. This allows me to develop seamless and efficient web applications for an enhanced user experience. I stay up-to-date with the latest industry trends by exploring cutting-edge technologies like Next.js, TypeScript. By continuously expanding my skill set, I ensure I can deliver innovative solutions.</p>
                    <div className='text-center mt-4'>
                        <button className='my-btn font-Montserrat'>See Resume</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;