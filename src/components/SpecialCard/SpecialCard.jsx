import "./SpecialCard.scss"
// import { FaUserEdit } from "react-icons/fa";
// import { FaEarthAfrica } from "react-icons/fa6";
// import { LiaCertificateSolid } from "react-icons/lia";
// import { FaBed } from "react-icons/fa";
// import { FaCar } from "react-icons/fa";



function SpecialCard(Special) {
    return (
        <div className="card-special">
            <div> <img width="50" height="50" src={Special.special.icon} alt="car" /> </div>
            <div>
                <h3>{Special.special.name}</h3>
                <p>{Special.special.content} </p>
            </div>

        </div>
    )
}
export default SpecialCard