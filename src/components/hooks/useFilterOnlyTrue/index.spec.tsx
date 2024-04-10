import useFilterOnlyTrue from './useFilterOnlyTrue';

describe('useFilterOnlyTrue', () => {
    it('should return an array with objects where all properties are true', () => {
        const filterOnlyTrue = useFilterOnlyTrue();
        const filteredArray = filterOnlyTrue();

        filteredArray.forEach(obj => {
            expect(obj).toEqual({ item1: true, item2: true, item3: true });
        });
    });
});
