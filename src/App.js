import React from "react"
import Text from "./Text";
import Timer from "./Timer";

function App() {
    const [state, setState] = React.useState(false);

    const onStateChange = () => {
        setState(!state);
    };

    return (
        <div>
            <Text color={state ? "blue" : "red"} value="Hello"/>
            <Text color={state ? "red" : "blue"} value="World"/>
            <Timer/>
            <Text color="orange">
                <Text value="Hello"/>
                <Text value="World"/>
            </Text>
        </div>
    )
}

export default App
