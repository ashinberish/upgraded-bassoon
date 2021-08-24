import styled from 'styled-components';
import React, {useState, useEffect} from 'react';

const Loader = () => {
    const [LoaderActive, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false)
         setTimeout(() => {
         setLoading(true)
         },3500)
     }, [])
     
    return (
        <LoaderBackground className = {`${LoaderActive ? "dhGy53" : ""}`}>
            <div className="loader-logo">
            <svg
			id="logoLoading"
			viewBox="0 0 214 245"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				id="logopath"
				d="M3.47888 62.9856L107 3.46059L210.521 62.9856V182.014L107 241.539L3.47888 182.014V62.9856Z"
				stroke="#64FFDA"
				strokeWidth="12"/>
            <path
                id="logotext"
				d="M133.688 142.406C134.062 143.531 134.297 144.422 134.391 145.078C134.484 145.734 134.359 146.234 134.016 146.578C133.672 146.891 133.062 147.078 132.188 147.141C131.312 147.234 130.109 147.281 128.578 147.281C126.984 147.281 125.734 147.25 124.828 147.188C123.953 147.156 123.281 147.078 122.812 146.953C122.344 146.797 122.016 146.594 121.828 146.344C121.641 146.094 121.484 145.766 121.359 145.359L117.281 133.172H94.5L90.6562 145.031C90.5312 145.469 90.3594 145.844 90.1406 146.156C89.9531 146.438 89.625 146.672 89.1562 146.859C88.7188 147.016 88.0781 147.125 87.2344 147.188C86.4219 147.25 85.3438 147.281 84 147.281C82.5625 147.281 81.4375 147.234 80.625 147.141C79.8125 147.047 79.25 146.828 78.9375 146.484C78.625 146.109 78.5156 145.594 78.6094 144.938C78.7031 144.281 78.9375 143.406 79.3125 142.312L98.0156 88.5C98.2031 87.9688 98.4219 87.5469 98.6719 87.2344C98.9219 86.8906 99.3125 86.6406 99.8438 86.4844C100.406 86.2969 101.172 86.1875 102.141 86.1562C103.109 86.0938 104.391 86.0625 105.984 86.0625C107.828 86.0625 109.297 86.0938 110.391 86.1562C111.484 86.1875 112.328 86.2969 112.922 86.4844C113.547 86.6406 113.984 86.8906 114.234 87.2344C114.516 87.5781 114.75 88.0469 114.938 88.6406L133.688 142.406ZM105.844 97.9219H105.797L97.2188 123.703H114.422L105.844 97.9219Z"
				fill="#64FFDA"/>
		    </svg>


            </div>

        </LoaderBackground>
    )
}

const LoaderBackground = styled.div`
    pointer-events: none;
    z-index: 5;
    position: fixed;
    background: var(--dark-navy);
    top: 0;
    left: 0;
    opacity: 1;
    width: 100%;
    height: 100%;
    animation-name: Fadeout;
    animation-delay: 3s;
    animation-duration: 1s;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @keyframes Fadeout{
        to{
            opacity: 0;
            display: none;
        }
    }
    #logopath{
        stroke-linecap: round;
        stroke-dasharray: 717;
        animation: line-anim 0.5s cubic-bezier(0.645,0.045,0.355,1) forwards;
        stroke-dashoffset: 717;
    }
    
    @keyframes line-anim{
        to{
            stroke-dashoffset: 0;
        }
    }
    #logotext{
        opacity: 0;
        animation: fadein 3s ease;
        animation-delay: 0.5s;
    }
    @keyframes fadein{
        0%{
            opacity: 0;
        }
        10%{
            opacity: 1;
        }

        100%{
            opacity: 1;
        }
    }
    #logoLoading{
        width: 90px;
        height: 90px;
        animation: 1s shrink cubic-bezier(0.645,0.045,0.355,1);
        animation-delay: 2.8s;
    }
    @keyframes shrink {
        from{
            opacity: 1;
            transform: scale(1);
        }
        to{
            opacity: 0;
            transform: scale(0.3);
        }
    }
    
    
    
`

export default Loader;