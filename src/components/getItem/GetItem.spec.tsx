import { fireEvent, render, } from "@testing-library/react"
import GetItem from "."

describe('<GetItem />', () => {
    it('render a name', () => {
        const items = ['Warllei', 'Rafael', 'Gabriel']
        const { getByText } = render(<GetItem items={items} />)

        const getText = getByText('Warllei')
        expect(getText).toBeInTheDocument();
    });
    it('must select the item correctly when clicking', () => {
        const items = ['Warllei', 'Rafael', 'Gabriel']
        const { getByText, queryByText } = render(<GetItem items={items} />);
        expect(queryByText('Item selecionado:')).toBeNull();
        fireEvent.click(getByText('Warllei'));
        expect(getByText('Item selecionado: Warllei')).toBeInTheDocument();
    });
})


