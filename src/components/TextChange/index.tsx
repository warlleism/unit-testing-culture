import { useState } from "react"

const Greeting = (props: any) => {
    return <h1>{props.text}</h1>
}

const GreetingContainer = ({ name }: any) => {

    const [greetingText, setGreetingText] = useState('Hello World')

    function handleButtonClick() {
        setGreetingText('Text changed!')
    }


    return (
        <div>
            <Greeting text={greetingText} />
            <button onClick={handleButtonClick}>Change Text</button>
        </div>
    )
}

export default GreetingContainer;