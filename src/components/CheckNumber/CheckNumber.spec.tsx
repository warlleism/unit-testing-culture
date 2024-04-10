import { fireEvent, render, screen } from "@testing-library/react"
import { CheckNumber } from "."
import userEvent from "@testing-library/user-event"

describe('<CheckNumber />', () => {
    it('render a title', () => {
        render(<CheckNumber />)
        const title = screen.getByText('Componente Par ou Impar')
        expect(title).toBeInTheDocument();
    })

    it('render an input', () => {
        render(<CheckNumber />)
        const input = screen.getByPlaceholderText('Digite o número')
        expect(input).toBeInTheDocument()

    })
})

describe('when there is not error', () => {
    it('should renders null if error is enpty', () => {
        render(<CheckNumber />)
        const errorMessage = screen.queryByRole('alert')
        const input = screen.getByPlaceholderText('Digite o número')
        fireEvent.change(input, { target: { value: 123 } });
        expect(errorMessage).toHaveTextContent('')

    })
})

describe('when there is error', () => {
    it('should renders the error message section empy', () => {
        render(<CheckNumber />)

        const errorMessage = screen.queryByRole('alert')

        const input = screen.getByPlaceholderText('Digite o número')
        fireEvent.change(input, { target: { value: 'asdasdas' } });
        expect(errorMessage).toHaveTextContent('Por favor, digite um número.')
    })
})

describe('when the user types', () => {
    it('should renders Impar on the screen', () => {
        render(<CheckNumber />)
        const input = screen.getByPlaceholderText('Digite o número')
        userEvent.clear(input)
        userEvent.type(input, "1")
        const section = screen.getByRole("presentation")
        expect(section).toHaveTextContent("Impar")
    })

    it('should renders Par on the screen', () => {
        render(<CheckNumber />)
        const input = screen.getByPlaceholderText('Digite o número')
        userEvent.clear(input)
        userEvent.type(input, "2")
        const section = screen.getByRole("presentation")
        expect(section).toHaveTextContent("Par")
    })
})
