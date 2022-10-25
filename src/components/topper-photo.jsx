import "../components-style/topper-photo.css"
import {useEffect} from "react";
import def from "../images/0.png"

function TopperPhoto ({image}) {



    // useEffect(() => {
    //     try {
    //         console.log("../images/" + image)
    //         setTimeout(() => {def = require("../images/" + image);}, 10)
    //     } catch (e) {
    //         console.log(e);
    //     }
    //
    // })
    console.log(image)
    console.log(image instanceof String)
    if (typeof test === 'string') {
        return (
            <div className={"topper-photo"}>
                <img src={def} alt="image"/>
            </div>
        );
    } else {
        return (
            <div className={"topper-photo"}>
                <img src={image} alt="image"/>
            </div>
        );
    }


}

export default TopperPhoto;
