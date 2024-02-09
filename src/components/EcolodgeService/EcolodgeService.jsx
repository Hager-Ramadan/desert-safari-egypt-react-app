import './EcolodgeService.scss'
import Service from '../Servicesp/Service'
import { useEffect, useState } from "react";
import axios from "axios";

function EcolodgeService() {
    const [service, setService] = useState([]);
    useEffect(() => {
        axios("http://localhost:3004/service").then((data) => setService(data.data));
    }, []);
    return (
        <div>
            <div className="row ecolodge-row gx-0 m-0">
                <div className="col-lg-8 col-md-12 camp">
                    <h1>Omar Desert Camp</h1>
                    <p>
                        Far from civilization, we built ‘Omar Desert Camp’ about
                        5km away from Bawiti town, the capital of Bahariya
                        Oasis, to be at the perfect place back to the nature
                        surrounded by mountains, gardens, salt lake, hot springs
                        to taste the meaning of simple life and experience
                        Bedouin way of living.
                    </p>
                    <p>
                        Built on a 5 hectares of land offering unique dome
                        shaped room featuring the touch of traditional Bedouin
                        design. All rooms in ‘Omar Desert Camp’ come in single
                        bed, double bed with ensuite bathroom. For outdoor
                        lovers, guest can pitch their own tent and enjoy a
                        wonderful quiet starry night just within ‘Omar Desert
                        Camp’ compound.
                    </p>
                    <p>
                        At ‘Omar Desert Camp’, you can experience staying like a
                        local Bedouin. Our in-house restaurant serve traditional
                        cooked Bedouin food using freshly grown vegetables and
                        herbs from our garden.
                    </p>
                    <p>
                        For those who do not have time joining our long desert
                        safari trip, guest can have a relaxing dip in the cold
                        spring and hot spring located just nearby 2km from our
                        ecolodge ‘Omar Desert Camp’. Apart from this, guest can
                        opt for local tours around Bahariya Oasis, too.
                    </p>
                </div>
                <div className="col-lg-4 col-md-12 service">
                    <ul>
                        <li>
                            <h3>Our services</h3>
                        </li>
                    </ul>
                    {service.map((service, index) => {
                        return (
                            <Service key={index} service={service} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default EcolodgeService
