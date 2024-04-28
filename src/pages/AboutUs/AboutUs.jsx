import Owner from "../../components/Owner/Owner"
import OurTeam from "../../components/OurTeam/OurTeam"
import Talkus from "../../components/Talkus/Talkus"
import BgAbout from "../../components/BgAbout/BgAbout"
import TitleTeam from "../../components/TitleTeam/TitleTeam"
import "../../components/OurTeam/OurTeam.scss"
import { useEffect, useState } from "react";
import axios from "axios";
function AboutUs() {
    const [Team, setTeam] = useState([]);
    useEffect(() => {
        axios("http://localhost:3004/Team").then((data) => setTeam(data.data));
    }, []);
    return (
        <div>
            <BgAbout />
            <Owner />
            <div className="row-team">
                <TitleTeam />
                <div className="row row_team justify-content-center">
                    {Team.map((Team, index) => {
                        return (

                            <OurTeam key={index} Team={Team} />
                        )
                    })} </div>
            </div>
            <Talkus />
        </div>
    )
}
export default AboutUs