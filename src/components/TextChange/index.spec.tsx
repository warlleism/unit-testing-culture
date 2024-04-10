import { fireEvent, render } from "@testing-library/react"
import Greeting from "."
import GreetingContainer from "."

describe('GreetingContainer component', () => {

    it('changes Greeting text on button click', () => {
        const { getByText } = render(<GreetingContainer />)
        const buttonElement = getByText('Change Text')
        fireEvent.click(buttonElement)
        const updatedGreetingElement = getByText('Text changed!')
        expect(updatedGreetingElement).toBeInTheDocument();
    })

}) 