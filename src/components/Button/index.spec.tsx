import { fireEvent, render } from "@testing-library/react"

import Button from "./button";

describe('<Button>', () => {
    it('should render button', () => {
        const { getByText, getByRole } = render(<Button>button</Button>);
        expect(getByRole('button')).toBeInTheDocument();
        expect(getByText('button')).toBeInTheDocument();
    });

    it('should render Carregando... text when isLoading was passed', () => {
        const { getByText } = render(<Button isLoading>button</Button>);
        expect(getByText('Carregando...')).toBeInTheDocument();
    });

    it('should render the button with background color green by default', () => {
        const { getByRole } = render(<Button isLoading>button</Button>);
        expect(getByRole('button')).toHaveStyle({
            backgroundColor: 'green'
        });
    });

    it('should render the button with background color red when color red was passed', () => {
        const { getByRole } = render(<Button isLoading color="red">button</Button>);
        expect(getByRole('button')).toHaveStyle({
            backgroundColor: 'color'
        });
    });

    it('should change background color to blue on hover', () => {
        const { getByRole } = render(<Button color="green">button</Button>);
        const button = getByRole('button');
        fireEvent.mouseOver(button);
        expect(button).toHaveStyle('background-color: blue');
        fireEvent.mouseLeave(button);
        expect(button).toHaveStyle('background-color: green');
    });
    

})