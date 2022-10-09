import React from "react";
import '../../css/style.css';
import TestHeader from "./TestHeader";
import TestHome from "./TestHome";

function Test() {

    return(
        <div className="wrapper">
            <div className="test__content">
                <TestHeader/>
                <TestHome/>
            </div>
        </div>
    );
}

export default Test;