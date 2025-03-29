// src/Pages/HomeCarousel.js

import React from "react";
import { Carousel } from "react-bootstrap";

function HomeCarousel() {
  return (
    <Carousel>
      {/* SLIDE 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Images/Presentingcomplaint.jpg"
          alt="Presenting Complaints"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Presenting Complaints</h3>
          <p>Explore 130+ presenting complaints with general approach and scenarios.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* SLIDE 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Images/condition-follow-up.jpg"
          alt="Condition Follow-up"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Condition Follow-up</h3>
          <p>Master common chronic conditions with clear structure and follow-up plans.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* SLIDE 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Images/test-results.jpeg"
          alt="Test & Discharge Follow-up"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Test & Discharge Follow-up</h3>
          <p>Handle results and discharge discussions with empathy and clarity.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* ADD MORE SLIDES IF YOU LIKE */}
    </Carousel>
  );
}

export default HomeCarousel;
