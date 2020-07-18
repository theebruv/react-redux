import React from 'react'
import {useSelector } from "react-redux";

const About = () => {
    const courses = useSelector((state) => state.courses);
    console.log(courses);
    return (
        <div className="jumbotron">
            <h1>About</h1>
            <p>This app uses React, Redux and React Router and many other libraries.</p>
        </div>
    )
}

export default About
