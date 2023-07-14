// import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./footer.css";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { useEffect, useRef } from "react";
import Aos from "aos";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import Wave from "react-wavify";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rpbrjxd",
        "template_b5zq8bj",
        form.current,
        "OPpO2p4OvBTc0jQ6t"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Successfully sent!')
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    Aos.init({ duration: 500, easing: "ease" });
  }, []);
  return (
    <div id="contact" className="mt-10">
     <Wave fill='#000'
     className="pt-10 relative top-3 z-20 mobile-wave"
        paused={false}
        options={{
          height: 10,
          amplitude: 40,
          speed: 0.30,
          points: 7
        }}
  />
    <div  className="footer text-center">
      <div className="absolute z-30">
        <h4
          className="foot-header font-Gilroy uppercase text-white"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Contact
        </h4>
        <div>
          <Slide>
            <h5 className=" font-Montserrat text-lg font-semibold uppercase tracking-widest text-white">{`DON'T BE SHY! HIT ME UP 👇`}</h5>
          </Slide>
          <div></div>
        </div>
        <div className="">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mt-12 text-left">
              <div className=" text-gray-100 px-8">
                <div className="w-full">
                  <span className="uppercase text-sm text-gray-600 font-bold">
                    Full Name
                  </span>
                  <input
                    className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder=""
                    name="user_name"
                  />
                </div>
                <div className="mt-8">
                  <span className="uppercase text-sm text-gray-600  font-bold">
                    Email
                  </span>
                  <input
                    className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    name="user_email"
                  />
                </div>
                <div className="mt-8">
                  <span className="uppercase text-sm text-gray-600 font-bold">
                    Message
                  </span>
                  <textarea
                    className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    name="message"
                  ></textarea>
                </div>
                <div className="mt-8">
                  <input
                    className="uppercase text-sm font-bold tracking-wide bg-gray-800 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline text-center cursor-pointer"
                    type="submit"
                    value="Send Message"
                  />
                </div>
              </div>
            </div>
          </form>
          <Toaster 
      position="bottom-center"
      reverseOrder={true}/>
          <div className="relative flex mt-5 items-center w-5/6 mx-auto">
            <div className="flex-grow border-t border-gray-800"></div>
            <span className="flex-shrink mx-4 text-gray-800">Or</span>
            <div className="flex-grow border-t border-gray-800"></div>
          </div>
          <div className="pt-0 md:pt-10 w-full ms-6 md:ms-8 text-center mx-auto">
            <div className="social-icons">
              <Link
                to="https://github.com/Md-Ibnul"
                rel="noreferrer"
                target={"_blank"}
                className="social-icon social-icon--github"
              >
                <BsGithub />
                <div className="tooltip">Github</div>
              </Link>
              <Link
                to="https://www.facebook.com/ibnul.hasan.0"
                rel="noreferrer"
                target={"_blank"}
                className="social-icon social-icon--facebook"
              >
                <FaFacebookF />
                <div className="tooltip">Facebook</div>
              </Link>
              <Link
                to="https://twitter.com/"
                rel="noreferrer"
                target={"_blank"}
                className="social-icon social-icon--twitter"
              >
                <FaTwitter />
                <div className="tooltip">Twitter</div>
              </Link>
              <Link
                to="mailto:mdibnulhasan00@gmail.com?body=My custom mail body"
                rel="noreferrer"
                target={"_blank"}
                className="social-icon social-icon--youtube"
              >
                <SiGmail />
                <div className="tooltip">Gmail</div>
              </Link>
              <Link
                to="https://www.linkedin.com/in/mdibnulhasan"
                rel="noreferrer"
                target={"_blank"}
                className="social-icon social-icon--instagram"
              >
                <FaLinkedinIn />
                <div className="tooltip">Linkedin</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center px-3">
          <p className="font-Montserrat text-gray-300 tracking-widest">
            Copyright &#169; 2023 -Md. Ibnul Hasan - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
