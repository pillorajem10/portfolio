import React, { useEffect } from 'react';
import { data } from './data.js';

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
        {
          data.services.map(service =>
            <>
              <div data-aos="zoom-in" className="service-container">
                <div style={{ fontWeight: "bold" }}>{service.name}</div>
                <div style={{ marginTop: 15 }}>{service.icon}</div>
                <div style={{ marginTop: 15 }}>{service.description}</div>
              </div>
            </>
          )
        }
      </div>
    </>
  )
}

export default Page;
