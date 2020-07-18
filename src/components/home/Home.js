import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="jumbotron">
            <h1>Pluralsight Administration</h1>
            <p>React, Redux and React Router for ultra-responsive web apps.</p>
            <Link to="about" className="btn btn-outline-primary btn-lg">Learn More</Link>
        </div>
    )
}

export default Home