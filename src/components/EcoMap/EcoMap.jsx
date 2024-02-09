import { Link } from "react-router-dom"
import './EcoMap.scss'
function EcoMap() {
    return (
        <div>
            <div className="eco-map d-flex justify-content-center pb-3">
                <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d224695.8075918682!2d28.9964217!3d28.3627194!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x145d4b80ee7ea34d%3A0xeb0424960986f310!2zT21hciBEZXNlcnQgQ2FtcCBVbm5hbWVkIFJvYWQsINin2YTYrNmK2LLYqdiMIEdpemEgR292ZXJub3JhdGUgMTI5MzUg44Ko44K444OX44OI4oCt!3m2!1d28.3627194!2d28.9964217!5e0!3m2!1sar!2seg!4v1706494906542!5m2!1sar!2seg" width="1200" height="350" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="eco-btn">
                <div className="btn-book"> <span> <Link to={"/contact-us"}> Book Now </Link></span></div>

            </div>
        </div>
    )
}
export default EcoMap