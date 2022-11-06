import React from 'react';
import {useNavigate} from 'react-router-dom';
import { RouteName } from '../enums/Routes';

const NoPage = () => {
    const navigate = useNavigate();

    const returnToHomePage = () => {
        navigate(RouteName.HOME);
    }

    return <div className='page-not-found'>
        <h1>Error 404: page not found</h1>
        <button className='return-home-btn' onClick={returnToHomePage}>Return to home page</button>
    </div>
}

export default NoPage;
