// import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./footer.css";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { useEffect } from "react";
import Aos from "aos";
import { Slide } from "react-awesome-reveal";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 500, easing: "ease" });
  }, []);
  return (
    <div className="footer text-center">
      <div className="absolute z-30">
        <h4
          className="foot-header font-Gilroy uppercase"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Contact
        </h4>
        <div>
          <Slide>
            <h5 className="mt-2 font-Montserrat text-lg font-semibold uppercase tracking-widest">{`DON'T BE SHY! HIT ME UP 👇`}</h5>
          </Slide>
          <div className="social-icons">
            <a href="" className="social-icon social-icon--github">
              <BsGithub />
              <div className="tooltip">Github</div>
            </a>
            <a href="" className="social-icon social-icon--facebook">
              <FaFacebookF />
              <div className="tooltip">Friends:7K</div>
            </a>
            <a href="" className="social-icon social-icon--twitter">
              <FaTwitter />
              <div className="tooltip">Twitter</div>
            </a>
            <a href="" className="social-icon social-icon--youtube">
              <SiGmail />
              <div className="tooltip">Gmail</div>
            </a>
            <a href="" className="social-icon social-icon--instagram">
              <FaLinkedinIn />
              <div className="tooltip">Linkedin</div>
            </a>
          </div>
        </div>
        <hr />
        <div className="mt-6 text-center">
          <p className="font-Montserrat text-gray-300 tracking-widest">Copyright &#169; 2023 -Md. Ibnul Hasan - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
