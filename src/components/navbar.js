import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { motion } from "framer-motion";
import pdf from '../assets/Resume.pdf';

const Navbar = () => {
    const [isActive, setActive] = useState('false');
    const handletoggle = () => {
        setActive(!isActive);
    };
    const HeaderAnimation = {
        hidden: {
            y: -10,
            opacity:0
        },
        show: {
            y: 0,
            opacity: 1,
        }
    }
    return (
        <Header>
            <NavTag>
                <NavWrapper>
                    <motion.div variants={HeaderAnimation} initial='hidden' animate='show' transition={{duration:0.2, ease: [0.43, 0.13, 0.23, 0.96],delay:4}} className="logo">
                    <Link to='/'>
                    <svg width="45" height="45" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
                        <path d="M82.25 6.49519L142.532 41.299C143.924 42.1029 144.782 43.5885 144.782 45.1962V114.804C144.782 116.412 143.924 117.897 142.532 118.701L82.25 153.505C80.8577 154.309 79.1423 154.309 77.75 153.505L17.468 118.701C16.0757 117.897 15.218 116.412 15.218 114.804V45.1962C15.218 43.5885 16.0757 42.1029 17.468 41.299L77.75 6.49519C79.1423 5.69134 80.8577 5.69134 82.25 6.49519Z" stroke="#64FFDA" strokeWidth="9"/>
                        <path d="M99.1133 95.8555C99.3008 96.3711 99.3945 96.793 99.3945 97.1211C99.418 97.4258 99.3359 97.6602 99.1484 97.8242C98.9609 97.9883 98.6445 98.0938 98.1992 98.1406C97.7773 98.1875 97.2031 98.2109 96.4766 98.2109C95.75 98.2109 95.1641 98.1875 94.7188 98.1406C94.2969 98.1172 93.9688 98.0703 93.7344 98C93.5234 97.9062 93.3594 97.7891 93.2422 97.6484C93.1484 97.5078 93.0547 97.332 92.9609 97.1211L89.0586 86.0469H70.1445L66.418 96.9805C66.3477 97.1914 66.2539 97.3789 66.1367 97.543C66.0195 97.6836 65.8438 97.8125 65.6094 97.9297C65.3984 98.0234 65.082 98.0938 64.6602 98.1406C64.2617 98.1875 63.7344 98.2109 63.0781 98.2109C62.3984 98.2109 61.8359 98.1758 61.3906 98.1055C60.9688 98.0586 60.6641 97.9531 60.4766 97.7891C60.3125 97.625 60.2305 97.3906 60.2305 97.0859C60.2539 96.7578 60.3594 96.3359 60.5469 95.8203L75.8047 53.5625C75.8984 53.3047 76.0156 53.0938 76.1562 52.9297C76.3203 52.7656 76.543 52.6367 76.8242 52.543C77.1289 52.4492 77.5039 52.3906 77.9492 52.3672C78.418 52.3203 79.0039 52.2969 79.707 52.2969C80.457 52.2969 81.0781 52.3203 81.5703 52.3672C82.0625 52.3906 82.4609 52.4492 82.7656 52.543C83.0703 52.6367 83.3047 52.7773 83.4688 52.9648C83.6328 53.1289 83.7617 53.3398 83.8555 53.5977L99.1133 95.8555ZM79.5312 58.5547H79.4961L71.6562 81.2305H87.4766L79.5312 58.5547Z" fill="#64FFDA"/>
                    </svg>
                    </Link>
                    </motion.div>
                    <div  className={"navlinks " + (isActive ? null : 'active')}>
                        <ul>
                            <motion.li variants={HeaderAnimation} initial='hidden' animate='show' transition={{duration:0.3, ease: [0.43, 0.13, 0.23, 0.96],delay:4}}><Link onClick={handletoggle} to="/"><span>01.</span>Home</Link></motion.li>
                            <motion.li variants={HeaderAnimation} initial='hidden' animate='show' transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96], delay: 4.2 }}><Link onClick={handletoggle} to="/about"><span>02.</span>About</Link></motion.li>
                            <motion.li variants={HeaderAnimation} initial='hidden' animate='show' transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96], delay: 4.3 }}><Link onClick={handletoggle} to="/contact"><span>03.</span>Contact</Link></motion.li>
                            <motion.li variants={HeaderAnimation} initial='hidden' animate='show' transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96], delay: 4.4 }}><a onClick={handletoggle} href={pdf} rel="noreferrer" target="_blank" className="resume-btn">Resume</a></motion.li>
                        </ul>
                    </div>
                    <div className={`hamburger ${isActive ? null : 'active'}`} onClick={handletoggle}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </NavWrapper>
            </NavTag>
        </Header>
    )
}
const Header = styled.header`
    z-index: 4;
    position: absolute;
    width: 100%;
    top: 0;
`
const NavTag = styled.nav`
    background-color:var(--navy);
`
const NavWrapper = styled.div`
    padding: 2.5rem 2rem;
    margin: 0 auto;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--navy);
    .logo{
        svg{
            fill: none;
            animation: fadedown 4s ease;
            animation-delay: 4s;
        }
        svg:hover{
            fill: var(--green-tint);
        }

    }
    .navlinks ul{
        display: flex;
        li{
            margin: 0rem 3rem;
            a{
                font-weight: bold;
                font-family: 'FiraCode';
                letter-spacing: 0.05em;
                font-size: 1.2rem;
                color: var(--lightest-slate);
                span{
                    color: var(--green);
                    font-family: 'FiraCode';
                    font-size: inherit;
                }
            }
            a:hover{
                color: var(--green);
            }
            .resume-btn{
                border-radius:5px;
                color:var(--green);
                border:1px solid var(--green);
                padding:1rem 1.5rem;
                font-size:1.3rem;
            }
            .resume-btn:hover{
                background: rgba(100,255,218,0.1);;
            }
        }
    }
    @media only screen and (max-width: 768px) {
	.navlinks {
		position: fixed;
		left: -100%;
		bottom: 0;
		width: 100%;
		height: 100%;
		background-color: var(--navy);
		transition: 0.3s ease;
		ul {
			height: 100%;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			li {
				padding: 2rem;
				a {
                    font-family: 'Calibre';
					font-size: 3rem;
				}
			}
		}
	}
	.navlinks.active {
		left: 0%;
	}

	nav .hamburger {
		display: block;
	}
	.hamburger.active .bar:nth-child(2) {
		opacity: 0;
	}

	.hamburger.active .bar:nth-child(1) {
		transform: translateY(8px) rotate(45deg);
	}

	.hamburger.active .bar:nth-child(3) {
		transform: translateY(-8px) rotate(-45deg);
	}
}
    .hamburger{
        padding: 0.5rem;
        display: none;
    }
    @media only screen and (max-width: 768px){
    .hamburger{
        display: block;
        cursor: pointer;
    }
    .bar{
        border-radius: 50px;
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: var(--light-slate);
    }
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
    }
    @keyframes fadedown{
        from{
            transform: rotateY(-2rem);
        }
        to{
            transform: rotateY(0);
        }
    }
    
`
export default Navbar;