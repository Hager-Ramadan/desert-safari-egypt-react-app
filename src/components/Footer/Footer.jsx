import "./Footer.scss"
import { Link } from "react-router-dom"
import { FaWhatsapp } from "react-icons/fa";
import { LiaTripadvisor } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import PrivacyPolicy from "../../pages/PrivacyPolicy/PrivacyPolicy";
function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="data-footer">
                    <div>
                        <h3 className="site-name">Desert Safari Egypt</h3>
                        <p>Bawiti Bahariya Oasis Giza Egypt</p>
                        <p>Call Or WhatsApp:</p>
                        <h6 className="name">Hamada Omer</h6>
                        <div className="phone-num">
                            <p><Link to={"https://api.whatsapp.com/send/?phone=201286824751&text&type=phone_number&app_absent=0"} > +20 128 682 4751</Link></p>
                            <p> <Link to={"https://api.whatsapp.com/send/?phone=201550157965&text&type=phone_number&app_absent=0"}> +20 155 015 7965</Link></p>
                        </div>
                        <div className="e-mail">
                            <p><Link to={"mailto:desert-safari-egypte@hotmail.fr"}>desert-safari-egypte@hotmail.fr</Link></p>
                            <p><Link to={"mailto:omar.desert.camp@gmail.com"}>omar.desert.camp@gmail.com</Link></p>
                        </div>
                    </div>
                    <div className="social-contact">
                        <p className="title-social">STAY IN TOUCH</p>
                        <div className="social-wrap">
                            <Link to={"https://api.whatsapp.com/send/?phone=201286824751&text&type=phone_number&app_absent=0"} target="blank" className="whatsapp"><FaWhatsapp /></Link>
                            <Link to={"https://www.facebook.com/people/Desert-Safari-Egypt/100064139797992/"} target="blank" className="facebook"><FaFacebookF /></Link>
                            <Link to={"https://www.instagram.com/desertsafariegypte/"} target="blank" className="instagram"><FaInstagram /></Link>
                            <Link to={"https://www.tripadvisor.com.my/Attraction_Review-g303850-d2457093-Reviews-Desert_Safari_Egypt-Bawiti_Giza_Governorate.html"} target="blank" className="advisor"><LiaTripadvisor /></Link>
                        </div>
                    </div>
                </div>
                <div className="end-footer">
                    <div><p>© 2024 Desert Safari Egypt</p></div>
                    <div><p><Link to={"/privacy-policy"}> Privacy Policy</Link></p></div>
                </div>
            </div>
        </div>
    )

}
export default Footer