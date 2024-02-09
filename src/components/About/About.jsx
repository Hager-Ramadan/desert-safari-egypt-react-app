import "./About.scss"
import AboutImg from "../../Assets/hamada-omer.jpg"
import { Link } from "react-router-dom"
function About() {
    return (
        <div>
            <div className="row about-row gx-0 g-5 m-0">
                <div className="col-lg-7 col-md-12 d-flex flex-column justify-content-between">
                    <div>
                        <h3>About us</h3>
                        <h1>Hamada Omer</h1>
                        <p>I and my family team are from Bahariya Oasis, one of the 5 oasis in Egypt and the closest to Cairo about 350km by car. We arrange tours to the western desert part of Egypt with our traditional Bedouin style and our tours can be by 4×4 vehicle, camels, trekking to Bahariya Oasis, Siwa Oasis, Black Desert, Crystal Mountain, White Desert, Djara Cave, Great Sand Sea Caraween Dunes, Magic Spring, and other attraction places.</p>
                        <p>We do exclusive programs for those who want to spend a longer time in the desert to explore the beauty of our western desert nature and feel the difference. We also organize special program for stargazing, professional photography tours & meditation program.</p>
                    </div>
                    <div className="btn-about"> <span><Link to={"/about-us"}> Find Out More</Link></span></div>
                </div>
                <div className="col-lg-5 col-md-12 about-img">
                    <img src={AboutImg} alt="" />
                </div>
            </div >
        </div>
    )

}
export default About