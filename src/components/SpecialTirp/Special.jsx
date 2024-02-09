import "./Special.scss"
import SpecialCard from "../SpecialCard/SpecialCard"
import { useEffect, useState } from "react";
import axios from "axios";
function SpecialTrip() {
    const [special, setSpecial] = useState([]);
    useEffect(() => {
        axios("http://localhost:3004/special").then((data) => setSpecial(data.data));
    }, []);
    return (
        <div>
            {/* <div className="overlay"> </div> */}
            <div className="row-special d-flex">
                <div className="col-lg-6 col-md-12 pb-5">
                    <h3>Why choose Desert Safari Egypt?</h3>
                    <h1>What’s Special About Hamada Trip?</h1>
                </div>
                <div className="cards col-lg-6 col-md-12">
                    {special.map((special, index) => {
                        return (
                            <SpecialCard key={index} special={special} />
                        )
                    })}
                </div>
            </div></div>
    )

}
export default SpecialTrip