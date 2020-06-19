import React from "react"
import Text from "./Text";

function Timer({step = 1}) {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        let handle = setInterval(() => {
            setCount(state => state + step)
        }, 1000);

        return () => {
            clearInterval(handle);
        }
    }, []);

    return (
        <div>
            <Text color="green">
                {count}
            </Text>
        </div>
    )
}


export default Timer;
