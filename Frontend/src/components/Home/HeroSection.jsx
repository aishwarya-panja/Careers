import { FaSuitcase, FaBuilding, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];

  return (
    <div className="heroSection">
      <div className="container">
        <div className="title">
          <h2>
            At CAREERS,
            <br />
            Find a Job that suits your Interests and Skills!
          </h2>
          <p>
            Looking for your dream job or the perfect candidate? You have come to
            the right place! At CAREERS, we connect talented
            professionals with top employers across various industries. Whether
            you are a job seeker aiming to take the next step in your career or
            an employer seeking the ideal candidate, we are here to make the
            process seamless and efficient.
          </p>
        </div>
        <div className="image">
          <img src="/herosec2.png" alt="hero" />
        </div>
      </div>
      <div className="details">
        {details.map((element) => {
          return (
            <div className="card" key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="content">
                <p>{element.title}</p>
                <p>{element.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
