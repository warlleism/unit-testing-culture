import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"
import { ZustandCounter } from "./ZustandCounter";
import useStore from "./zustandStore";
import { act } from "react-dom/test-utils";


//Define que antes de cada teste, o estado do store será resetado para o estado original.

const originalState = useStore.getState();
beforeEach(() => {
    useStore.setState(originalState)
})

//Descrição e execução dos testes:
describe('testing zustand', () => {

    it('number change when click the button "add one" ', () => {
        render(<ZustandCounter />)
        const counter = screen.getByRole('counterinfo')
        expect(counter).toHaveTextContent("1")

        const button = screen.getByText(/Increment/)
        fireEvent.click(button)
        expect(counter).toHaveTextContent("2")
    })

    it('number change when click the button "remove one" ', () => {
        render(<ZustandCounter />)

        const counter = screen.getByRole('counterinfo')
        expect(counter).toHaveTextContent("1")

        const button = screen.getByText(/Decrement/)
        fireEvent.click(button)
        expect(counter).toHaveTextContent("0")
    })

    it('change theme ', () => {
        render(<ZustandCounter />)
        expect(useStore.getState().theme).toBe(true);
        const iconTheme = screen.getByRole('iconTheme')
        fireEvent.click(iconTheme)
        expect(useStore.getState().theme).toBe(false);
    })
})
