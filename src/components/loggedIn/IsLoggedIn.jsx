import { useRecoilState } from 'recoil';
import { $Auth_Data } from '../../Store';
import { useNavigate } from 'react-router';
import React, { useEffect } from 'react'

export default function IsLoggedIn({ children }) {
    const [authData] = useRecoilState($Auth_Data);
    const navigate = useNavigate();
    useEffect(() => {
        if (!authData.isAuth) {
            navigate('/log-in');
        }

    }, [authData])
    return (
        children
    )
}