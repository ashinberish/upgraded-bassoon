import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
const Home = () => {
    
    const Pagetransition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
    
   
    useEffect(() => {
        window.onunload = function () {
            sessionStorage.removeItem('Delay');
        }
        if (sessionStorage.getItem('Delay') === null) {
            sessionStorage.setItem("Delay", 0);
            gsap.from('.an01', {
                delay: 4.2,
                duration: 0.5,
                opacity: 0,
                y: 10
            })
            gsap.from('.an02', {
                delay: 4.3,
                duration: 0.5,
                opacity: 0,
                y: 10
            })
            gsap.from('.an03', {
                delay: 4.4,
                duration: 0.5,
                opacity: 0,
                y: 10
            })
            gsap.from('.an04', {
                delay: 4.5,
                duration: 0.5,
                opacity: 0,
                y: 10
            })
            gsap.from('.an05', {
                delay: 4.6,
                duration: 0.5,
                opacity: 0,
                y: 10
            })
            gsap.fromTo('.an06', {
                opacity: 0,
            }, {
                opacity: 1,
                delay: 4.8,
                duration: 1,
    
            })
        }
        
    }, []);
    return (
        <>
        <HeroWrapper initial={{opacity:1,y:50}} animate={{opacity:1,y:0}} exit={{opacity:0,y:50}} transition={Pagetransition}>
            <div orientation="left" className="left-SideElement an06">
                <ul>
                    <li>
                        <a href="https://github.com/ashinberish"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                    </li>
                    <li>
                        <a href="https://instagram.com/ashinberish/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/ashinbers/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/ashinberish"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                    </li>
                    <li>
                    <a href="https://www.linkedin.com/in/ashin-berish-26053b151/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                    </li>
                </ul>
            </div>
            <div className="container">
                <div className="title01">
                    <h5 className="an01">Hi, my name is</h5>
                    
                </div>
                <div className="title02">
                    <h1 className="an02">Ashin Berish.</h1>
                </div>
                <div className="title03">
                    <h1 className="an03">I build things for the web.</h1>
                </div>
                <div className="title04">
                    <h6 className="an04">I'm a CS student. From India. Currently focused on Frontend web development.</h6>
                </div>
                <div className="hero-btn">
                    <a className="an05" href="mailto:ashinberish@gmail.com">Get In Touch</a>
                </div>
            </div>
            <div orientation="right" className="right-SideElement an06">
                <div className="SideElementEmail">
                    <a href='mailto:ashinberish@gmail.com'>ashinberish@gmail.com</a>
                </div>
            </div>
            
            </HeroWrapper>
        </>
    )
}
const HeroWrapper = styled(motion.section)`
    position: absolute;
    background-color:var(--navy) ;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items:center;
    .left-SideElement{
        position: fixed;
        bottom: 0;
        left: 5%;
        
        ul{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items:center;
            li{
                margin-bottom: 2rem;
                transition: 0.3s ease;
                svg{
                    stroke: var(--light-slate);
                }
                svg:hover{
                    stroke: var(--green);
                }
            }
            li:hover{
                transform: translateY(-3px);
            }
        }
        ul::after{
            content: '';
            display: block;
            width: 1px;
            height: 90px;
            background-color:var(--light-slate);
        }
    }
    .right-SideElement{
        position: fixed;
        bottom: 0;
        right: 5%;
        .SideElementEmail{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items:center;
            a{
                writing-mode: vertical-rl;
                font-family: 'FiraCode';
                font-size: 15px;
                color: var(--light-slate);
                margin-bottom: 2rem;
            }
            a:hover{
                color:var(--green);
            }
        }
        .SideElementEmail::after{
            content: '';
            display: block;
            width: 1px;
            height: 90px;
            background-color:var(--light-slate);
        }
    }
    @media only screen and (max-width: 600px){
        .left-SideElement{
            display: none;
        }
        .right-SideElement{
            display: none;
        }
    }
    .container{
        display: flex;
        align-items: left;
        flex-direction: column;
        justify-content: center;
        width: 65%;
        height: 100%;
        .title01{
            h5{
            margin-top: 6rem;
            color: var(--green);
            font-family: 'FiraCode';
            font-size:1.5rem;
            }
        }
        .title02{
            h1{
            font-size: clamp(40px, 8vw, 80px);
            font-weight: bold;
            color:var(--lightest-slate)
            }
        }
        .title03{
            h1{
                font-size: clamp(40px, 8vw, 80px);
                color:var(--light-slate);
            }
        }
        .title04{
            h6{
                margin:4rem 0;
                font-weight:400;
                color:var(--light-slate);
                font-size:2rem;
            }
        }
        .hero-btn{
            margin:3rem 0;
            a{
                font-family:'firaCode';
                border-radius:5px;
                color:var(--green);
                border:2px solid var(--green);
                padding:1rem 1.5rem;
                font-size:1.5rem;
            }
            a:hover{
                background: rgba(100,255,218,0.1);;
            }
        }
    }
`

export default Home;