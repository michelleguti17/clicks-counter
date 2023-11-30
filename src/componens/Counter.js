import React from "react";
import "../stylesheet/Counter.css"
function Counter({ clicksNum }){
    return (
        <div className="counter">
            {clicksNum}
        </div>
    );
}

export default Counter;