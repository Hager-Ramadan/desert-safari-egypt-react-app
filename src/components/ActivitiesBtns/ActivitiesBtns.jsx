import "./ActivitiesBtns.scss"
import { Link } from "react-router-dom";

function ActivitiesBtns() {
    return (
        <div className="btns">
            <div className="btn-find"> <span><Link to={"/about-us"}> Find Out More</Link></span></div>
            <div className="btn-book"> <span> <Link to={"/contact-us"}> Book Now </Link></span></div>
        </div>
    )

}
export default ActivitiesBtns
