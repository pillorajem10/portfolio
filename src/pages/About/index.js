import React, { useEffect } from 'react';

//aos animation
import Animation from 'aos';
import 'aos/dist/aos.css';

const Page = () => {
  useEffect(() => {
    Animation.init({ duartion: 1000 });
  }, []);

  return (
    <>
      <div className="main-container">
        <div data-aos="zoom-in" className= "about-container">
          <p className="container-title">About Me</p>
          <p>
            I am a 20 yr old freshman college of AMA University, I study full-stack web development for it is what I enjoy doing. I aspire to be a web developer in the near future so as to achieve my ever-growing passion for web development, it would also allow me to work in a corporation of my choice.
          </p>
        </div>
      </div>
    </>
  )
}

export default Page;
