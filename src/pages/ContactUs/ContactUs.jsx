import ContactTitle from "../../components/ContactTitle/ContactTitle"
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactMap from "../../components/ContactMap/ContactMap"
import BgContact from "../../components/BgContact/BgContact"
function ContactUs() {
    return (
        <div>
            <BgContact />
            <ContactTitle />
            <ContactForm />
            <ContactMap />
        </div>
    )

}
export default ContactUs