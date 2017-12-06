import React, { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
 
export default function Home(props) {
        return (
            <div>
                
                <div>
                    <Link to='/hello'> <h2>Hello</h2> </Link>
                    <Link to='/'> <h2>Landing </h2></Link>
                    <Link to='/home'> <h2>Home </h2></Link>
                </div>
                
                <h1>Home</h1>
                <p>hello there im jaden</p>
            </div>
        )
}
