import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { $Auth_Data } from '../../Store';
import { useNavigate } from 'react-router';

export default function NotLoggedIn({ children }) {
    const [authData] = useRecoilState($Auth_Data);
    const navigate = useNavigate();
    useEffect(() => {
        if (authData.isAuth) {
            navigate('/');
        }

    }, [authData])

    return (
        children
    )
}