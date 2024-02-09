import { Link } from "react-router-dom";
import "./Included.scss"
import { IoStarSharp } from "react-icons/io5";

function Included() {
    return (
        <div className="included">
            <div className="activi-title">
                <h2>What Is Included In Our Tour?</h2>
            </div>
            <div>
                <ul>
                    <li><IoStarSharp className="star" />Transfer from and back to any place in Cairo</li>
                    <li><IoStarSharp className="star" />All meals, water and soft drinks</li>
                    <li><IoStarSharp className="star" />4×4</li>
                    <li><IoStarSharp className="star" />Desert tickets</li>
                    <li><IoStarSharp className="star" />Camping equipment</li>
                    <li><IoStarSharp className="star" />Hotels in Bahariya and Siwa Oasis</li>
                </ul>
                <div className="contact">
                    <p>For further information or reservation, please feel free to contact us.</p>
                </div></div>
            <div className="contact-btn"><Link className="contact-button" to={"/contact-us"}>Contact Us </Link></div>

        </div>
    )

}
export default Included