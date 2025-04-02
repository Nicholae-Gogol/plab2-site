import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Pricing.css"; // optional custom styles

const Pricing = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Pricing</h1>
      <Row className="justify-content-center">
        {/* Plan 1 */}
        <Col xs={12} md={6} lg={3} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>1 Month Plan</Card.Title>
              <Card.Text>
                4000+ Exam-Style Questions <br />
                Complete Study Notes <br />
                Revision Notes <br />
                Unlimited Mocks <br />
                Spaced Repetitive Learning
              </Card.Text>
              <h2>£25</h2>
              <Button
                variant="primary"
                onClick={() => handlePlanSelection(34, "3 Months Plan")}
              >
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Plan 2 */}
        <Col xs={12} md={6} lg={3} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>3 Months Plan</Card.Title>
              <Card.Text>
                4000+ Exam-Style Questions <br />
                Complete Study Notes <br />
                Revision Notes <br />
                Unlimited Mocks <br />
                Spaced Repetitive Learning
              </Card.Text>
              <h2>£50</h2>
              <Button
                variant="primary"
                onClick={() => handlePlanSelection(48, "6 Months Plan")}
              >
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Plan 3 */}
        <Col xs={12} md={6} lg={3} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>1 Year Plan</Card.Title>
              <Card.Text>
                4000+ Exam-Style Questions <br />
                Complete Study Notes <br />
                Revision Notes <br />
                Unlimited Mocks <br />
                Spaced Repetitive Learning
              </Card.Text>
              <h2>£100</h2>
              <Button
                variant="primary"
                onClick={() => handlePlanSelection(72, "1 Year Plan")}
              >
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

// Example handler
const handlePlanSelection = (amount, planName) => {
  // You could redirect to your Payment page and pass the plan info
  // Option A: Use React Router's navigate or history
  // Option B: Store the plan details in context, Redux, or local storage
  // Option C: Query params (e.g., /payment?plan=3month&price=34)

  // For example, using query params:
  window.location.href = `/payment?plan=${planName}&price=${amount}`;
};

export default Pricing;
