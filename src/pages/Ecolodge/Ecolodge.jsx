import "./Ecolodge.scss"
import EcolodgeService from "../../components/EcolodgeService/EcolodgeService"
import EcoMap from "../../components/EcoMap/EcoMap"
import BgEcolodge from "../../components/BgEcolodge/BgEcolodge"
function Ecolodge() {
    return (
        <>
            <BgEcolodge />
            <EcolodgeService />
            <EcoMap />

        </>
    )
}
export default Ecolodge