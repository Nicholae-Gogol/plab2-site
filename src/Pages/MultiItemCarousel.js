// src/Pages/MultiItemCarousel.js

import React from "react";
import Slider from "react-slick";
import { Card, Button } from "react-bootstrap";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";

function MultiItemCarousel() {
  // The slick settings object
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,  // how many cards to show at once
    slidesToScroll: 1,
    // nextArrow, prevArrow can be customized, etc.
    // e.g. adaptiveHeight: true
  };

  return (
    <Slider {...settings}>
      {/* Card #1: Presenting Complaints */}
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
            <Card.Text>Explore 130+ presenting complaints...</Card.Text>
            <Button variant="primary" href="/presenting">
              Go to Complaints
            </Button>
          </Card.Body>
        </Card>
      </div>

      {/* Card #2: Condition Follow-up */}
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

      {/* Card #3: Diagnostic Cases */}
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
              Practice unseen cases requiring clinical reasoning...
            </Card.Text>
            <Button variant="primary" href="/diagnostic">
              Go to Diagnostic
            </Button>
          </Card.Body>
        </Card>
      </div>

      {/* Card #4: Test & Discharge Follow-up */}
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
              <Button variant="primary" href="/tests">View Tests</Button>
              <Button variant="secondary" href="/discharge">View Discharges</Button>
            </div>
          </Card.Body>
        </Card>
      </div>

      {/* Card #5: Ethics */}
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
            <Button variant="primary" href="/ethics">Go to Ethics</Button>
          </Card.Body>
        </Card>
      </div>

      {/* Card #6: Counseling */}
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
              Best practices for patient communication...
            </Card.Text>
            <Button variant="primary" href="/counseling">
              Go to Counseling
            </Button>
          </Card.Body>
        </Card>
      </div>

      {/* Card #7: Practicals */}
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
    </Slider>
  );
}

export default MultiItemCarousel;

