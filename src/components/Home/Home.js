import React, { Component } from 'react';
import './Home.css';
import SearchBox from './SearchBox';
import Venue from '../../utility/Venue';
import axios from 'axios';

class Home extends Component{

    componentDidMount() {
        const recCities = axios.get(`${window.apiHost}/cities`)
        
    }

    render(){
        return(
            <>
            <div className="container-fluid">
                <div className="row">
                    <div className="home col s12">
                        <div className="upper-fold">
                            <SearchBox />
                        </div>
                    </div>
                </div>
            </div>
            <div className="conatiner">
                <div className="row">
                    <div className="venue col s12">
                        <Venue />
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Home;