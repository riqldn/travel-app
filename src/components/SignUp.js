import './Home.css';
import React from 'react';
import NavBar from './NavBar';
import './SignUp.css'
import { Link } from 'react-router-dom'
const SignUp = ()=> {
   
   
        const reset = () => {

            window.scrollY = 0;
        }
        console.log(window.location.pathname);

        return (
            <div>


                <NavBar color="purp" />
                <div className="form-container">
                    <form action="/" method="get">
                        <div className="names">

                            <input className="nme" type="text" placeholder="First Name" />
                            <input className="nme" type="text" placeholder="Last Name" />
                        </div>

                        <input className="in" type="email" placeholder="Email" />
                        <input className="in" type="password" placeholder="Password" />
                        <input className="in" type="password" placeholder="Confirm Password" />
                        <button className="submit" type="submit">Submit</button>
                    </form>
                </div>


                <footer className="footer">
                    <div className="foot-row" >
                        <a className="x" onClick={reset} href="/signup">
                            <h1 className="foot-head">Travigo</h1>
                        </a>
                    </div>
                    <div className="foot-row">
                        <Link className="x flink">About Us</Link>
                        <Link className="x flink">Contact</Link>
                        <Link to="/" className="x flink">Sign Up</Link>
                    </div>
                    <div className="foot-row">
                        <Link className="x flink">Privacy Policy</Link>
                        <Link className="x flink">Terms & Conditions</Link>

                    </div>
                    <div className="foot-row">
                        <Link className="x flink"><i className="far fa-envelope"></i></Link>
                        <Link className="x flink"><i className="fab fa-twitter"></i></Link>
                        <Link className="x flink"><i className="fab fa-instagram"></i></Link>
                    </div>
                    <div className="foot-row">
                        <p className="foot-p">Phone: 0123456789</p>
                    </div>
                    <div className="foot-row">
                        <p className="foot-p">Travigo is a trading name of Imaginary Technology Ltd. Company number: 1234567<br /> Sesame Place, 78 Sesame Street, London, United Kingdom, AB1 3CD</p>
                    </div>
                </footer>
            </div>
        )
    }


export default SignUp;