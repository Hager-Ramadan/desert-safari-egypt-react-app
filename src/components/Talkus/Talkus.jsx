import "./Talkus.scss"
import { Link } from "react-router-dom"
function Talkus() {
    return (
        <div>
            <div className="talk-us pb-5">
                <h2>Let’s Talk With Us</h2>
                <p>To make a reservation or receive more information, please do not hesitate to contact us.</p>
                <div className="contact-btn"> <Link className="contact-button" to={"/contact-us"}>Contact Us </Link></div>

            </div>
        </div>
    )

}

export default Talkus