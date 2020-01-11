import React from 'react';

const Listado = (props) => {
    return (
        <ul>
            <li>PHP</li>
            <li>JAVA</li>
            <li>REACT</li>
            <li>C#</li>
        </ul>
    )
}

const Home = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <i className="fab fa-html5 fa-5x"></i>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <p className="text-success">Welcome to Webpack, Bootstrap and ReactJS</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Listado />
                </div>
            </div>
        </div>
    )
}

export default Home;

/* function Home(props){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <i className="fa fa-html5 fa-5x"></i>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <p className="text-success">Welcome to Webpack, Bootstrap and ReactJS</p>
                </div>
            </div>
        </div>
    )
} */