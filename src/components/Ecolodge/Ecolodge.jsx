import "./Ecolodge.scss"
import { Link } from "react-router-dom"
function Ecolodge() {
    return (
        <div>
            {/* <div className="overlay"> </div> */}
            <div className="row-eco">
                <div className="col-lg-6 col-md-12">
                    <h3>Ecolodge</h3>
                    <h1>Our Ecolodge</h1>
                    <h1>“Omar Desert Camp”</h1>
                    <p>IIn the Bahariya Oasis far from any cities, we built an ecolodge,  ‘Omar Desert Camp’  especially for our guest.</p>
                    <div className="btn-find"> <span><Link to={"/ecolodge"}> Find Out More</Link></span></div>
                </div>
                <div className="col-lg-6 col-md-12"></div>
            </div>
        </div>
    )
}
export default Ecolodge