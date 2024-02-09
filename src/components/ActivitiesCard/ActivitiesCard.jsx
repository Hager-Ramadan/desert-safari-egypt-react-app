import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function BasicExample(Tours) {
    return (
        // <Link to={Tours.Tours.href} >
        <Card className="col-lg-4 col-md-6 col-sm-12 activi-card" style={{ width: '25.5rem', borderRadius: "0", borderWidth: "0", padding: "0" }}>
            <Card.Img variant="top" src={Tours.Tours.image} style={{ borderRadius: "0", width: "25.5rem" }} />
            <Card.Body style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
                <Card.Title style={{ color: "#a47e3b", fontSize: "18px", fontWeight: "600" }}>{Tours.Tours.type}</Card.Title>
                <Card.Text style={{ padding: "0", textAlign: "center", color: "#115288" }}>
                    <h3 style={{ color: "#115288", fontSize: "26px", fontWeight: "700" }}> {Tours.Tours.name}</h3>
                    <p style={{ color: "#115288", padding: "0", fontSize: "16px", fontFamily: "serif" }}>{Tours.Tours.duration}</p>
                </Card.Text>
            </Card.Body>
        </Card>
        // </Link>
    );
}

export default BasicExample;