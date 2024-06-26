import "./OurTeam.scss"
// import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';


function OurTeam(Team) {
    return (
        <Figure className="col-lg-3 col-md-6 col-sm-12 card-team m-0 p-0" >
            <div>
                <div>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={Team.Team.image}
                    />
                    <div className="name-team">
                        <h2>{Team.Team.name} </h2>
                        <h3>{Team.Team.work} </h3>
                    </div>
                </div>
            </div>

        </Figure>
    )

}
export default OurTeam