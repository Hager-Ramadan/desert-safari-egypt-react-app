import { useEffect, useState } from "react";
import ActivitiesDetails from "../../components/ActivitiesDetails/ActivitiesDetails"
import ToursActivities from "../../components/ToursActivities/ToursActivities"
import Included from "../../components/Included/Included";
import axios from "axios";
import BgActivities from "../../components/BgActivities/BgActivities";
function Activities() {
    const [safari, setSafari] = useState([]);
    useEffect(() => {
        axios("http://localhost:3004/safari").then((data) => setSafari(data.data));
    }, []);
    return (
        <div>
            <BgActivities />
            <ActivitiesDetails />
            <div className="row-activi">
                <div className="title-tours">
                    <h1>Desert Safari Tour</h1>
                </div>
                {safari.map((safari, index) => {
                    return (
                        <ToursActivities key={index} safari={safari} index={index} />
                    )
                })}
            </div>
            <Included />
        </div>
    )
}
export default Activities
