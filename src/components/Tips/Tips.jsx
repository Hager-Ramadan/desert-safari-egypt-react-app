import "./Tips.scss"
import Accordion from 'react-bootstrap/Accordion';

function AllCollapseExample() {
    return (
        <div className="pb-3">
            <div>
                <h2 style={{
                    textAlign: "center", fontSize: "42px", fontWeight: "600", textTransform: " none", margin: " 1.5em 0 1.5em",
                    color: "#115288", lineHeight: "1.1",
                }} > Travelling Tips</h2>
            </div >
            <Accordion style={{ padding: " 0 14rem" }}>
                <Accordion.Item eventKey="0" style={{ border: "none", borderRadius: "0", paddingBottom: "12px", }}>
                    <Accordion.Header style={{ color: "#356a9b" }}>Is it safe to visit White Desert in Egypt?</Accordion.Header>
                    <Accordion.Body style={{ paddingLeft: "30px", color: "#356a9b", fontSize: "14px" }}>
                        Yes.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={{ border: "none", borderRadius: "0", paddingBottom: "12px", }}>
                    <Accordion.Header style={{ color: "#356a9b" }}>How far is Black Desert & White Desert from Cairo?</Accordion.Header>
                    <Accordion.Body style={{
                        paddingLeft: "30px", color: "#356a9b", fontSize: "14px"
                    }}>
                        Approx. 370km from Cairo which take 4+ hours by car.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" style={{ border: "none", borderRadius: "0", paddingBottom: "12px", }}>
                    <Accordion.Header style={{ color: "#356a9b", }}>Private tour? </Accordion.Header>
                    <Accordion.Body style={{ paddingLeft: "30px", color: "#356a9b", fontSize: "14px" }}>
                        We arrange only private group for all our guest.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" style={{ border: "none", borderRadius: "0", paddingBottom: "12px", }}>
                    <Accordion.Header style={{ color: "#356a9b" }}>What to bring?</Accordion.Header>
                    <Accordion.Body style={{ paddingLeft: "30px", color: "#356a9b", fontSize: "14px" }}>
                        Travel light and important items to have with you are sunscreen, sunglass, wind breaker/warm cloth, swimwear, headlight/torch.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" style={{ border: "none", borderRadius: "0", paddingBottom: "12px", }}>
                    <Accordion.Header style={{ color: "#356a9b" }}>Can small kids and elderly people join tours?</Accordion.Header>
                    <Accordion.Body style={{ paddingLeft: "30px", color: "#356a9b", fontSize: "14px" }}>
                        Everyone can join. We will arrange places kids and elderly friendly place where whole family can have enjoyable family vacation time together in the beautiful desert safari tour with us.Safety is our number-one priority.

                    </Accordion.Body >
                </Accordion.Item>
                <Accordion.Item eventKey="5" style={{ border: "none", borderRadius: "0", paddingBottom: "12px", }}>
                    <Accordion.Header style={{ color: "#356a9b" }}>How to travel there?</Accordion.Header>
                    <Accordion.Body style={{ paddingLeft: "30px", color: "#356a9b", fontSize: "14px" }}>
                        We arrange private transfers from and back to any place in Cairo.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default AllCollapseExample;