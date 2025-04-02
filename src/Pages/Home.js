// src/Pages/Home.js

import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Import react-slick and its CSS
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Home.css for other styles
import "./Home.css";

// Import the HeroBanner component (ensure the relative path is correct)
import HeroBanner from "../components/HeroBanner";

function Home() {
  const settings = {
    dots: true,
    infinite: true,    // allows looping
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true       // show arrow navigation
  };

  return (
    <>
      {/* Render the separate HeroBanner component at the top */}
      <HeroBanner />

      {/* Multi-Item Carousel Section */}
      <Container fluid className="py-4">
        <Slider {...settings}>
          {/* CARD #1: Presenting Complaints */}
          <div>
            <Card className="mx-2">
              <Card.Img
                variant="top"
                src="/Images/Presentingcomplaint.jpg"
                alt="Presenting Complaints"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>Presenting Complaints</Card.Title>
                <Card.Text>
                  Explore 130+ presenting complaints...
                </Card.Text>
                <Button variant="primary" href="/presenting">
                  Go to Complaints
                </Button>
              </Card.Body>
            </Card>
          </div>

          {/* CARD #2: Condition Follow-up */}
          <div>
            <Card className="mx-2">
              <Card.Img
                variant="top"
                src="/Images/condition-follow-up.jpg"
                alt="Condition Follow-up"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>Condition Follow-up</Card.Title>
                <Card.Text>
                  Master common chronic conditions with follow-up plans.
                </Card.Text>
                <Button variant="primary" href="/condition-follow-up">
                  Go to Conditions
                </Button>
              </Card.Body>
            </Card>
          </div>

          {/* CARD #3: Diagnostic Cases */}
          <div>
            <Card className="mx-2">
              <Card.Img
                variant="top"
                src="/Images/diagnostic.jpg"
                alt="Diagnostic Cases"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>Diagnostic Cases</Card.Title>
                <Card.Text>
                  Practice unseen cases requiring clinical reasoning and diagnosis.
                </Card.Text>
                <Button variant="primary" href="/diagnostic">
                  Go to Diagnostic
                </Button>
              </Card.Body>
            </Card>
          </div>

          {/* CARD #4: Test & Discharge Follow-up */}
          <div>
            <Card className="mx-2">
              <Card.Img
                variant="top"
                src="/Images/test-results.jpeg"
                alt="Test & Discharge Follow-up"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>Test & Discharge Follow-up</Card.Title>
                <Card.Text>
                  Handle results and discharge discussions with empathy...
                </Card.Text>
                <div className="d-flex gap-2">
                  <Button variant="primary" href="/tests">
                    View Tests
                  </Button>
                  <Button variant="secondary" href="/discharge">
                    View Discharges
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          {/* CARD #5: Ethics */}
          <div>
            <Card className="mx-2">
              <Card.Img
                variant="top"
                src="/Images/ethics.jpeg"
                alt="Ethics"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>Ethics</Card.Title>
                <Card.Text>
                  Solidify your approach to ethical dilemmas and standards.
                </Card.Text>
                <Button variant="primary" href="/ethics">
                  Go to Ethics
                </Button>
              </Card.Body>
            </Card>
          </div>

          {/* CARD #6: Counseling */}
          <div>
            <Card className="mx-2">
              <Card.Img
                variant="top"
                src="/Images/counseling.jpg"
                alt="Counseling"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>Counseling</Card.Title>
                <Card.Text>
                  Best practices for patient communication and counseling.
                </Card.Text>
                <Button variant="primary" href="/counseling">
                  Go to Counseling
                </Button>
              </Card.Body>
            </Card>
          </div>

          {/* CARD #7: Practicals */}
          <div>
            <Card className="mx-2">
              <Card.Img
                variant="top"
                src="/Images/practical.jpg"
                alt="Practicals"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>Practicals</Card.Title>
                <Card.Text>
                  Gain hands-on experience with essential clinical skills...
                </Card.Text>
                <Button variant="primary" href="/practicals">
                  Go to Practicals
                </Button>
              </Card.Body>
            </Card>
          </div>

          {/* CARD #8: Payment */}
          <div>
            <Card className="mx-2">
              <Card.Img
                variant="top"
                src="/Images/payment.jpg"
                alt="Payment"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>Payment</Card.Title>
                <Card.Text>
                  Complete your purchase securely using our payment gateway.
                </Card.Text>
                <Button variant="primary" href="/payment">
                  Go to Payment
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Slider>
      </Container>
    </>
  );
}

export default Home;










