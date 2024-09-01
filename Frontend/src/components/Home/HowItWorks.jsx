import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <div className="howitworks">
      <div className="container">
        <h3>HOW CAREERS WORKS</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus />
            <p>Create an Account</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              animi dignissimos voluptatibus quibusdam est non quasi et amet!
              Odit harum repudiandae, aliquid totam officiis officia!
            </p>
          </div>

          <div className="card">
            <MdFindInPage />
            <p>Find a Job/ Post a Job</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              animi dignissimos voluptatibus quibusdam est non quasi et amet!
              Odit harum repudiandae, aliquid totam officiis officia!
            </p>
          </div>

          <div className="card">
            <IoMdSend />
            <p>Create an Account</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              animi dignissimos voluptatibus quibusdam est non quasi et amet!
              Odit harum repudiandae, aliquid totam officiis officia!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
