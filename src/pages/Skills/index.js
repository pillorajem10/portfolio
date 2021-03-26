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
          data.skills.map(skill =>
            <>
              <div data-aos="zoom-in" className="skills-container">
                <img className="skill_image" src={skill.images} alt={skill.name}/>
                <div className="skill_name">{skill.name}</div>
              </div>
            </>
          )
        }
      </div>
    </>
  )
}

export default Page;
