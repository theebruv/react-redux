import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/common/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import NotFound from "./components/NotFound";
import Courses from "./components/courses/Courses";
import ManageCourse from "./components/courses/ManageCourse";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        <div className='container'>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/courses'>
                    <Courses />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/course/:slug'>
                    <ManageCourse />
                </Route>
                <Route path='/course'>
                    <ManageCourse />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
            <ToastContainer autoClose={3000} hideProgressBar/>
        </div>
    );
};

export default App;
