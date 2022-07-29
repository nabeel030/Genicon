import React from 'react';
import {Link} from 'react-router-dom';

function Banner() {
    return (
        <>
        <header className="masthead">
            <div className="container">
                <div className="masthead-subheading">Welcome To Our Studio!</div>
                <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <Link className="btn btn-primary btn-xl text-uppercase" to="/create-widget">Get Started</Link>
            </div>
        </header>
        </>
    );
}

export default Banner;