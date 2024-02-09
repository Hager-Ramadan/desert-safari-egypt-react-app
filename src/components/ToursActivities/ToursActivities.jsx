import "./ToursActivities.scss"
import { IoMoon } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

function ToursActivities(safari) {
    console.log(safari.safari.place)
    return (
        <div id={safari.safari.href}>
            <div className="row g-5">
                <div className="col-lg-5 col-md-12 tour-card">
                    <div>
                        <h3>{safari.safari.type}</h3>
                        <h2>{safari.safari.name}</h2>

                        {safari.safari.description.map((p) => {
                            return (
                                <p>{p}</p>
                            )
                        })}
                    </div>
                    <div>
                        <h5>Tour schedule :</h5>
                        <p><IoMoon /> {safari.safari.schedule}</p>
                    </div>
                    <div className="places">
                        <h5>Places you can visit :</h5>
                        <ul>
                            {safari.safari.place.map((e) => {
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
        </div>
    )

}
export default ToursActivities