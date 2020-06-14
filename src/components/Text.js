import React from "react"


function Text({children, color, value}) {

    console.log('TEXT = ', value);

    return <div style={{color}}>
        {children} {value}
    </div>
}

export default Text;
