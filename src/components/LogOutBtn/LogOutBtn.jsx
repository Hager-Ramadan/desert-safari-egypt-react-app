import React from 'react'
import { $Auth_Data } from '../../Store';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";


export default function LogOutButton() {
    const [authData, setAuthData] = useRecoilState($Auth_Data);

    function handelLogout() {
        setAuthData({
            isAuth: false,
            userId: null
        })
        localStorage.removeItem('loggedInUser')
    }
    return (
        <Link onClick={handelLogout} className="trip-icon"><IoIosLogOut /></Link>

    )
}