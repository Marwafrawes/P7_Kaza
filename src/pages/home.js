import React from "react";
import './home.scss';
import {Banner} from '../components/Banner/Banner';
import {Header} from "../components/Header/Header";
import {LocationList} from '../components/LocationList/LocationList';
import {Footer} from '../components/Footer/Footer'; 
export const Home = ({match}) => {
    return(
        <div className="home">
            <Header />
            <Banner />
            <LocationList />
            <Footer />
        </div>
    )
}