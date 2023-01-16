import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import "animate.css";
import { en, fr } from "../public/translation";
import { useRouter } from "next/router";

export const Projects = () => {
  const ProjectItem = ({ title, description, image }) => {
    return (
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={image} className="proj-img" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>
    );
  };
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>{t.projects}</h2>
              <p>{t.description3}</p>
              <div className="project-item">
                <ProjectItem
                  title={"My API"}
                  description={t.myapi}
                  image={"../assets/code.png"}
                />
                <ProjectItem
                  title={"My Website"}
                  description={t.mywebsite}
                  image={"../assets/ecommerce.png"}
                />
                <ProjectItem
                  title={"My Portfolio"}
                  description={t.myportfolio}
                  image={"../assets/portfolio.png"}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
