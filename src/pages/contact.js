import React from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Contact = () => {
    const Pagetransition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
    return (
        <ContactWrapper  initial={{ opacity: 0,y:50 }} animate={{ opacity: 1,y:0 }} exit={{ opacity:0,y:50}} transition={Pagetransition} >
            <div orientation="left" className="left-SideElement">
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
            <div className="contact-content">
            <p><span>03.</span> What's Next?</p>
            <div className="c-content">
                <h1>Get in Touch</h1>
                <a href="mailto:ashinberish@gmail.com">Say Hello</a>
                </div>
            </div>
            <div orientation="right" className="right-SideElement">
                <div className="SideElementEmail">
                    <a href='mailto:ashinberish@gmail.com'>ashinberish@gmail.com</a>
                </div>
            </div>

        </ContactWrapper>
    )
}
const ContactWrapper = styled(motion.section)`
    position: absolute;
    height: 100vh;
    width: 100%;
    background-color: var(--navy);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    .contact-content{
        text-align: center;
    }
    p{
        span{
            font-size: inherit;
            font-size: 1.5rem;
            font-family: 'FiraCode';
        }
        font-family: "FiraCode";
        color: var(--green);
        font-size: 1.6rem;
        }
    .c-content{
        text-align: center;
        h1{
            color: var(--lightest-slate);
            font-size: clamp(3rem,8vw,6rem);
            margin:2rem 0 4rem 0;
        }
        a{
            
            font-family: "FiraCode";
            font-size: 1.5rem;
            border-radius: 5px;
            border: 1px solid var(--green);
            padding: 1.5rem 1.5rem;
            color: var(--green);
        }
        a:hover{
            background:rgba(100,255,218,0.1);
        }
    }
`

export default Contact;