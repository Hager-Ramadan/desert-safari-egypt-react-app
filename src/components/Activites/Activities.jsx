import "./Activities.scss"
import ActivitiesContent from "../ActivitiesContent/ActivitiesContent"
import BasicExample from "../ActivitiesCard/ActivitiesCard"
import ActivitiesBtns from "../ActivitiesBtns/ActivitiesBtns"
import { useEffect, useState } from "react"
import axios from "axios"
function Activities() {
    const [Tours, setTours] = useState([]);
    useEffect(() => {
        axios("http://localhost:3004/Tours").then((data) => setTours(data.data));
    }, []);

    return (
        <div>
            {/* <div className="overlay"> </div> */}
            <div className="row-activi">
                <div className="row">
                    <ActivitiesContent />
                </div>
                <div className="row d-flex flex-wrap g-5 justify-content-between">
                    {Tours.map((Tours, index) => {
                        return (
                            <BasicExample key={index} Tours={Tours} />
                        )
                    })}
                </div>
                <ActivitiesBtns />
            </div>

        </div>
    )

}
export default Activities