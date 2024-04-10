import { render } from "@testing-library/react"
import Greeting from "."

describe('Greeting component', () => {
    it('display the correct greeting message', () => {
        const { getByText } = render(<Greeting name="Warllei" />)
        const greetingText = getByText(/Hello, Warllei!/)
        expect(greetingText).toBeInTheDocument();    
    })
}) 