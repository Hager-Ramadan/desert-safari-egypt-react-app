import "./Owner.scss"
import hamadaPhoto from "../../Assets/hamada-omer.jpg"
function Owner() {
    return (
        <div>
            <div className="about-title">
                <h2>Invite You On A Unique Desert Safari Trip To Experience The Rich Bedouin Culture</h2>
            </div>
            <div className="row row-msg">
                <div className="col-lg-7 col-md-12 hamada-msg">
                    <p>Marhaba !!</p>
                    <p>I am Hamada Omer, owner of Desert Safari Egypt. I am a native of Bawiti, the largest village in the Bahariya Oasis and I’m of Bedouin tribe.</p>
                    <p>Being a Bedouin, desert is my life and my playground. This is how my passion is developed and turn into running my own business ‘Desert Safari Egypt’ and also my latest selfown Bedouin featured ecolodge ‘Omar Desert Camp’.</p>
                    <p>I have been working and leading desert safari off road trip for more than 20 years, one of the pioneers in the region of Egypt western desert. I am a qualified engineer who supervises vehicle maintenance myself during the trip as we are always on long tour, this is essentially important as no access to any workshop throughout the trip.</p>
                    <p>Because I love desert, all trips are personally organized and arranged by myself and my team assisting me. With my many years of experience I organize exclusive desert safari trip for my guest to experience places not commonly arranged by other tour managers.</p>
                    <p>I always and proud to share our rich Bedouin culture. My team and I invite you to experience the rich Bedouin culture on our exclusive desert safari tour. We offer tours of the western desert oasis, White & Black Desert and also the eastern desert of Egypt.</p>
                    <p>We explore these exotic locations by 4×4, camel riding, or trekking from day trip to multiple days desert safari tour package.</p>
                </div>
                <div className="col-lg-5 col-md-12 hamada-photo">
                    <img src={hamadaPhoto} alt="" />
                </div>
            </div>
        </div>
    )

}
export default Owner