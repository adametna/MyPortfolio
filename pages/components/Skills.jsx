import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/router";
import { en, fr } from "../public/translation";
import React from 'react'

export const Skills = () => {
  const responsive = {
    superlargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <section className="skill" id="skills">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>{t.skills}</h2>
              <p>{t.description2}</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <i class="devicon-html5-plain-wordmark colored"></i>
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <i class="devicon-css3-plain-wordmark colored"></i>
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <i class="devicon-typescript-plain colored"></i>
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <i class="devicon-express-original-wordmark colored"></i>
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <i class="devicon-react-original colored"></i>
                  <h5>React</h5>
                </div>
                <div className="item">
                  <i class="devicon-nextjs-original-wordmark"></i>
                  <h5>NextJS</h5>
                </div>
                <div className="item">
                  <i class="devicon-mongodb-plain-wordmark colored"></i>
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <i class="devicon-vscode-plain colored"></i>
                  <h5>VSCode</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
