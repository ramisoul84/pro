import profileReact from "../assets/profile-react.jpg";
import profile from "../assets/profile.jpg";
import crypto from "../assets/crypto.jpg";
import "./projects.css";

const data = [
  {
    id: 1,
    image: profileReact,
    title: "Profile: (React)",
    github: "https://github.com/ramisoul84/profile",
    demo: " https://ramisoul84.github.io/profile/",
  },
  {
    id: 2,
    image: profile,
    title: "Profile: (HTML-CSS-JS)",
    github: "https://github.com/ramisoul84/profile",
    demo: " https://ramisoul84.github.io/profile/",
  },
  {
    id: 3,
    image: crypto,
    title: "Symmetric cryptography",
    github: "https://github.com/ramisoul84/profile",
    demo: " https://ramisoul84.github.io/profile/",
  },
];

const Projects = () => {
  const projects = data.map((item) => {
    return (
      <div className="project-item">
        <img src={item.image} className="project-img" />
        <h2>{item.title}</h2>
        <div className="project-btns">
          <a href={item.github} download>
            <button className="project-btn">GitHup</button>
          </a>
          <a href={item.demo} download>
            <button className="project-btn">Demo</button>
          </a>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="title">
        <h5>some of</h5>
        <h2>My Projects</h2>
      </div>
      <div className="projects-container">{projects}</div>
    </section>
  );
};
export default Projects;