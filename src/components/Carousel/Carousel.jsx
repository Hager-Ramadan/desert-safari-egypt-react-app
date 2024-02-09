import "./Carousel.scss"
import '@splidejs/splide/css';
// import '@splidejs/splide/css/skyblue';
// import '@splidejs/splide/css/sea-green';
import { LiaTripadvisor } from "react-icons/lia";
import { Link } from "react-router-dom"
import { Splide, SplideSlide } from '@splidejs/react-splide';


function Carousel() {
    // new Splide('.splide', {
    //     type: 'loop',
    //     autoplay: 'pause',
    //     perPage: 3,
    // });
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
            <div>
                <section className="splide">
                    <div className="splide__slider">
                        <div class="splide__track">
                            <ul className="splide__list">
                                <li className="splide__slide">Slide 01</li>
                                <li className="splide__slide">Slide 02</li>
                                <li className="splide__slide">Slide 03</li>
                            </ul>
                        </div>
                    </div>


                    <button className="splide__toggle" type="button">
                        <span className="splide__toggle__play">Play</span>
                        <span className="splide__toggle__pause">Pause</span>
                    </button>
                </section>
            </div>
        </div>
    )
}
export default Carousel