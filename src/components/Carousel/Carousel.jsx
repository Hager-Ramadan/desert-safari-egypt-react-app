import "./Carousel.scss"
import { LiaTripadvisor } from "react-icons/lia";
import { Link } from "react-router-dom"
// import Slider from "../Slider/Slider";

function Carousel() {
    return (
        <div className="container-carousel">
            <div className="text-carousel pt-5">
                <h1>
                    Watch The Stars Like Never Before
                </h1>
                <p>The best what you can see on our western desert tours is watching the stars around the campfire. It’s very different than any other place and I recommend the long programs traveling deeper into the desert to be far away from any light.            </p>
            </div>
            <div >
                <Link to={"https://www.tripadvisor.com.my/Attraction_Review-g303850-d2457093-Reviews-Desert_Safari_Egypt-Bawiti_Giza_Governorate.html"} target="blank" className="trip-icon"><LiaTripadvisor className="icon-trip" /></Link>
            </div>
            {/* <Slider /> */}

        </div>


    )
}


export default Carousel