import { Card } from "react-bootstrap";


const CardHome = ({ image, title, description }) => {
    return (
      <Card className="mx-5 shadow rounded border-0" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} className="rounded-top" />
        <Card.Body className="text-center">
          <Card.Title className="text-primary">{title}</Card.Title>
          <Card.Text className="text-muted">{description}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

export default CardHome