import "./Header.scss"
import { Link, NavLink } from "react-router-dom"
import logo from "../../Assets/logo-01.png"
import { FaUserAlt } from "react-icons/fa";
import LogOutButton from "../LogOutBtn/LogOutBtn";
import { $Auth_Data } from "../../Store";
import { useRecoilState } from "recoil";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LiaTripadvisor } from "react-icons/lia";






function Header() {
    const [authData] = useRecoilState($Auth_Data);
    const loginData = JSON.parse(localStorage.getItem("loggedInUser"));
    const [navbar, setNavbar] = useState(false);
    const [CurrentIndex, setCurrentIndex] = useState(0);
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }
    const headerLink = [
        { path: "/", name: "HOME" },
        { path: "/about-us", name: "ABOUT US" },
        { path: "/activities", name: "ACTIVITIES" },
        { path: "/ecolodge", name: "ECOLODGE" },
        { path: "/contact-us", name: "CONTACT US" },
    ]

    window.addEventListener('scroll', changeBackground);
    return (
        <header className={navbar ? 'navbar active' : 'navbar'}>
            <div className="header-container">
                <div className="logo">
                    <Link to={"/"}><img src={logo} /></Link>
                </div>
                <nav>
                    <ul className="nav">

                        {headerLink.map((link, index) => {
                            return (<li>
                                <Link
                                    onClick={() => {
                                        setCurrentIndex(index);
                                    }}
                                    key={index}
                                    to={link.path}
                                    className={CurrentIndex == index ? "activeLink" : null}
                                >
                                    {link.name}
                                </Link></li>
                            );
                        })}
                    </ul>
                    <div className="header-btns">
                        <Link className="header-button" to={"/contact-us"}>  Book Now</Link>

                        <div className="social-wrap">
                            <span className="d-none d-md-block">{authData.isAuth ? (
                                <LogOutButton />
                            ) : (
                                <div>
                                    <Link to={"/log-in"}> <FaUserAlt /></Link>
                                </div>
                            )}</span>
                        </div>
                        <button className="btn btn-responsive" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><FaBarsStaggered /></button>

                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasRightLabel"></h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="nav-responsive">
                                    <li><Link reloadDocument to={"/"}>HOME</Link></li>
                                    <li><Link reloadDocument to={"/about-us"}>ABOUT US</Link></li>
                                    <li><Link reloadDocument to={"/activities"}>ACTIVITIES</Link></li>
                                    <li><Link reloadDocument to={"/ecolodge"}>ECOLODGE</Link></li>
                                    <li><Link reloadDocument to={"/contact-us"}>CONTACT US</Link></li>
                                </ul>
                                {/* <Link className="header-button" to={"/contact-us"}><div className="btn-book"> Book Now </div></Link> */}

                                <div className="social-wrap responsive-social pt-4">
                                    <Link to={"https://api.whatsapp.com/send/?phone=201286824751&text&type=phone_number&app_absent=0"} target="blank" className="whatsapp"><FaWhatsapp /></Link>
                                    <Link to={"https://www.tripadvisor.com.my/Attraction_Review-g303850-d2457093-Reviews-Desert_Safari_Egypt-Bawiti_Giza_Governorate.html"} target="blank" className="advisor"><LiaTripadvisor /></Link>
                                    <span className="d-none d-md-block">{authData.isAuth ? (
                                        <LogOutButton />
                                    ) : (
                                        <div>
                                            <Link to={"/log-in"}> <FaUserAlt /></Link>
                                        </div>
                                    )}</span>
                                    {/* <div className="btn-book btn-book-ph"><Link className="header-button" to={"/contact-us"}> Book Now </Link></div> */}
                                </div>
                            </div>
                        </div>

                    </div>

                </nav>

            </div>
        </header>
    )

}
export default Header