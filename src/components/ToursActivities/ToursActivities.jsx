import "./ToursActivities.scss"
import { IoMoon } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

function ToursActivities(props) {
    return (
        <div className={`d-flex row g-5 ${props.index % 2 === 0 ? "flex-row-reverse" : ""}`}>
            <div className="col-lg-5 col-md-12 tour-card">
                <div>
                    <h3>{props.safari.type}</h3>
                    <h2>{props.safari.name}</h2>

                    {props.safari.description.map((p) => {
                        return (
                            <p>{p}</p>
                        )
                    })}
                </div>
                <div>
                    <h5>Tour schedule :</h5>
                    <p><IoMoon /> {props.safari.schedule}</p>
                </div>
                <div className="places">
                    <h5>Places you can visit :</h5>
                    <ul>
                        {props.safari.place.map((e) => {
                            return (
                                <li><IoLocationSharp />{e}</li>
                            )
                        })}

                    </ul>
                </div>
            </div>
            <div className="col-lg-7 col-md-12">
            </div>
        </div>
    )

}
export default ToursActivities