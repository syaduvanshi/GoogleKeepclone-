import React from "react";


const Footer=()=>{

    const year =new Date().getFullYear();
    return(
        <>
        <footer className="foot">
           < p className="foot1"> Copyright © {year}</p>
        </footer>
        </>
    )
}

export default Footer;