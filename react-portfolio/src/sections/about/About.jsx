import "./about.css";
import Avatar1 from "../../assets/avatar1.jpg";
import CV from "../../assets/cv.pdf";
import Card from "../../components/Card";
import data from "./data";
import { HiDownload } from "react-icons/hi";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={Avatar1} alt="About Me" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__card">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Coding has become a passion of mine next to making people happy,
            I've been in the customer service industry since I was 15, enjoying
            making people smile from preparing their orders, and signing them up
            for gym memberships to washing their windows in their homes. I'll
            always prefer a face to face interaction to online meeetings.
          </p>
          <p>
            Hi, my name is Daniel Celaya from Austin, Texas. I'm currently
            learning full-stack web development with a coding bootcamp. My top
            priority is to help my family with my sister with special needs and
            to do that I'll have to become someone that my family can look up
            to.
          </p>
          <a href={CV} download className="btn primary">
            Download CV
            <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
