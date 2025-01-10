import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import weatherAppImage from "../assets/projects/weather-app.png";
import biletickMoviesImage from "../assets/projects/biletick-movies.png";
import muiPizzaImage from "../assets/projects/mui-pizza.png";
import reajtJSRooterImage from "../assets/projects/reajtjs-rooter.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherAppImage}
              isBlog={false}
              title="Weather App"
              description="A React-based application that provides real-time weather updates. Users can search for weather information by city name and view current conditions, forecasts, and more."
              ghLink="https://github.com/Spacs21/Weather-app"
              demoLink="https://weather-app-bekzod21.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={biletickMoviesImage}
              isBlog={false}
              title="Biletick Movies"
              description="An online movie ticket booking platform where users can browse movies, view showtimes, and purchase tickets. The platform offers a user-friendly interface for seamless booking experiences."
              ghLink="https://github.com/Spacs21/Biletick-movies"
              demoLink="https://biletick-movies.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={muiPizzaImage}
              isBlog={false}
              title="MUI Pizza"
              description="A pizza ordering application built with Material-UI components. Users can customize their pizza orders, add toppings, and proceed to checkout with a smooth and responsive design."
              ghLink="https://github.com/Spacs21/MUI-Pizza"
              demoLink="https://mui-pizza.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reajtJSRooterImage}
              isBlog={false}
              title="NORNLIGHT"
              description="A ReactJS routing library that simplifies navigation within React applications. It offers an intuitive API for defining routes and handling navigation events efficiently."
              ghLink="https://github.com/Spacs21/ReajtJS-Rooter"
              demoLink="https://reajt-js-rooter.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
