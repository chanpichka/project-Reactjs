import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from "../shared/Subtitle";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import MasonryImagesGallery from "../components/img-gallery/MasonryImagesGallery";
import FeatureTourList from "../components/Feature-tours/FeatureTourList";
import Testimonial from "../components/testimonial/Testimonial";
import Newsletter from "../shared/Newsletter";
// import Fade from 'react-reveal/Fade';
const Home = () => {
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle Subtitle={"Know before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating
                  <span className="highlight"> memories</span>
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">what we serve</h5>
              <h2 className="service__title">we offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle Subtitle={"Explore"} />
              <h2 className="feature__tour-title">Our Feature tours</h2>
            </Col>
            <FeatureTourList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle Subtitle={"Experience"} />
                <h2>
                  with our experience <br /> we will save you
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                  <br />
                  industry. Lorem Ipsum has been the industry's standard dummy
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>SuccessFull Trip</h6>
                </div>
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Regular Clents</h6>
                </div>
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customer tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fan say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </div>
  );
};

export default Home;
