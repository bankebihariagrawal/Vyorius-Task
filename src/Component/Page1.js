import React from 'react';
import {Link } from 'react-router-dom'
const Page1 = () => {
    return (
        <div className="page1">
        <div className="row">
            <div className="col1">
            <h6 className="Page1h6"> CONNECTING THE DISCONNECTED </h6>
            <h1 className="mainHeading"><span className="orangeText"> Vyorius </span>brings <span className="textinSingleline">unmanned robots <span className="orangeText"> together</span></span>, <br /> wherever they are </h1>
            <p className="mainPageP"> With all of the operations, commanding and maintenance tools in one place, unmanned vehicles will stay connected and productive no matter where you’re operating. </p>
            <button type="button" className=" btn  button1"> Try Vyorius </button>
            <button className=" btn button2"><Link to="/solution/dataSync" className="learnmore">Learn More</Link> </button><br />
            <p className="deliveryLink"> <span> Need to order  ? <Link to="/#page2" className="linkstarted"> Get Started </Link></span> </p>
            </div>
            <div className="col1 page1imagecol"><img src="./images/3.png" alt="" className="image"/></div>
            <div className="col1 "></div>
        </div>
        </div>
    );
}
 
export default Page1;