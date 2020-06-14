import React from "react";

function Light({onStateChange}) {
    const [onOff, setOnOff] = React.useState(false);
    const [color, setColor] = React.useState('black');

    const onButtonClick = () => {
        setOnOff(!onOff);
    };

    React.useEffect(() => {
        console.log('COMPONENT LOADED...');
    }, []);

    React.useEffect(() => {
        console.log('ON/OFF', onOff);
        setColor(onOff ? 'white' : 'black');

        if (typeof onStateChange === "function") {
            onStateChange();
        }
    }, [onOff]);

    return (
        <div style={{width: '100%', height: '100%', backgroundColor: color}}>
            <button onClick={onButtonClick}>{onOff ? 'ON' : 'OFF'}</button>
        </div>
    )
}

export default Light;
