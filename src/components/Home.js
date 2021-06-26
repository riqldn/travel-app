import NavBar from './NavBar';
import background from './imports/back.mp4';
import './Home.css';
import undraw from './imports/travigo.png'
import connect from './imports/connect.svg';
import phone from './imports/phone.svg';
import { Link } from 'react-router-dom';
import beach from './imports/beach.svg';
import konnect from './imports/konnect.svg';
import hang from './imports/hang.svg';
import {useEffect} from 'react';
const Home = () => {
    const backgro = document.querySelector(".wrapper");
    const reset = () => {
        backgro.classList.remove("purple");
        window.scrollY = 0;
    }
     
  
 
    function scrolling(){
     const wrapper = document.querySelector(".wrapper")
     const content = document.querySelector(".content2")
     const icon = document.querySelector(".fas");
        if(window.scrollY < 2100 && window.scrollY > 1250)
        {
            icon.classList.remove("font-blue")
        wrapper.classList.remove("purple")
         wrapper.classList.add("blue");
         content.classList.add("font-white")
        }
        if(window.scrollY < 1250)
        {
            icon.classList.add("font-blue")
            content.classList.remove("font-white");
            wrapper.classList.remove("blue");
        }
        if(window.scrollY > 2100){
            wrapper.classList.remove("blue")
            wrapper.classList.add("purple")
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',scrolling)

        return()=> window.removeEventListener('scroll',scrolling);
    },[])


    
   
    return (
        <>
            <>
                <NavBar id="top" />
                <div className="hero" >
                    <div className="hero-container">
                        <div className="hero-main">
                            <h1 className="hero-head">Welcome to Travigo</h1>
                            <p className="hero-description">Connecting you with other travelers for the ultimate travel experience </p>
                            <div className="hero-btn"> <Link className="ref" to="/">Get Started</Link> </div>
                        </div>
                        <div className="hero-img">
                            <img className="mockup" src={undraw} />
                        </div>
                    </div>

                    <video src={background} autoPlay muted loop />
                    <div className="overlay">
                    </div>


                </div>
            </>
            <div className="wrapper">
                <div className="content-1">
                    <div className="content-container">

                        <div className="content-img">
                            <img className="img" src={connect} />
                        </div>
                        <div className="content">
                            <h3 className="c-small">Connect</h3>
                            <h1 className="c-head" id="T">What is Travigo?</h1>
                            <p className="c-description">Travigo is a platfrom designed to connect travelers with each other, allowing them to socialize and experience more together</p>
                        </div>
                    </div>
                </div>
                <div className="content-2">
                    <div className="content2-container">
                        <div className="content2">
                            <h3 className="c2-small">Meet</h3>
                            <h1 className="c2-head">How does it work? <i className="fas fa-map-marked-alt font-blue"></i></h1>
                            <p className="c2-description">Travigo works by showing you all users within your radius. Their profile displays the information pertaining to the type of vacation they are looking to have, activites they are interested in and hobbies</p>
                        </div>
                        <div className="content2-img">
                            <img className="img2" src={phone} />
                        </div>

                    </div>
                </div>
                <div className="cards">
                    <div className="card-container">
                        <div className="card">
                            <div className="card-image">
                                <img className="c-img" src={hang} />
                            </div>
                            <div className="card-text">
                                <h1>Meet Up</h1>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <img className="c-img" src={konnect} />
                            </div>
                            <div className="card-text">
                                <h1>Connect</h1>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <img className="c-img" src={beach} />
                            </div>
                            <div className="card-text">
                                <h1>Explore</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="foot-row" >
                    <a className="x" onClick={reset} href="/">
                        <h1 className="foot-head">Travigo</h1>
                    </a>
                </div>
                <div className="foot-row">
                    <Link className="x flink">About Us</Link>
                    <Link className="x flink">Contact</Link>
                    <Link to="/" className="x flink" to="/signup">Sign Up</Link>
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
        </>
    )
}
export default Home;