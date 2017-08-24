import React, { Component } from "react";
import { Button, Row, Col } from "react-materialize";
import ReactTooltip from "react-tooltip";

class About extends Component {
  render() {
    const imgStyle = {
      display: "block",
      maxWidth: "100%",
      height: "auto"
    };
    const aboutStyle = {
      marginTop: 50,
      padding: "60px 0px"
    };
    const abTitleSt = {
      fontSize: 38,
      color: "#2f3742",
      marginTop: 4
    };
    const contactStyle = {
      fontSize: 20,
      fontWeight: "bold",
      textTransform: "capitalize",
      marginTop: 0,
      marginBottom: 5
    };
    return (
      <section className="about" style={aboutStyle}>
        <div className="container">
          <Row>
            <Col l={4} s={12} className="center">
              <img
                src={
                  "http://www.startaward.it/wp-content/uploads/2016/01/pietro.jpg"
                }
                style={imgStyle}
              />
            </Col>
            <Col l={8} s={12} className="AboutBlock">
              <div className="title" style={{ marginBottom: 20, marginTop: 20 }}>
                <h2 style={abTitleSt}>
                  <span
                    style={{
                      background: "#07cb79",
                      padding: 3,
                      color: "white"
                    }}
                  >
                    {" "}About Me{" "}
                  </span>
                </h2>
              </div>
              <div className="contactBlock">
                <Row>
                  <Col l={4} s={12}>
                    <div style={{ marginTop: 50 }}>
                      <div
                        className="contact-icon"
                        style={{ float: "left", marginRight: 25 }}
                      >
                        <span
                          className="ti-user"
                          style={{ fontSize: 30, lineHeight: "46px" }}
                        />
                      </div>
                      <div className="contact-info">
                        <h4 style={contactStyle}>Name:</h4>
                        <p>Pietro Giordano</p>
                      </div>
                    </div>
                  </Col>
                  <Col l={4} s={12}>
                    <div style={{ marginTop: 50 }}>
                      <div
                        className="contact-icon"
                        style={{ float: "left", marginRight: 25 }}
                      >
                        <span className="ti-email" style={{ fontSize: 30 }} />
                      </div>
                      <div className="contact-info">
                        <h4 style={contactStyle}>Email:</h4>
                        <p>pietrogiordano93@gmail.com</p>
                      </div>
                    </div>
                  </Col>
                  <Col l={4} s={12}>
                    <div style={{ marginTop: 50 }}>
                      <div
                        className="contact-icon"
                        style={{ float: "left", marginRight: 25 }}
                      >
                        <span
                          className="ti-mobile"
                          style={{ fontSize: 30, lineHeight: "46px" }}
                        />
                      </div>
                      <div className="contact-info">
                        <h4 style={contactStyle}>Telegram:</h4>
                        <p>@pretruzz</p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col l={4} s={12}>
                    <div style={{ marginTop: 50 }}>
                      <div
                        className="contact-icon"
                        style={{ float: "left", marginRight: 25 }}
                      >
                        <span
                          className="ti-calendar"
                          style={{ fontSize: 30, lineHeight: "46px" }}
                        />
                      </div>
                      <div className="contact-info">
                        <h4 style={contactStyle}>Date of Birth:</h4>
                        <p>September 11, 1993</p>
                      </div>
                    </div>
                  </Col>
                  <Col l={4} s={12}>
                    <div style={{ marginTop: 50 }}>
                      <div
                        className="contact-icon"
                        style={{ float: "left", marginRight: 25 }}
                      >
                        <span
                          className="ti-location-pin"
                          style={{ fontSize: 30, lineHeight: "46px" }}
                        />
                      </div>
                      <div className="contact-info">
                        <h4 style={contactStyle}>Area:</h4>
                        <p>Rome / Salerno</p>
                      </div>
                    </div>
                  </Col>
                  <Col l={4} s={12}>
                    <div style={{ marginTop: 50 }}>
                      <div
                        className="contact-icon"
                        style={{ float: "left", marginRight: 25 }}
                      >
                        <span
                          className="ti-skype"
                          style={{ fontSize: 30, lineHeight: "46px" }}
                        />
                      </div>
                      <div className="contact-info">
                        <h4 style={contactStyle}>Skype:</h4>
                        <p>pietro..giordano</p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col s={11} l={12}>
                    <p>
                      Hello, my name is <b>Pietro Giordano</b>. I've been a
                      Front-End and Wordpress Developer for <b>4 years</b>. As I
                      am emerging in the programming world, my goal is to create
                      beautiful and scalable projects. <br /> If you have an
                      idea, I can make it happen. Difficult projects are the
                      reason I do this, life isn't fun without challenges!
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </section>
    );
  }
}
class Footer extends React.Component {
  render() {
    const footerStyle = {
      position: "fixed",
      right: 0,
      bottom: 0,
      left: 0,
      padding: "1rem",
      background: "rgb(7, 203, 121)",
      textAlign: "center"
    };
    const socialStyle = {
      fontSize: 20,
      color: "white",
      border: "1px solid white",
      padding: 5
    };
    return (
      <footer style={footerStyle}>
        <div className="container">
          <Row>
            <Col s={3} style={{ position: "relative", top: 15 }}>
              <a
                target="_blank"
                data-tip="My Personal Profile"
                href="https://twitter.com/Pietro_Giordano"
              >
                <span className="ti-twitter" style={socialStyle} />
              </a>
            </Col>
            <Col
              data-tip="All my passions"
              s={3}
              style={{ position: "relative", top: 15 }}
            >
              <a target="_blank" href="https://www.instagram.com/pietruzz/">
                <span className="ti-instagram" style={socialStyle} />
              </a>
            </Col>
            <Col
              data-tip="My Business Profile"
              s={3}
              style={{ position: "relative", top: 15 }}
            >
              <a
                target="_blank"
                href="https://www.linkedin.com/in/giordanopietro/"
              >
                <span className="ti-linkedin" style={socialStyle} />
              </a>
            </Col>

            <Col
              data-tip="All my projects"
              s={3}
              style={{ position: "relative", top: 15 }}
            >
              <a target="_blank" href="https://github.com/pietrodev93">
                <span className="ti-github" style={socialStyle} />
              </a>
            </Col>
            <ReactTooltip />
          </Row>
        </div>
      </footer>
    );
  }
}

export default About;
